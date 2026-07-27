// =====================================================
// Day 11 - JavaScript Engine & DOM Fundamentals
// Synexus Community Platform
// =====================================================

console.log("🚀 Synexus Community Platform Loaded Successfully!");

// =====================================================
// DOM ELEMENT SELECTION
// =====================================================

const heroTitle = document.querySelector("#hero-title");
const heroButton = document.querySelector("#hero-btn");

// =====================================================
// CHECK IF ELEMENTS EXIST
// =====================================================

if (heroTitle && heroButton) {

    console.log("✅ Hero elements found!");

    // =====================================================
    // BUTTON CLICK EVENT
    // =====================================================

    heroButton.addEventListener("click", function (event) {

        // Prevent jumping to Contact section
        event.preventDefault();

        // Change Hero Heading
        heroTitle.textContent = "Welcome to the Synexus Core! 🚀";

        // Toggle Active Color
        heroTitle.classList.toggle("active-state");

        // Change Button Text
        heroButton.textContent = "Thanks for Joining! ❤️";

        // Disable Button
        heroButton.style.pointerEvents = "none";

        // Change Button Background
        heroButton.style.backgroundColor = "#22c55e";

        heroButton.style.color = "#ffffff";

        console.log("Hero Button Clicked!");

    });

} else {

    console.error("Hero elements not found.");

}

// =====================================================
// DISPLAY CURRENT DATE
// =====================================================

const today = new Date();

console.log("Today's Date:", today.toDateString());

// =====================================================
// WELCOME MESSAGE
// =====================================================

window.addEventListener("load", () => {

    console.log("Website Loaded Successfully!");

});

// =====================================================
// SCROLL MESSAGE
// =====================================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 200) {

        console.log("User is exploring the website.");

    }

});

// =====================================================
// BONUS - TEAM BUTTONS
// =====================================================

const profileButtons = document.querySelectorAll(".team-card button");

profileButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert("Profile feature will be available soon!");

    });

});

// =====================================================
// BONUS - GALLERY IMAGES
// =====================================================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        image.style.transform = "scale(1.08)";
        image.style.transition = "0.3s";

        setTimeout(() => {

            image.style.transform = "scale(1)";

        }, 300);

    });

});

// =====================================================
// BONUS - CONTACT FORM
// =====================================================

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("✅ Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    });

}

// =====================================================
// END OF FILE
// =====================================================

console.log("🎉 Day 11 JavaScript Loaded Successfully!");