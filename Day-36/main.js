// main.js

import { searchUser } from "./api.js";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const result = document.getElementById("result");
const errorMessage = document.getElementById("error-message");


// ========================================
// RENDER USER
// ========================================

function renderUser(user) {

    result.innerHTML = `
        <div class="user-card">

            <img 
                src="${user.avatar_url}" 
                alt="${user.login}"
            >

            <h2>${user.name || user.login}</h2>

            <p>@${user.login}</p>

            <p>
                ${user.bio || "No bio available."}
            </p>

            <div class="user-info">
                <span>👥 Followers: ${user.followers}</span>
                <span>📦 Repositories: ${user.public_repos}</span>
                <span>📍 ${user.location || "Location unavailable"}</span>
            </div>

            <a 
                href="${user.html_url}" 
                target="_blank"
            >
                View GitHub Profile
            </a>

        </div>
    `;
}


// ========================================
// SEARCH USER
// ========================================

async function handleSearch(username) {

    username = username.trim();

    // Clear previous messages
    errorMessage.textContent = "";

    if (!username) {

        result.innerHTML = "";

        // Remove ?user= from URL
        const url = new URL(window.location);

        url.searchParams.delete("user");

        window.history.pushState({}, "", url);

        return;
    }

    result.innerHTML = "<p>🔍 Searching...</p>";

    try {

        // Fetch GitHub user
        const user = await searchUser(username);

        // Render user
        renderUser(user);

        // ========================================
        // UPDATE URL WITHOUT PAGE RELOAD
        // ========================================

        const url = new URL(window.location);

        url.searchParams.set("user", user.login);

        window.history.pushState({}, "", url);

    } catch (error) {

        result.innerHTML = "";

        errorMessage.textContent = error.message;

    }
}


// ========================================
// FORM SUBMIT
// ========================================

searchForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const username = searchInput.value;

    handleSearch(username);

});


// ========================================
// HYDRATE STATE FROM URL
// ========================================

function initializeFromURL() {

    const params = new URLSearchParams(
        window.location.search
    );

    const username = params.get("user");

    if (username) {

        // Put username into search box
        searchInput.value = username;

        // Automatically fetch the user
        handleSearch(username);
    }
}


// ========================================
// INITIALIZE APPLICATION
// ========================================

initializeFromURL();