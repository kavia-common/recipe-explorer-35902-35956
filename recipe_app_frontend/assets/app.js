(function () {
  // Global JS for all generated screens
  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }
  function qsa(selector, scope) {
    return Array.from((scope || document).querySelectorAll(selector));
  }

  // Simple click behavior for Sign In button (no backend)
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('big-button');
    if (btn) {
      btn.addEventListener('click', function () {
        // Visual feedback
        btn.style.opacity = '0.9';
        setTimeout(function(){ btn.style.opacity = '1'; }, 120);
        // Placeholder action
        console.log('Sign In clicked');
      });
    }

    var forgot = document.getElementById('forgot');
    if (forgot) {
      forgot.style.cursor = 'pointer';
      forgot.addEventListener('click', function () {
        console.log('Forgot Password clicked');
      });
    }
  });
})();
