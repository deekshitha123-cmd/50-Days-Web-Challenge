// ==========================================
// DAY 11 - HERO SECTION INTERACTIVITY
// ==========================================

// Select Hero Elements

const heroTitle = document.querySelector("#hero-title");
const heroButton = document.querySelector("#hero-btn");

// Hero Button Click Event

if (heroButton && heroTitle) {

    heroButton.addEventListener("click", function (event) {

        // Prevent jumping to contact section
        event.preventDefault();

        // Toggle Hero Text
        if (heroTitle.textContent === "Welcome to Synexus") {

            heroTitle.textContent = "Welcome to the Synexus Core!";

        } else {

            heroTitle.textContent = "Welcome to Synexus";

        }

        // Toggle Hero Text Color
        heroTitle.classList.toggle("active-state");

    });

}



// ==========================================
// DAY 12 - MOBILE NAVIGATION
// ==========================================

// Select Elements

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle Mobile Menu

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        // Show / Hide Navigation
        navLinks.classList.toggle("nav-active");

        // Animate Hamburger Icon
        menuToggle.classList.toggle("active");

        // Accessibility
        const expanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", !expanded);

    });

}



// ==========================================
// BONUS
// CLOSE MENU AFTER CLICKING A LINK
// ==========================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("nav-active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});



// ==========================================
// OPTIONAL
// CONTACT FORM MESSAGE
// ==========================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        form.reset();

    });

}