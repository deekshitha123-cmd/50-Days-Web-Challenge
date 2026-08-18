// app.js

import { fetchUserData } from "./api.js";
import { createUserHTML, showMessage } from "./utils.js";


// ===============================
// DOM ELEMENTS
// ===============================

const searchForm = document.getElementById("searchForm");

const usernameInput = document.getElementById("username");

const userContainer = document.getElementById("userContainer");

const loader = document.getElementById("loader");


// ===============================
// FORM SUBMISSION
// ===============================

searchForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    // Get username
    const username = usernameInput.value.trim();


    // -------------------------------
    // VALIDATION
    // -------------------------------

    if (username === "") {

        showMessage("Please enter a GitHub username.", "error");

        userContainer.innerHTML = "";

        return;
    }


    // -------------------------------
    // SHOW LOADING
    // -------------------------------

    loader.classList.remove("hidden");

    userContainer.innerHTML = "";

    showMessage("Searching...", "loading");


    try {

        // -------------------------------
        // FETCH USER DATA
        // -------------------------------

        const user = await fetchUserData(username);


        // -------------------------------
        // DISPLAY USER
        // -------------------------------

        userContainer.innerHTML = createUserHTML(user);

        showMessage("User loaded successfully!", "success");


    } catch (error) {

        // -------------------------------
        // HANDLE ERROR
        // -------------------------------

        userContainer.innerHTML = "";

        showMessage(
            "User not found. Please check the username.",
            "error"
        );

    } finally {

        // -------------------------------
        // HIDE LOADER
        // -------------------------------

        loader.classList.add("hidden");
    }

});