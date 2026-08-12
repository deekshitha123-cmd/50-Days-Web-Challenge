// ===============================
// DOM ELEMENTS
// ===============================

const usernameInput =
    document.getElementById("github-username");

const profileCard =
    document.getElementById("dev-profile-card");

const repositoriesGrid =
    document.getElementById("repositories-grid");

const repositoriesSection =
    document.getElementById("repositories-section");

const statusMessage =
    document.getElementById("status-message");


// ===============================
// ABORT CONTROLLER
// ===============================

let controller = null;


// ===============================
// DEBOUNCE FUNCTION
// ===============================

function debounce(callback, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);

    };
}


// ===============================
// CLEAR UI
// ===============================

function clearResults() {

    profileCard.innerHTML = "";

    repositoriesGrid.innerHTML = "";

    repositoriesSection.style.display = "none";
}


// ===============================
// FETCH GITHUB USER
// ===============================

async function fetchContributor(username) {

    // ===============================
    // EMPTY INPUT
    // ===============================

    if (username === "") {

        clearResults();

        statusMessage.textContent = "";

        // Cancel previous request if any
        if (controller) {
            controller.abort();
        }

        return;
    }


    // ===============================
    // ABORT PREVIOUS REQUEST
    // ===============================

    if (controller) {
        controller.abort();
    }


    // Create new controller
    controller = new AbortController();

    const signal = controller.signal;


    // ===============================
    // LOADING MESSAGE
    // ===============================

    statusMessage.textContent =
        "Searching GitHub...";


    try {

        // ===============================
        // FETCH PROFILE
        // ===============================

        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`,
            {
                signal: signal
            }
        );


        // ===============================
        // RATE LIMIT
        // ===============================

        if (
            response.status === 403 ||
            response.status === 429
        ) {

            throw new Error(
                "API Rate Limit exceeded. Please wait a moment."
            );

        }


        // ===============================
        // USER NOT FOUND
        // ===============================

        if (response.status === 404) {

            throw new Error(
                "GitHub user not found."
            );

        }


        // ===============================
        // OTHER ERRORS
        // ===============================

        if (!response.ok) {

            throw new Error(
                `GitHub API error: ${response.status}`
            );

        }


        // ===============================
        // CONVERT TO JSON
        // ===============================

        const user = await response.json();


        // ===============================
        // DISPLAY PROFILE
        // ===============================

        renderProfile(user);


        // ===============================
        // FETCH REPOSITORIES
        // ===============================

        await fetchRepositories(
            user.login,
            signal
        );


        // ===============================
        // CLEAR STATUS
        // ===============================

        statusMessage.textContent = "";


    } catch (error) {

        // ===============================
        // ABORT ERROR
        // ===============================

        if (error.name === "AbortError") {

            console.log(
                "Previous request cancelled."
            );

            return;
        }


        // ===============================
        // OTHER ERRORS
        // ===============================

        console.error(error);

        clearResults();

        statusMessage.textContent =
            error.message;

    }

}


// ===============================
// RENDER PROFILE
// ===============================

function renderProfile(user) {

    profileCard.innerHTML = `

        <article class="profile-card">

            <img
                src="${user.avatar_url}"
                alt="${user.login}"
            >

            <div class="profile-info">

                <h2>
                    ${user.name || user.login}
                </h2>

                <p>
                    @${user.login}
                </p>

                <p>
                    ${user.bio || "No bio available."}
                </p>

                <p>
                    📍 ${user.location || "Location unavailable"}
                </p>

                <p>
                    👥 Followers: ${user.followers}
                </p>

                <p>
                    📦 Public Repositories:
                    ${user.public_repos}
                </p>

                <a
                    href="${user.html_url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View GitHub Profile →
                </a>

            </div>

        </article>

    `;
}


// ===============================
// FETCH REPOSITORIES
// ===============================

async function fetchRepositories(username, signal) {

    const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`,
        {
            signal: signal
        }
    );


    // ===============================
    // RATE LIMIT
    // ===============================

    if (
        response.status === 403 ||
        response.status === 429
    ) {

        throw new Error(
            "API Rate Limit exceeded. Please wait a moment."
        );

    }


    // ===============================
    // OTHER ERRORS
    // ===============================

    if (!response.ok) {

        throw new Error(
            `Repository API error: ${response.status}`
        );

    }


    // ===============================
    // JSON
    // ===============================

    const repositories =
        await response.json();


    // ===============================
    // DISPLAY REPOSITORIES
    // ===============================

    renderRepositories(repositories);

}


// ===============================
// RENDER REPOSITORIES
// ===============================

function renderRepositories(repositories) {

    repositoriesGrid.innerHTML = "";


    // ===============================
    // NO REPOSITORIES
    // ===============================

    if (repositories.length === 0) {

        repositoriesGrid.innerHTML = `
            <p>No public repositories found.</p>
        `;

        repositoriesSection.style.display =
            "block";

        return;
    }


    // ===============================
    // LOOP THROUGH REPOSITORIES
    // ===============================

    repositories.forEach(repo => {

        const card =
            document.createElement("article");

        card.className = "repo-card";


        card.innerHTML = `

            <h3>
                ${repo.name}
            </h3>

            <p>
                ${
                    repo.description ||
                    "No description available."
                }
            </p>

            <div class="repo-stats">

                <span>
                    ⭐ ${repo.stargazers_count}
                </span>

                <span>
                    🍴 ${repo.forks_count}
                </span>

                <span>
                    ${repo.language || "Unknown"}
                </span>

            </div>

            <br>

            <a
                href="${repo.html_url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Repository →
            </a>

        `;


        repositoriesGrid.appendChild(card);

    });


    repositoriesSection.style.display =
        "block";
}


// ===============================
// REAL-TIME SEARCH
// ===============================

const handleSearch = debounce(function () {

    // Get current input value
    const username =
        usernameInput.value.trim();


    console.log(
        "Searching for:",
        username
    );


    fetchContributor(username);

}, 500);


// ===============================
// INPUT EVENT
// ===============================

usernameInput.addEventListener(
    "input",
    handleSearch
);


// ===============================
// INITIAL STATE
// ===============================

repositoriesSection.style.display = "none";