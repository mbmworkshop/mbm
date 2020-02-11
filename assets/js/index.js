//add event construct for modern browsers or IE
//which fires the callback with a pre-converted target reference
function addEvent(node, type, callback) {
  if (node.addEventListener) {
    node.addEventListener(type, function (e) {
      callback(e, e.target);
    }, false);
  } else if (node.attachEvent) {
    node.attachEvent("on" + type, function (e) {
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
  var serialized = []; // Loop through each field in the form

  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i]; // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields

    if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue; // If a multi-select, get all selections

    if (field.type === 'select-multiple') {
      for (var n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
      }
    } // Convert field data to a query string
    else if (field.type !== 'checkbox' && field.type !== 'radio' || field.checked) {
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
      }
  }

  return serialized.join('&');
};

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function toggleNav() {
  var nav_container = select('#nav-collapsable');
  nav_container.classList.toggle('h-0');
  nav_container.classList.toggle('h-auto');
}

ready(function () {
  var lg_media = window.matchMedia('(min-width: 1024px)');
  addEvent(lg_media, 'change', function (e) {
    var nav_container = select('#nav-collapsable');

    if (nav_container.classList.contains('h-auto')) {
      nav_container.classList.remove('h-auto');
    }

    nav_container.classList.add('h-0');
  }); // var nav = select('#nav-overall');
  // nav.getBoundingClientRect().height

  var nav_items = selectAll('.nav-item');
  nav_items.forEach(function (nav_item) {
    addEvent(nav_item, 'click', function (e) {
      if (select('#nav-collapsable').classList.contains('h-auto')) {
        toggleNav();
      }
    });
  });
});
ready(function () {
  // Deal with sending the form
  var form = select('#reg-form');
  var url = 'https://script.google.com/macros/s/' + 'AKfycbwM0V59PxYwDteAqueZ9ZhP6_9fmAkMiNnxqqd8KYbpKXaxl3U/exec'; // Observers should not submit an abstract

  var presentation_forms = selectAll('input[type=radio][name=regInputPresentationForm]');
  presentation_forms.forEach(function (val) {
    addEvent(val, 'change', function (e) {
      var ns = ['#regInputTitle', '#regInputAuthors', '#regInputAffiliations', '#regInputAbstract'];

      if (e.currentTarget.value == 'Observer') {
        ns.forEach(function (n) {
          select(n).setAttribute('disabled', '');
          select(n).removeAttribute('required');
          select(n + 'Group').style.display = 'none';
        });
      } else {
        ns.forEach(function (n) {
          select(n).removeAttribute('disabled');
          select(n).setAttribute('required', '');
          select(n + 'Group').style.display = 'flex';
        });
      }
    });
  }); // If participant type is 'other' then they should specify
  // what they do

  addEvent(select('#regInputParticipantType'), 'change', function (e) {
    var type_other = select('#regInputParticipantTypeOther');
    label = select('label[for=regInputParticipantType]');

    if (e.currentTarget.value === 'other') {
      type_other.style.display = 'block';
      type_other.setAttribute('required', '');

      if (type_other.checkValidity()) {
        removeClass(label, 'form-label-invalid');
        addClass(label, 'form-label-valid');
      }
    } else {
      type_other.style.display = 'none';
      type_other.removeAttribute('required');
      removeClass(label, 'form-label-invalid');
      addClass(label, 'form-label-valid');
    }
  });
  addEvent(select('#regInputParticipantTypeOther'), 'change', function (e) {
    var type = select('#regInputParticipantType');

    if (type.value === 'other') {
      label = select('label[for=regInputParticipantType]');
      toggleLabelValidity(label, e.currentTarget.checkValidity());
    }
  });
  formInputs = selectAll('input');
  formInputs.forEach(function (input) {
    if (input.required) {
      if (input.type !== "radio") {
        addEvent(input, 'change', function (e) {
          name = e.currentTarget.id;
          label = select('label[for=' + name + ']');
          toggleLabelValidity(label, e.currentTarget.checkValidity());
        });
      }
    }
  }); // Word Counter

  addEvent(select('#regInputAbstract'), 'input', function (e) {
    var word_count = 0;

    if (e.currentTarget.value.length) {
      var words = select('#regInputAbstract').value.split(/\s+/);

      while (words.indexOf('') > -1) {
        words.pop();
      }

      var word_count = words.length;
    }

    select('#regInputAbstractWordCount').innerText = "Word count: " + word_count;

    if (word_count > 0 && word_count <= 300) {
      e.currentTarget.setCustomValidity('');
      form.checkValidity();
    } else {
      if (word_count == 0) {
        e.currentTarget.setCustomValidity('Abstract needs to be provided');
        form.checkValidity();
      } else {
        e.currentTarget.setCustomValidity('Abstract is too long');
        form.checkValidity();
      }
    }
  });
  addEvent(select('#submitForm'), 'click', function (e) {
    e.preventDefault();
    var ns = ['#regInputTitle', '#regInputAuthors', '#regInputAffiliations', '#regInputAbstract']; // Special checking for field abstract

    if (select('#regInputTalk').checked || select('#regInputPoster').checked) {
      ns.forEach(function (n) {
        select(n).setAttribute('required', '');
      });
      var word_count = 0;

      if (select('#regInputAbstract').value.length) {
        select('#regInputAbstract').value.split(/\s+/).length;
      }

      if (word_count == 0) {
        // Empy abstract
        select('#regInputAbstract').setCustomValidity('Abstract needs to be provided.');
        select('#regInputAbstractInvalidFeedback').innerText = 'Abstract needs to be provided.';
      }

      if (word_count <= 300) {
        select('#regInputAbstract').setCustomValidity('');
      } else {
        select('#regInputAbstract').setCustomValidity('Abstract too long');
        select('#regInputAbstractInvalidFeedback').innerText = 'Abstract too long';
      }
    } else {
      ns.forEach(function (n) {
        select(n).removeAttribute('required');
      });
    } // Activate checking of participant type 'other' text field
    // if participant type is 'other'


    if (select('#regInputParticipantType').value == 'other') {
      select('#regInputParticipantTypeOther').setAttribute('required', '');
    } else {
      select('#regInputParticipantTypeOther').removeAttribute('required');
    } // Do input checking before sending


    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serialize(form))
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        select('#submit-form').setAttribute('disabled', '');
        select('#reg-output').innerText = 'Registration successfully submitted';
        addClass(select('#reg-output'), 'text-success');
      }).catch(function (error) {
        console.error('Error:', error);
      });
    }
  });
});
//# sourceMappingURL=index.js.map
