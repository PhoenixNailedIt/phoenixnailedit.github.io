// Add Hello Kitty image on page load and apply falling animation
document.addEventListener('DOMContentLoaded', function () {
    let helloKitty = document.createElement('img');  // Create the image element
    helloKitty.src = 'images/nerdy kitty.png';  // Set the image source
    helloKitty.classList.add('falling-kitty');  // Add class for animation
    document.body.appendChild(helloKitty);  // Append image to the body
});

// Add CSS styles for the Hello Kitty animation
const style = document.createElement('style');  // Create a <style> tag
style.textContent = `
/* Hello Kitty falling animation */
.falling-kitty {
    position: absolute;  /* Position it absolutely within the body */
    top: -100px;  /* Start above the page */
    left: 50%;  /* Center horizontally */
    width: 150px;  /* Set width */
    height: auto;  /* Maintain aspect ratio */
    z-index: -1;  /* Ensure it is behind other elements */
    animation: fall 3s infinite linear;  /* Apply falling animation */
}

/* Keyframes for the falling animation */
@keyframes fall {
    0% { top: -100px; opacity: 1; }  /* Start above the page with full opacity */
    100% { top: 100%; opacity: 0; }  /* Move to the bottom and fade out */
}
`;

// Append the styles to the <head> section
document.head.appendChild(style);


