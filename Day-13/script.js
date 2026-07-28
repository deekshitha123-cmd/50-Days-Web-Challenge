// ==========================================
// Day 12: Mobile Navigation Toggle
// ==========================================

// Select the menu button and navigation links
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("nav-active");

    // Update accessibility attribute
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", !expanded);

});


// ==========================================
// Day 13: Client-Side Form Validation
// ==========================================

// Select the form
const form = document.getElementById("membershipForm");

// Select inputs
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");

// Select error message elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

// Form Submit Event
form.addEventListener("submit", function (e) {

    // Stop page reload
    e.preventDefault();

    // Remove previous error messages
    nameError.textContent = "";
    emailError.textContent = "";

    fullName.classList.remove("input-error", "input-success");
    email.classList.remove("input-error", "input-success");

    // Get input values
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();

    let isValid = true;

    // ==========================
    // Name Validation
    // ==========================

    if (nameValue === "") {

        nameError.textContent = "Full Name cannot be empty.";

        fullName.classList.add("input-error");

        isValid = false;

    } else {

        fullName.classList.add("input-success");

    }

    // ==========================
    // Email Validation
    // ==========================

    if (emailValue === "") {

        emailError.textContent = "Email cannot be empty.";

        email.classList.add("input-error");

        isValid = false;

    } else if (!emailValue.includes("@")) {

        emailError.textContent = "Please enter a valid email address.";

        email.classList.add("input-error");

        isValid = false;

    } else {

        email.classList.add("input-success");

    }

    // ==========================
    // Success
    // ==========================

    if (isValid) {

        console.log("Application Ready for Server");

        alert("🎉 Membership Application Submitted Successfully!");

        // Clear the form
        form.reset();

        // Remove green borders
        fullName.classList.remove("input-success");
        email.classList.remove("input-success");

    }

});


// ==========================================
// Optional: Close Menu After Clicking Link
// ==========================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 600) {

            navLinks.classList.remove("nav-active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

});


// ==========================================
// Console Message
// ==========================================

console.log("Synexus Community Platform - Day 13 Loaded Successfully.");