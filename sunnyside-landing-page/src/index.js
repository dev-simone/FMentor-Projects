document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("#nav-toggle");
  const links = document.querySelector(".links");

  navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
    navToggle.classList.toggle("active");
  });
});
