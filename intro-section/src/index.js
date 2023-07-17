document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("#nav-toggle");
  const links = document.querySelector("#links");

  const openMenu = document.querySelector("#open-menu");
  const closeMenu = document.querySelector("#close-menu");

  const dropDownBtn = document.querySelectorAll(".dropdown-btn");
  const dropdownMenuPanel = document.querySelectorAll(".dropdown-panel");
  const arrowUp = document.querySelectorAll(".arrow-up");
  const arrowDown = document.querySelectorAll(".arrow-down");

  //Navbar Toggle Menu
  navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
    if (!openMenu.classList.contains("display-none")) {
      openMenu.classList.add("display-none");
      closeMenu.classList.remove("display-none");
    } else {
      openMenu.classList.remove("display-none");
      closeMenu.classList.add("display-none");
    }

    dropdownMenuPanel[0].classList.remove("dropdown-features-display");
    dropdownMenuPanel[1].classList.remove("dropdown-company-display");
  });

  //Features Dropdown Button
  dropDownBtn[0].addEventListener("click", () => {
    dropDownBtn[0].classList.toggle("btn-color");
    dropdownMenuPanel[0].classList.toggle("dropdown-features-display");
    if (!arrowDown[0].classList.contains("display-none")) {
      arrowDown[0].classList.add("display-none");
      arrowUp[0].classList.remove("display-none");
    } else {
      arrowDown[0].classList.remove("display-none");
      arrowUp[0].classList.add("display-none");
    }
  });

  //Company Dropdown Button
  dropDownBtn[1].addEventListener("click", () => {
    dropDownBtn[1].classList.toggle("btn-color");
    dropdownMenuPanel[1].classList.toggle("dropdown-company-display");
    if (!arrowDown[1].classList.contains("display-none")) {
      arrowDown[1].classList.add("display-none");
      arrowUp[1].classList.remove("display-none");
    } else {
      arrowDown[1].classList.remove("display-none");
      arrowUp[1].classList.add("display-none");
    }
  });
});
