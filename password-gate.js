(function () {
  var PASSWORD = "2026";
  if (sessionStorage.getItem("portfolio-unlocked") === "true") return;

  document.write(
    '<style>body > *:not(#password-gate){display:none}</style>' +
    '<div id="password-gate">' +
      '<div class="gate-box">' +
        '<h1>Tiffany Kanamaru&rsquo;s Portfolio</h1>' +
        '<p>This portfolio is password protected. Enter the password to view it or please reach out to <a href="mailto:tiffanykanamaru@gmail.com">tiffanykanamaru@gmail.com</a> if you don\'t have one.</p>' +
        '<form id="gate-form">' +
          '<input type="password" id="gate-input" placeholder="Password" autofocus />' +
          '<button type="submit" class="btn btn-primary">Enter</button>' +
        '</form>' +
        '<p id="gate-error">Incorrect password — try again.</p>' +
      '</div>' +
    '</div>'
  );

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gate-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var val = document.getElementById("gate-input").value;
      if (val === PASSWORD) {
        sessionStorage.setItem("portfolio-unlocked", "true");
        location.reload();
      } else {
        document.getElementById("gate-error").style.display = "block";
        document.getElementById("gate-input").value = "";
      }
    });
  });
})();
