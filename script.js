window.addEventListener('DOMContentLoaded', (event) => {
    // Select all falling elements (images)
    const fallingImages = document.querySelectorAll('.falling-image');
    
    // Randomize the starting positions for multiple images
    fallingImages.forEach(image => {
        const startPosition = Math.random() * window.innerWidth; // Randomize horizontal position
        const animationDuration = Math.random() * 5 + 3; // Randomize the falling speed (between 3s and 8s)
        const delayTime = Math.random() * 5; // Randomize start delay for each image

        image.style.left = `${startPosition}px`;
        image.style.animation = `falling ${animationDuration}s linear infinite ${delayTime}s`;
    });
});


