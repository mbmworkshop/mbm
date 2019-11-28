function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  var md_media = window.matchMedia('(min-width: 768px)');
  md_media.addEventListener('change', function (e) {
    var nav_items = document.querySelector('#nav-collapsable');

    if (nav_items.classList.contains('block')) {
      nav_items.classList.remove('block');
    }

    nav_items.classList.add('hidden');
  });
});

function toggleNav() {
  var nav_items = document.querySelector('#nav-collapsable');

  if (nav_items.classList.contains('hidden')) {
    nav_items.classList.remove('hidden');
    nav_items.classList.add('block');
  } else {
    nav_items.classList.remove('block');
    nav_items.classList.add('hidden');
  }
}
