// Falling Kitty Images: Ensure they fall from below the header and loop continuously
window.onload = function() {
  const fallingImages = document.querySelectorAll('.falling-image');
  
  fallingImages.forEach(image => {
    image.style.animation = 'fall 5s infinite';
  });
};


