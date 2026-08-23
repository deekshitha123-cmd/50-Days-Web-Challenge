// app.js

import { fetchDashboardData } from "./api.js";


// ========================================
// GET HTML ELEMENTS
// ========================================

const usernameInput =
    document.getElementById("username");

const searchBtn =
    document.getElementById("searchBtn");

const loading =
    document.getElementById("loading");

const error =
    document.getElementById("error");

const profileSection =
    document.getElementById("profile");

const reposSection =
    document.getElementById("repos");

const followersSection =
    document.getElementById("followers");


// ========================================
// SEARCH BUTTON
// ========================================

searchBtn.addEventListener(
    "click",
    loadDashboard
);


// ========================================
// ENTER KEY
// ========================================

usernameInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {
            loadDashboard();
        }

    }
);


// ========================================
// LOAD DASHBOARD
// ========================================

async function loadDashboard() {

    const username =
        usernameInput.value.trim();


    // Check empty input

    if (!username) {

        showError(
            "Please enter a GitHub username."
        );

        return;
    }


    // Reset previous data

    clearDashboard();

    hideError();

    loading.style.display = "block";

    searchBtn.disabled = true;


    try {

        console.time("Dashboard Load Time");


        // =================================
        // FETCH ALL DATA IN PARALLEL
        // =================================

        const data =
            await fetchDashboardData(username);


        console.timeEnd("Dashboard Load Time");


        // Display data

        displayProfile(data.profile);

        displayRepositories(data.repos);

        displayFollowers(data.followers);


    } catch (err) {

        console.error(err);

        showError(
            "Unable to fetch GitHub data. " +
            "Please check the username and try again."
        );

    } finally {

        loading.style.display = "none";

        searchBtn.disabled = false;
    }
}


// ========================================
// DISPLAY PROFILE
// ========================================

function displayProfile(profile) {

    profileSection.innerHTML = `

        <h2>👤 Profile</h2>

        <div class="profile-card">

            <img
                src="${profile.avatar_url}"
                alt="${profile.login}"
            >

            <div>

                <h2>
                    ${profile.name || profile.login}
                </h2>

                <p>
                    @${profile.login}
                </p>

                <p>
                    ${profile.bio || "No bio available"}
                </p>

                <div class="stats">

                    <span>
                        📦 ${profile.public_repos} Repositories
                    </span>

                    <span>
                        👥 ${profile.followers} Followers
                    </span>

                    <span>
                        👤 ${profile.following} Following
                    </span>

                </div>

            </div>

        </div>
    `;
}


// ========================================
// DISPLAY REPOSITORIES
// ========================================

function displayRepositories(repos) {

    if (repos.length === 0) {

        reposSection.innerHTML = `
            <h2>📦 Repositories</h2>
            <p>No repositories found.</p>
        `;

        return;
    }


    // Show first 6 repositories

    const limitedRepos =
        repos.slice(0, 6);


    reposSection.innerHTML = `

        <h2>📦 Repositories</h2>

        <div class="repo-container">

            ${limitedRepos.map(repo => `

                <div class="repo-card">

                    <h3>
                        ${repo.name}
                    </h3>

                    <p>
                        ${
                            repo.description ||
                            "No description available"
                        }
                    </p>

                    <div>

                        ⭐ ${repo.stargazers_count}

                        &nbsp;&nbsp;

                        🍴 ${repo.forks_count}

                    </div>

                </div>

            `).join("")}

        </div>
    `;
}


// ========================================
// DISPLAY FOLLOWERS
// ========================================

function displayFollowers(followers) {

    if (followers.length === 0) {

        followersSection.innerHTML = `
            <h2>👥 Followers</h2>
            <p>No followers found.</p>
        `;

        return;
    }


    // Show first 6 followers

    const limitedFollowers =
        followers.slice(0, 6);


    followersSection.innerHTML = `

        <h2>👥 Followers</h2>

        <div class="followers-container">

            ${limitedFollowers.map(follower => `

                <div class="follower-card">

                    <img
                        src="${follower.avatar_url}"
                        alt="${follower.login}"
                    >

                    <p>
                        ${follower.login}
                    </p>

                </div>

            `).join("")}

        </div>
    `;
}


// ========================================
// CLEAR DASHBOARD
// ========================================

function clearDashboard() {

    profileSection.innerHTML = "";

    reposSection.innerHTML = "";

    followersSection.innerHTML = "";
}


// ========================================
// SHOW ERROR
// ========================================

function showError(message) {

    error.textContent = message;

    error.style.display = "block";
}


// ========================================
// HIDE ERROR
// ========================================

function hideError() {

    error.textContent = "";

    error.style.display = "none";
}