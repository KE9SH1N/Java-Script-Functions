const stars = document.querySelectorAll('.star');
let rating = 0;

for (const star of stars) {
  star.addEventListener('click', (event) => {
    rating = parseInt(event.target.getAttribute('data-value'));
    setRating(rating);
  });
  
  star.addEventListener('click', (event) => {
    highlightStars(event.target);
  });
  
  star.addEventListener('click', () => {
    setRating(rating);
  });
}

function setRating(rating) {
  for (const star of stars) {
    const starValue = parseInt(star.getAttribute('data-value'));
    if (starValue <= rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  }
}

function highlightStars(selectedStar) {
  for (const star of stars) {
    if (star === selectedStar) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  }
}