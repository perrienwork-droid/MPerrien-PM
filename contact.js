/* ------------------------------------------------------------------
   contact.js — single source of truth for contact details
   ------------------------------------------------------------------
   Change the two values below and every page updates: homepage nav,
   mobile menu, contact buttons, and all six case study footers.
   No email address is hardcoded anywhere else in the site.

   How the HTML uses it:
     <a href="#" data-mailto="1"
        data-subject="CV request"
        data-body="Hi Malgo, ...">Email me / request my CV</a>
     <a href="#" data-linkedin="1">Get in touch on LinkedIn</a>
   ------------------------------------------------------------------ */

window.MP_CONTACT = {
  email: 'blame-gout-pummel@duck.com',
  linkedin: 'https://linkedin.com/in/perrien'
};

(function () {
  'use strict';

  function buildMailto(el, email) {
    var subject = el.getAttribute('data-subject') || '';
    var body = el.getAttribute('data-body') || '';
    var params = [];
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));
    return 'mailto:' + email + (params.length ? '?' + params.join('&') : '');
  }

  function apply() {
    var c = window.MP_CONTACT || {};
    if (c.email) {
      var mails = document.querySelectorAll('[data-mailto]');
      for (var i = 0; i < mails.length; i++) {
        var href = buildMailto(mails[i], c.email);
        if (mails[i].getAttribute('href') !== href) {
          mails[i].setAttribute('href', href);
        }
      }
    }
    if (c.linkedin) {
      var links = document.querySelectorAll('[data-linkedin]');
      for (var j = 0; j < links.length; j++) {
        if (links[j].getAttribute('href') !== c.linkedin) {
          links[j].setAttribute('href', c.linkedin);
        }
      }
    }
  }

  // The homepage re-renders its content client side, which resets
  // attributes, so re-apply whenever the DOM changes.
  function watch() {
    apply();
    if (typeof MutationObserver === 'function') {
      var pending = false;
      new MutationObserver(function () {
        if (pending) return;
        pending = true;
        requestAnimationFrame(function () { pending = false; apply(); });
      }).observe(document.body, { childList: true, subtree: true });
    } else {
      var ticks = 0;
      var iv = setInterval(function () {
        apply();
        if (++ticks > 60) clearInterval(iv);
      }, 200);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watch);
  } else {
    watch();
  }
})();
