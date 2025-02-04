document.addEventListener("DOMContentLoaded", function () {
    const kittyImageSrc = "images/nerdy kitty.png";

    function createFallingKitty() {
        const kitty = document.createElement("img");
        kitty.src = kittyImageSrc;
        kitty.style.position = "fixed";
        kitty.style.width = "50px"; // Adjust size as needed
        kitty.style.height = "auto";
        kitty.style.top = "-50px"; // Start above the screen
        kitty.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        kitty.style.opacity = "0.8"; // Slight transparency
        kitty.style.pointerEvents = "none";
        kitty.style.zIndex = "-1"; // Behind the content

        document.body.appendChild(kitty);

        let speed = Math.random() * 3 + 2; // Random fall speed
        let rotate = Math.random() * 360; // Random rotation

        let fallInterval = setInterval(() => {
            let currentTop = parseFloat(kitty.style.top);
            kitty.style.top = currentTop + speed + "px";
            kitty.style.transform = `rotate(${rotate}deg)`;

            if (currentTop > window.innerHeight) {
                clearInterval(fallInterval);
                kitty.remove(); // Remove when off-screen
            }
        }, 30);
    }

    setInterval(createFallingKitty, 500); // Create new Hello Kitty every 0.5s
});

