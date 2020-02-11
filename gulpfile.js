const { src, dest, parallel, watch } = require('gulp');
const postcss = require('gulp-postcss');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');

function cssBuild() {
	return src('_assets/css/*.css')
		.pipe(sourcemaps.init())
		.pipe(postcss())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('assets/css'));
}

function jsBuild() {
	return src('_assets/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('index.js'))
		.pipe(babel())
		.pipe(gulpif(process.env.NODE_ENV === 'production', uglify()))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('assets/js'));
}

exports.default = function() {
	watch('_assets/css/*.css', cssBuild);
	watch('_assets/js/*.js', jsBuild);
}
exports.build = parallel(cssBuild, jsBuild)