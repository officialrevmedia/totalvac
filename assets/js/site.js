/* TotalVac Solutions: progressive enhancement only.
   Every page remains readable and navigable if this file fails to load. */

(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  /* ------------------------------------------------------------- preloader */
  /* Removed as soon as the page is ready. The CSS animation clears it anyway,
     so a JavaScript failure never leaves a visitor staring at a black screen.
     It runs once per browser session, not on every page view. */
  var preloader = document.getElementById('preloader');
  if (preloader) {
    var seen = false;
    try {
      seen = window.sessionStorage.getItem('tv-intro') === '1';
    } catch (error) {
      seen = false;
    }

    var clearIntro = function () {
      preloader.classList.add('is-done');
      window.setTimeout(function () {
        if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
      }, 450);
    };

    if (seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      preloader.parentNode.removeChild(preloader);
    } else {
      try {
        window.sessionStorage.setItem('tv-intro', '1');
      } catch (error) {
        /* private browsing, nothing to do */
      }
      if (document.readyState === 'complete') window.setTimeout(clearIntro, 900);
      else window.addEventListener('load', function () {
        window.setTimeout(clearIntro, 700);
      });
      /* Hard stop, whatever else happens */
      window.setTimeout(clearIntro, 2200);
    }
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- header */
  var header = document.querySelector('[data-header]');
  if (header) {
    var setScrolled = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  /* ----------------------------------------------------------- mobile menu */
  var menu = document.querySelector('[data-menu]');
  var toggles = document.querySelectorAll('[data-menu-toggle]');
  var lastFocused = null;

  function focusables() {
    return menu
      ? Array.prototype.slice.call(
          menu.querySelectorAll('a[href], button:not([disabled])')
        )
      : [];
  }

  function openMenu() {
    if (!menu) return;
    lastFocused = document.activeElement;
    menu.classList.add('is-open');
    menu.removeAttribute('inert');
    document.body.style.overflow = 'hidden';
    toggles.forEach(function (t) {
      t.setAttribute('aria-expanded', 'true');
    });
    window.setTimeout(function () {
      var first = focusables()[0];
      if (first) first.focus();
    }, 60);
  }

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
    toggles.forEach(function (t) {
      t.setAttribute('aria-expanded', 'false');
    });
    window.setTimeout(function () {
      if (!menu.classList.contains('is-open')) menu.setAttribute('inert', '');
    }, 320);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  toggles.forEach(function (t) {
    t.addEventListener('click', function () {
      if (menu && menu.classList.contains('is-open')) closeMenu();
      else openMenu();
    });
  });

  if (menu) {
    menu.setAttribute('inert', '');
    menu.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (link) closeMenu();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!menu || !menu.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeMenu();
      return;
    }
    if (e.key !== 'Tab') return;
    var items = focusables();
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024 && menu && menu.classList.contains('is-open')) closeMenu();
  });

  /* -------------------------------------------------------------- accordion */
  document.querySelectorAll('[data-accordion]').forEach(function (root) {
    root.querySelectorAll('[data-accordion-trigger]').forEach(function (trigger) {
      var panel = document.getElementById(trigger.getAttribute('aria-controls'));
      if (!panel) return;

      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      panel.style.height = expanded ? 'auto' : '0px';
      panel.setAttribute('data-open', expanded ? 'true' : 'false');

      trigger.addEventListener('click', function () {
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        panel.setAttribute('data-open', isOpen ? 'false' : 'true');

        if (reduceMotion) {
          panel.style.height = isOpen ? '0px' : 'auto';
          return;
        }

        var target = panel.firstElementChild ? panel.firstElementChild.offsetHeight : 0;
        if (isOpen) {
          panel.style.height = target + 'px';
          requestAnimationFrame(function () {
            panel.style.height = '0px';
          });
        } else {
          panel.style.height = target + 'px';
          window.setTimeout(function () {
            if (trigger.getAttribute('aria-expanded') === 'true') panel.style.height = 'auto';
          }, 330);
        }
      });
    });
  });

  /* ----------------------------------------------------------- scroll reveal */
  var revealables = document.querySelectorAll('[data-reveal]');
  if (revealables.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealables.forEach(function (el) {
        el.classList.add('is-visible');
      });
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
      );
      revealables.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  /* ------------------------------------------------------- card pointer light */
  /* A quiet highlight that follows the pointer across a card. Pure CSS paint,
     no layout work, and it is skipped entirely when motion is reduced or when
     the device has no fine pointer. */
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.card').forEach(function (card) {
      card.addEventListener('pointermove', function (event) {
        var box = card.getBoundingClientRect();
        card.style.setProperty('--pointer-x', ((event.clientX - box.left) / box.width) * 100 + '%');
        card.style.setProperty('--pointer-y', ((event.clientY - box.top) / box.height) * 100 + '%');
      });
      card.addEventListener('pointerleave', function () {
        card.style.removeProperty('--pointer-x');
        card.style.removeProperty('--pointer-y');
      });
    });
  }

  /* ------------------------------------------------------------------ forms */
  var form = document.querySelector('[data-service-form]');
  if (!form) return;

  form.setAttribute('novalidate', 'novalidate');

  var config = window.TOTALVAC_CONFIG || {};
  var status = form.querySelector('[data-form-status]');
  var summary = form.querySelector('[data-error-summary]');
  var submit = form.querySelector('[data-form-submit]');
  var loadedAt = Date.now();

  function setStatus(state, message) {
    if (!status) return;
    status.setAttribute('data-state', state);
    status.textContent = message;
  }

  function fieldWrap(input) {
    return input.closest('.field') || input.closest('.consent') || input.parentElement;
  }

  function messageFor(input) {
    if (input.validity.valueMissing) {
      return input.type === 'checkbox'
        ? 'Please confirm you agree before sending.'
        : 'This field is required.';
    }
    if (input.validity.typeMismatch && input.type === 'email') {
      return 'Enter an email address in the format name@example.com.';
    }
    if (input.validity.tooShort) {
      return 'Please add a little more detail.';
    }
    return 'Please check this field.';
  }

  function showError(input, message) {
    var wrap = fieldWrap(input);
    if (wrap && wrap.classList.contains('field')) wrap.setAttribute('data-invalid', 'true');
    var box = document.getElementById(input.id + '-error');
    if (box) box.textContent = message;
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input) {
    var wrap = fieldWrap(input);
    if (wrap && wrap.classList.contains('field')) wrap.removeAttribute('data-invalid');
    var box = document.getElementById(input.id + '-error');
    if (box) box.textContent = '';
    input.removeAttribute('aria-invalid');
  }

  var controls = Array.prototype.slice.call(
    form.querySelectorAll('input, select, textarea')
  ).filter(function (el) {
    return el.type !== 'hidden' && !el.closest('.form__hp');
  });

  controls.forEach(function (input) {
    input.addEventListener('blur', function () {
      if (input.value || input.required) {
        if (input.checkValidity()) clearError(input);
        else showError(input, messageFor(input));
      }
    });
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true' && input.checkValidity()) clearError(input);
    });
  });

  function validate() {
    var invalid = [];
    controls.forEach(function (input) {
      if (input.checkValidity()) {
        clearError(input);
      } else {
        showError(input, messageFor(input));
        invalid.push(input);
      }
    });

    if (!summary) return invalid;
    if (!invalid.length) {
      summary.innerHTML = '';
      return invalid;
    }

    var labels = invalid.map(function (input) {
      var label = form.querySelector('label[for="' + input.id + '"]');
      var text = label ? label.textContent.replace('required', '').trim() : input.name;
      return '<li><a href="#' + input.id + '">' + text + '</a></li>';
    });
    summary.innerHTML =
      '<h2>Check these fields before sending</h2><ul>' + labels.join('') + '</ul>';
    summary.setAttribute('tabindex', '-1');
    summary.focus();
    return invalid;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var trap = form.querySelector('[name="company_website"]');
    if (trap && trap.value) return; // silent drop for bots
    if (Date.now() - loadedAt < 2500) {
      setStatus('error', 'That was sent very quickly. Please review the details and send again.');
      return;
    }

    var invalid = validate();
    if (invalid.length) {
      setStatus('error', 'Some required details are missing. The fields are marked below.');
      if (invalid[0].focus) invalid[0].focus();
      return;
    }

    if (!config.formEndpoint) {
      setStatus(
        'error',
        'This form is not connected to a delivery address yet, so the request was not sent. ' +
          (config.email
            ? 'Please email ' + config.email + ' with these details.'
            : 'Please call to place the request while setup is completed.')
      );
      return;
    }

    submit.disabled = true;
    var original = submit.textContent;
    submit.textContent = 'Sending';
    setStatus('info', 'Sending your request.');

    fetch(config.formEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form)
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Request failed');
        form.reset();
        setStatus(
          'success',
          'Thank you. Your service request has been received. TotalVac will review the details and follow up using the contact information provided.'
        );
      })
      .catch(function () {
        setStatus(
          'error',
          config.phone
            ? 'The request could not be sent. Please try again or call ' + config.phone + '.'
            : 'The request could not be sent. Please try again shortly.'
        );
      })
      .finally(function () {
        submit.disabled = false;
        submit.textContent = original;
      });
  });

  /* Preselect the service when arriving from a service page link */
  var params = new URLSearchParams(window.location.search);
  var requested = params.get('service');
  if (requested) {
    var select = form.querySelector('#service');
    if (select) {
      Array.prototype.slice.call(select.options).forEach(function (option) {
        if (option.value.toLowerCase() === requested.toLowerCase()) select.value = option.value;
      });
    }
  }
})();
