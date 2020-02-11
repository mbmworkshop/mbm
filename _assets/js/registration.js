ready(() => {
  // Deal with sending the form
  var form = select('#reg-form');
  var url = 'https://script.google.com/macros/s/' +
    'AKfycbwM0V59PxYwDteAqueZ9ZhP6_9fmAkMiNnxqqd8KYbpKXaxl3U/exec';

  // Observers should not submit an abstract
  var presentation_forms = selectAll(
    'input[type=radio][name=regInputPresentationForm]');
  presentation_forms.forEach((val) => {
    addEvent(val, 'change', (e) => {
      var ns = ['#regInputTitle', '#regInputAuthors',
                '#regInputAffiliations', '#regInputAbstract'];
      if (e.currentTarget.value == 'Observer') {
        ns.forEach((n) => {
           select(n).setAttribute('disabled', '');
           select(n).removeAttribute('required');
           select(n + 'Group').style.display = 'none';
        });
      } else {
        ns.forEach((n) => {
          select(n).removeAttribute('disabled');
          select(n).setAttribute('required', '');
          select(n + 'Group').style.display = 'flex';
        });
      }
    })
  });

  // If participant type is 'other' then they should specify
  // what they do
  addEvent(select('#regInputParticipantType'), 'change', (e) => {
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

  addEvent(select('#regInputParticipantTypeOther'), 'change', (e) => {
    var type = select('#regInputParticipantType');
    if (type.value === 'other') {
      label = select('label[for=regInputParticipantType]');
      toggleLabelValidity(label, e.currentTarget.checkValidity());
    }
  });

  formInputs = selectAll('input');
  formInputs.forEach((input) => {
    if (input.required) {
      if (input.type !== "radio") {
        addEvent(input, 'change', (e) => {
          name = e.currentTarget.id;
          label = select('label[for=' + name + ']');
          toggleLabelValidity(label, e.currentTarget.checkValidity());
        });
      }
    }
  });

  // Word Counter
  addEvent(select('#regInputAbstract'), 'input', (e) => {
    var word_count = 0;
    if (e.currentTarget.value.length) {
      var words = select('#regInputAbstract')
        .value.split(/\s+/);
      while(words.indexOf('') > -1) { words.pop(); }
      var word_count = words.length;
    }
    select('#regInputAbstractWordCount').innerText =
      "Word count: " + word_count;

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

  addEvent(select('#submitForm'), 'click', (e) => {
    e.preventDefault();

    var ns = ['#regInputTitle', '#regInputAuthors',
              '#regInputAffiliations', '#regInputAbstract'];

    // Special checking for field abstract
    if (select('#regInputTalk').checked || select('#regInputPoster').checked) {
      ns.forEach((n) => { select(n).setAttribute('required', ''); });

      var word_count = 0;
      if (select('#regInputAbstract').value.length) {
        select('#regInputAbstract').value.split(/\s+/).length;
      }
      if (word_count == 0) {
        // Empy abstract
        select('#regInputAbstract')
          .setCustomValidity('Abstract needs to be provided.');
        select('#regInputAbstractInvalidFeedback')
          .innerText = 'Abstract needs to be provided.';
      }
      if (word_count <= 300) {
        select('#regInputAbstract')
          .setCustomValidity('');
      } else {
        select('#regInputAbstract')
          .setCustomValidity('Abstract too long');
        select('#regInputAbstractInvalidFeedback')
          .innerText = 'Abstract too long';
      }
    } else {
      ns.forEach((n) => { select(n).removeAttribute('required'); });
    }

    // Activate checking of participant type 'other' text field
    // if participant type is 'other'
    if (select('#regInputParticipantType').value == 'other') {
      select('#regInputParticipantTypeOther')
        .setAttribute('required', '');
    } else {
      select('#regInputParticipantTypeOther')
        .removeAttribute('required');
    }

    // Do input checking before sending
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serialize(form))
      })
      .then((response) => response.json())
      .then((data) => {
        select('#submit-form').setAttribute('disabled', '');
        select('#reg-output').innerText =
          'Registration successfully submitted';
        addClass(select('#reg-output'), 'text-success');
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    }
  });
});
