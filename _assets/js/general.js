//add event construct for modern browsers or IE
//which fires the callback with a pre-converted target reference
function addEvent(node, type, callback) {
  if (node.addEventListener) {
    node.addEventListener(
      type,
      function(e) {
        callback(e, e.target);
      },
      false
    );
  } else if (node.attachEvent) {
    node.attachEvent("on" + type, function(e) {
      callback(e, e.srcElement);
    });
  }
}

function addClass(node, cl) {
    if (!node.classList.contains(cl)) {
        node.classList.add(cl);
    }
}

function removeClass(node, cl) {
    while (node.classList.contains(cl)) {
        node.classList.remove(cl);
    }
}

function select(name) {
    return document.querySelector(name);
}

function selectAll(name) {
    return document.querySelectorAll(name);
}

function toggleLabelValidity(label, valid) {
    if (valid) {
      removeClass(label, 'form-label-invalid');
      addClass(label, 'form-label-valid');
    } else {
      addClass(label, 'form-label-invalid');
      removeClass(label, 'form-label-valid');
    }
}

/*!
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node} form   The form to serialize
 * @return {String}      The serialized form data
 */
var serialize = function (form) {

    // Setup our serialized data
    var serialized = [];

    // Loop through each field in the form
    for (var i = 0; i < form.elements.length; i++) {

        var field = form.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
            for (var n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
            }
        }

        // Convert field data to a query string
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
        }
    }

    return serialized.join('&');

};

function ready(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(() => {
  var external_boxes = selectAll('.external');
  external_boxes.forEach((box) => {
    var links = box.querySelectorAll('a');
    links.forEach((link) => {
      link.setAttribute('rel', 'noreferrer noopener');
      link.setAttribute('target', '_blank');
    });
  });
});
