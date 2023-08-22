document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".lg");
  const loginForm = document.querySelector(".loging");
  const closeButton = document.querySelector(".back");

  if (loginButton && loginForm) {
    loginButton.addEventListener("click", function () {
      loginForm.style.display =
        loginForm.style.display === "block" ? "none" : "block";
    });

    closeButton.addEventListener("click", function () {
      loginForm.style.display = "none";
    });

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      loginForm.style.display = "none";
    });
  }
});
