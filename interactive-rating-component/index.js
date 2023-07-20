const ratingCard = document.getElementById("rating-card");
const thanksCard = document.getElementById("thanks-card");
const submitBtn = document.querySelector(".btn-submit");
const ratings = document.querySelectorAll(".btn-rate");
const actualRating = document.getElementById("rating");

submitBtn.addEventListener("click", () => {
  ratingCard.style.display = "none";
  thanksCard.classList.remove("hidden");
});

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    actualRating.innerHTML = rating.innerHTML;
  });
});
