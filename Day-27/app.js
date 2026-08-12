// ==========================================
// DAY 27
// GITHUB CONTRIBUTOR LOOKUP
// ==========================================

console.log("APP.JS IS WORKING");


// ==========================================
// DOM ELEMENTS
// ==========================================

const usernameInput =
    document.getElementById("github-username");

const searchButton =
    document.getElementById("search-dev-btn");

const profileCard =
    document.getElementById("dev-profile-card");

const reposGrid =
    document.getElementById("repos-grid");

const statusMessage =
    document.getElementById("status-message");


// ==========================================
// CHECK ELEMENTS
// ==========================================

console.log("Username:", usernameInput);
console.log("Button:", searchButton);
console.log("Profile:", profileCard);
console.log("Repositories:", reposGrid);


// ==========================================
// SEARCH BUTTON
// ==========================================

searchButton.addEventListener("click", function () {

    console.log("LOOKUP BUTTON CLICKED");


    const username =
        usernameInput.value.trim();


    console.log("Username entered:", username);


    if (username === "") {

        statusMessage.textContent =
            "Please enter a GitHub username.";

        profileCard.innerHTML = "";
        reposGrid.innerHTML = "";

        return;
    }


    fetchContributor(username);

});


// ==========================================
// ENTER KEY
// ==========================================

usernameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchButton.click();

    }

});


// ==========================================
// FETCH GITHUB PROFILE
// ==========================================

async function fetchContributor(username) {

    console.log(
        "Fetching:",
        username
    );


    statusMessage.textContent =
        "Loading GitHub profile...";


    profileCard.innerHTML = "";
    reposGrid.innerHTML = "";


    try {

        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );


        console.log(
            "Profile response:",
            response.status
        );


        if (response.status === 404) {

            throw new Error(
                "GitHub user not found."
            );

        }


        if (
            response.status === 403 ||
            response.status === 429
        ) {

            throw new Error(
                "GitHub API rate limit exceeded."
            );

        }


        if (!response.ok) {

            throw new Error(
                `GitHub API error: ${response.status}`
            );

        }


        const user =
            await response.json();


        console.log(
            "USER DATA:",
            user
        );


        // Render profile
        renderProfile(user);


        // Fetch repositories
        await fetchRepositories(
            user.login
        );


        statusMessage.textContent =
            "";


    } catch (error) {

        console.error(
            "ERROR:",
            error
        );


        statusMessage.textContent =
            error.message;

    }

}


// ==========================================
// RENDER PROFILE
// ==========================================

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
                    ${
                        user.bio ||
                        "No bio available."
                    }
                </p>

                <p>
                    📍
                    ${
                        user.location ||
                        "Location unavailable"
                    }
                </p>

                <p>
                    👥 Followers:
                    ${user.followers}
                </p>

                <p>
                    👤 Following:
                    ${user.following}
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


// ==========================================
// FETCH REPOSITORIES
// ==========================================

async function fetchRepositories(username) {

    console.log(
        "Fetching repositories for:",
        username
    );


    const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`
    );


    console.log(
        "Repository response:",
        response.status
    );


    if (
        response.status === 403 ||
        response.status === 429
    ) {

        throw new Error(
            "GitHub API rate limit exceeded."
        );

    }


    if (!response.ok) {

        throw new Error(
            `Repository API error: ${response.status}`
        );

    }


    const repositories =
        await response.json();


    console.log(
        "REPOSITORY ARRAY:",
        repositories
    );


    renderRepositories(
        repositories
    );

}


// ==========================================
// RENDER REPOSITORIES
// ==========================================

function renderRepositories(
    repositories
) {

    reposGrid.innerHTML = "";


    if (repositories.length === 0) {

        reposGrid.innerHTML = `
            <div class="empty-state">

                <h3>
                    No public repositories found.
                </h3>

                <p>
                    This developer does not have
                    any public repositories.
                </p>

            </div>
        `;

        return;
    }


    // ==========================================
    // ARRAY ITERATION
    // ==========================================

    repositories.forEach(function (repo) {

        const card =
            document.createElement("article");


        card.className =
            "repo-card";


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
                    💻
                    ${
                        repo.language ||
                        "Unknown"
                    }
                </span>

            </div>

            <a
                href="${repo.html_url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Repository →
            </a>

        `;


        reposGrid.appendChild(card);

    });

}