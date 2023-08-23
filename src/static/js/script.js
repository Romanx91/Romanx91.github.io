document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".lg");
  const loginForm = document.querySelector(".loging");
  const closeButton = document.querySelector(".back");

  const createaccountButton = document.querySelector(".ct");
  const createaccountForm = document.querySelector(".createaccount");
  const CloseButton = document.querySelector(".Back");

  const cuentacreadaButton = document.querySelector(".buttSub");
  const cuentacreadaForm = document.querySelector(".cuentacreada");
  const ClosecuentacreadaButton = document.querySelector(".ok");

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

  if (createaccountButton && createaccountForm) {
    createaccountButton.addEventListener("click", function () {
      createaccountForm.style.display =
        createaccountForm.style.display === "block" ? "none" : "block";
    });

    CloseButton.addEventListener("click", function () {
      createaccountForm.style.display = "none";
    });

    createaccountForm.addEventListener("submit", function (event) {
      event.preventDefault();
      createaccountForm.style.display = "none";
    });
  }

  if (cuentacreadaButton && cuentacreadaForm) {
    cuentacreadaButton.addEventListener("click", function () {
      cuentacreadaForm.style.display =
        cuentacreadaForm.style.display === "block" ? "none" : "block";
    });

    ClosecuentacreadaButton.addEventListener("click", function () {
      cuentacreadaForm.style.display = "none";
    });

    cuentacreadaForm.addEventListener("submit", function (event) {
      event.preventDefault();
      cuentacreadaForm.style.display = "none";
    });
  }
});
