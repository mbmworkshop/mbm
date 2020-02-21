const { src, dest, series, parallel, watch } = require('gulp');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const hash = require('gulp-hash');
const del = require('del');

function cssBuildClean() {
	return del('_assets/build/css/*');
}

function jsBuildClean() {
	return del('_assets/build/js/*');
}

function cssBuild() {
	return src('_assets/css/*.css')
		.pipe(sourcemaps.init())
		.pipe(postcss())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('_assets/build/css'));
}

function jsBuild() {
	return src('_assets/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('index.js'))
		.pipe(babel())
		.pipe(gulpif(process.env.NODE_ENV === 'production', uglify()))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('_assets/build/js'));
}

function cssHash() {
	return src('_assets/build/css/*.css')
		.pipe(hash())
		.pipe(src('_assets/build/css/*.css.map', { passthrough: true }))
		.pipe(dest('assets/css'))
		.pipe(hash.manifest('_data/assets.json', {
			append: true,
			deleteOld: true,
			sourceDir: __dirname + 'assets/css'
		}))
		.pipe(dest('.')) // Write the manifest file
}

function jsHash() {
	return src('_assets/build/js/*.js')
		.pipe(hash())
		.pipe(src('_assets/build/js/*.js.map', { passthrough: true }))
		.pipe(dest('assets/js'))
		.pipe(hash.manifest('_data/assets.json', {
			append: true,
			deleteOld: true,
			sourceDir: __dirname + 'assets/js'
		}))
		.pipe(dest('.')) // Write the manifest file
}


exports.default = function() {
	watch('_assets/css/*.css', series(
		cssBuildClean, cssBuild, cssHash));
	watch('_assets/js/*.js', series(
		jsBuildClean, jsBuild, jsHash));
}
exports.build = parallel(
	series(cssBuildClean, cssBuild, cssHash),
	series(jsBuildClean, jsBuild, jsHash)
)
