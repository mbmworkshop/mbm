function toggleNav() {
	var nav_container = select('#nav-collapsable');
	nav_container.classList.toggle('h-0');
	nav_container.classList.toggle('h-auto');
}

ready(() => {
	var lg_media = window.matchMedia('(min-width: 1024px)');

	addEvent(lg_media, 'change', (e) => {
		var nav_container = select('#nav-collapsable');
		if (nav_container.classList.contains('h-auto')) {
			nav_container.classList.remove('h-auto');
		}
		nav_container.classList.add('h-0');
	});

	// var nav = select('#nav-overall');
	// nav.getBoundingClientRect().height

	var nav_items = selectAll('.nav-item');
	nav_items.forEach((nav_item) => {
		addEvent(nav_item, 'click', (e) => {
			if (select('#nav-collapsable').classList.contains('h-auto')) {
				toggleNav();
			}
		})
	});
})
