document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  //Select Nav Items
  const navToggle = document.getElementById("nav-toggle");
  const openCloseIcon = document.querySelectorAll(".open-close-icon");
  const links = document.getElementById("links");

  //Navbar Toggle
  navToggle.addEventListener("click", () => {
    const menuBg = links.parentElement;

    body.classList.toggle("overflow-hidden");
    menuBg.classList.toggle("show-menu");
    links.classList.toggle("show-links");

    if (!openCloseIcon[0].classList.contains("hidden")) {
      openCloseIcon[0].classList.add("hidden");
      openCloseIcon[1].classList.remove("hidden");
    } else {
      openCloseIcon[0].classList.remove("hidden");
      openCloseIcon[1].classList.add("hidden");
    }
  });

  //Bookmark Active
  const bookmarkBtn = document.getElementById("bookmark-btn");
  const bookmark = document.getElementById("bookmark");

  bookmarkBtn.addEventListener("click", () => {
    bookmark.classList.toggle("bookmarked");
  });

  //progress bar
  const actualMoney = document.getElementById("actual-money");
  const progressBar = document.getElementById("progress-bar");
  const finalValue = 100;
  function changeWidthProgressBar() {
    let width =
      (finalValue * Math.ceil(parseInt(actualMoney.textContent))) / 100;
    progressBar.style.width = width + "%";
  }
  changeWidthProgressBar();

  //Disabled Button Reward
  const rewardBtn = document.querySelector(".reward-btn");
  rewardBtn.disabled = true;

  //Modal Rewards Button Toggle
  const modalRewardsToggle = document.querySelectorAll(".modal-toggle");
  const modalRewards = document.getElementById("modal-rewards");
  const closeModalRewards = document.getElementById("close-modal-rewards");

  modalRewardsToggle.forEach((modalReward) => {
    modalReward.addEventListener("click", () => {
      modalRewards.classList.remove("hidden");
      body.classList.add("overflow-hidden");

      closeModalRewards.addEventListener("click", () => {
        modalRewards.classList.add("hidden");
        body.classList.remove("overflow-hidden");
      });
    });
  });

  //Checkbox Modal
  const checkboxBtns = document.querySelectorAll(".checkbox-btn");

  checkboxBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      const checkbox = document.querySelectorAll(".checkbox");
      const pledgeInputDisplay = document.querySelectorAll(".pledge-input");

      button.parentElement.parentElement.classList.toggle("border-active");
      checkbox[index].classList.toggle("checkbox-active");

      if (index !== 0) {
        pledgeInputDisplay[index - 1].classList.toggle("show-pledge-input");
      }

      if (index === 0) {
        completedModal.classList.remove("hidden");
        modalRewards.classList.add("hidden");
        input[index].classList.remove("border-red-500");

        gotItBtn.addEventListener("click", () => {
          completedModal.classList.add("hidden");
          body.classList.remove("overflow-hidden");
        });
      }

      checkboxBtns.forEach((otherButton, otherIndex) => {
        if (otherIndex !== index) {
          otherButton.parentElement.parentElement.classList.remove(
            "border-active"
          );
          checkbox[otherIndex].classList.remove("checkbox-active");
          checkbox[otherIndex].classList.add("checkbox-inActive");

          if (otherIndex !== 0) {
            pledgeInputDisplay[otherIndex - 1].classList.remove(
              "show-pledge-input"
            );
            input[otherIndex - 1].value = "";
          }
        }
      });
    });
  });

  //Completed Modal
  const continueBtn = document.querySelectorAll(".continue-btn");
  const input = document.querySelectorAll(".input");
  const completedModal = document.getElementById("completed-modal");
  const gotItBtn = document.getElementById("got-it-btn");

  continueBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (input[index].value !== "") {
        if (parseFloat(input[0].value) >= 25) {
          completedModal.classList.remove("hidden");
          modalRewards.classList.add("hidden");
          input[index].classList.remove("border-red-500");

          gotItBtn.addEventListener("click", () => {
            completedModal.classList.add("hidden");
            body.classList.remove("overflow-hidden");
          });
        } else if (parseFloat(input[1].value) >= 75) {
          completedModal.classList.remove("hidden");
          modalRewards.classList.add("hidden");
          input[index].classList.remove("border-red-500");

          const gotItBtn = document.getElementById("got-it-btn");

          gotItBtn.addEventListener("click", () => {
            completedModal.classList.add("hidden");
            body.classList.remove("overflow-hidden");
          });
        } else {
          input[index].classList.add("border-red-500");
        }
        input[index].value = "";
      }
    });
  });
});
