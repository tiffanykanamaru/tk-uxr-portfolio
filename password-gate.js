(function () {
  var PASSWORD = "2026";
  if (sessionStorage.getItem("portfolio-unlocked") === "true") return;

  document.write(
    '<style>body > *:not(#password-gate){display:none}</style>' +
    '<div id="password-gate">' +
      '<div class="gate-box">' +
        '<h1>This portfolio is password protected</h1>' +
        '<p>Enter the password to continue.</p>' +
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
