const ratingInputContainer = document.querySelector('.rating-input-container');
const thankYouContainer = document.querySelector('.thank-you-container');

const allRatingButtons = document.querySelectorAll('.rating-button');
const submitButton = document.querySelector('.button');

const selectionResultRating = document.querySelector('.selection-result__rating');

allRatingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener('click', () => {
    allRatingButtons.forEach((ratingButton) => {
      ratingButton.removeAttribute('data-checked');
    });
    ratingButton.setAttribute('data-checked', 'true');
  });
});

submitButton.addEventListener('click', () => {
  const selectedRating = document.querySelector('.rating-button[data-checked="true"]');
  if (selectedRating !== null) {
    selectionResultRating.innerHTML = selectedRating.innerHTML;

    ratingInputContainer.classList.add('hidden');
    thankYouContainer.classList.remove('hidden');
  }
});