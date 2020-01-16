function ready(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(() => {
	var md_media = window.matchMedia('(min-width: 768px)');

	md_media.addEventListener('change', (e) => {
		var nav_items = document.querySelector('#nav-collapsable');
		if (nav_items.classList.contains('h-auto')) {
			nav_items.classList.remove('h-auto');
		}
		nav_items.classList.add('h-0');
	});

	// var nav = document.querySelector('#nav-overall');
	// nav.getBoundingClientRect().height
})

function toggleNav() {
	var nav_items = document.querySelector('#nav-collapsable');
	nav_items.classList.toggle('h-0');
	nav_items.classList.toggle('h-auto');
}