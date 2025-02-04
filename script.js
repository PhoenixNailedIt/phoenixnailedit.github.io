// Function to animate falling kitties
function animateFallingKitties() {
  // Create an array of images that will fall
  const fallingKittyImages = [
    "images/nerdy kitty.png",
    "images/nerdy kitty.png",
    "images/nerdy kitty.png",
    "images/nerdy kitty.png",
    "images/nerdy kitty.png",
  ];

  fallingKittyImages.forEach(imageSrc => {
    // Create a new img element
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = "Falling Kitty";
    imgElement.classList.add('falling-image');

    // Append the image to the body
    document.body.appendChild(imgElement);

    // Set animation for each image
    imgElement.style.animation = 'fall 5s infinite';
  });
}

// Start the falling kitties animation when the page loads
window.onload = function() {
  animateFallingKitties();
};

