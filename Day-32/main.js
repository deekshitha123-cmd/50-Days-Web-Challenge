// main.js

import { debounce } from "./utils.js";

import {
    fetchContributor,
    fetchRepositories
} from "./api.js";


// ================================
// DOM ELEMENTS
// ================================

const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");

const profile = document.getElementById("profile");
const repositories = document.getElementById("repositories");


// ================================
// SEARCH FUNCTION
// ================================

async function searchUser(username) {

    username = username.trim();

    if (username === "") {

        error.textContent = "Please enter a GitHub username.";

        profile.innerHTML = "";
        repositories.innerHTML = "";

        return;
    }

    try {

        // Show loading
        loading.classList.remove("hidden");

        error.textContent = "";

        profile.innerHTML = "";
        repositories.innerHTML = "";


        // Fetch profile
        const user = await fetchContributor(username);

        // Fetch repositories
        const repos = await fetchRepositories(username);


        // Display data
        displayProfile(user);

        displayRepositories(repos);

    } catch (err) {

        error.textContent = err.message;

    } finally {

        loading.classList.add("hidden");
    }
}


// ================================
// DISPLAY PROFILE
// ================================

function displayProfile(user) {

    profile.innerHTML = `

        <div class="profile-card">

            <img
                src="${user.avatar_url}"
                alt="${user.login}"
            >

            <div>

                <h2>${user.name || user.login}</h2>

                <p>@${user.login}</p>

                <p>
                    ${user.bio || "No bio available"}
                </p>

                <div class="stats">

                    <span>
                        Followers: ${user.followers}
                    </span>

                    <span>
                        Following: ${user.following}
                    </span>

                    <span>
                        Repositories: ${user.public_repos}
                    </span>

                </div>

                <a
                    href="${user.html_url}"
                    target="_blank"
                >
                    View GitHub Profile
                </a>

            </div>

        </div>

    `;
}


// ================================
// DISPLAY REPOSITORIES
// ================================

function displayRepositories(repos) {

    if (repos.length === 0) {

        repositories.innerHTML =
            "<p>No repositories found.</p>";

        return;
    }


    repos.forEach(repo => {

        const repoCard = document.createElement("div");

        repoCard.classList.add("repo-card");

        repoCard.innerHTML = `

            <h3>${repo.name}</h3>

            <p>
                ${repo.description || "No description available"}
            </p>

            <p>
                ⭐ ${repo.stargazers_count}
            </p>

            <p>
                🍴 ${repo.forks_count}
            </p>

            <a
                href="${repo.html_url}"
                target="_blank"
            >
                View Repository
            </a>

        `;

        repositories.appendChild(repoCard);
    });
}


// ================================
// BUTTON EVENT
// ================================

searchBtn.addEventListener("click", () => {

    searchUser(usernameInput.value);

});


// ================================
// ENTER KEY EVENT
// ================================

usernameInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        searchUser(usernameInput.value);

    }

});


// ================================
// DEBOUNCED SEARCH
// ================================

const debouncedSearch = debounce(() => {

    searchUser(usernameInput.value);

}, 500);


usernameInput.addEventListener("input", debouncedSearch);