/* =========================================
   DEVSPACE APPLICATION ENGINE
   DAY 26 - ASYNCHRONOUS JAVASCRIPT & APIs
========================================= */

const App = {

    /* =====================================
       INITIALIZE APPLICATION
    ====================================== */

    init() {

        console.log("DevSpace Application Started");

        this.initializeGitHubLookup();

    },


    /* =====================================
       GITHUB LOOKUP
    ====================================== */

    initializeGitHubLookup() {

        const searchButton =
            document.getElementById("search-dev-btn");

        const usernameInput =
            document.getElementById("github-username");

        if (!searchButton || !usernameInput) {
            return;
        }


        /* Button Click */

        searchButton.addEventListener("click", () => {

            const username =
                usernameInput.value.trim();

            if (!username) {

                this.showError(
                    "Please enter a GitHub username."
                );

                return;
            }

            this.getDeveloperProfile(username);

        });


        /* Enter Key */

        usernameInput.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {

                const username =
                    usernameInput.value.trim();

                if (!username) {

                    this.showError(
                        "Please enter a GitHub username."
                    );

                    return;
                }

                this.getDeveloperProfile(username);

            }

        });

    },


    /* =====================================
       ASYNC GITHUB API FUNCTION
    ====================================== */

    async getDeveloperProfile(username) {

        const profileCard =
            document.getElementById("dev-profile-card");


        /* Loading State */

        profileCard.innerHTML = `
            <div class="loading">

                <div class="spinner"></div>

                <p>Fetching GitHub profile...</p>

            </div>
        `;


        try {

            /* ===============================
               FETCH DATA FROM GITHUB API
            ================================ */

            const response =
                await fetch(
                    `https://api.github.com/users/${encodeURIComponent(username)}`
                );


            /* ===============================
               ERROR GATEKEEPING
            ================================ */

            if (!response.ok) {

                if (response.status === 404) {

                    throw new Error(
                        "GitHub user not found."
                    );

                }

                throw new Error(
                    `GitHub API error: ${response.status}`
                );

            }


            /* ===============================
               PARSE JSON RESPONSE
            ================================ */

            const data =
                await response.json();


            /* ===============================
               RENDER PROFILE
            ================================ */

            profileCard.innerHTML = `

                <div class="profile-card">

                    <img
                        src="${data.avatar_url}"
                        alt="${data.login}'s GitHub profile picture"
                        class="profile-avatar"
                    >

                    <div class="profile-content">

                        <h3>
                            ${data.name || data.login}
                        </h3>

                        <p class="username">
                            @${data.login}
                        </p>

                        <p class="bio">
                            ${
                                data.bio ||
                                "No bio available."
                            }
                        </p>


                        <div class="profile-stats">

                            <div class="stat">
                                <strong>
                                    ${data.followers}
                                </strong>

                                <span>
                                    Followers
                                </span>
                            </div>


                            <div class="stat">
                                <strong>
                                    ${data.following}
                                </strong>

                                <span>
                                    Following
                                </span>
                            </div>


                            <div class="stat">
                                <strong>
                                    ${data.public_repos}
                                </strong>

                                <span>
                                    Repositories
                                </span>
                            </div>

                        </div>


                        <a
                            href="${data.html_url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="github-link"
                        >
                            View GitHub Profile
                        </a>

                    </div>

                </div>

            `;


            console.log(
                "GitHub profile loaded:",
                data
            );

        }


        /* =====================================
           ERROR HANDLING
        ====================================== */

        catch (error) {

            console.error(
                "GitHub API Error:",
                error
            );

            profileCard.innerHTML = `

                <div class="error-message">

                    <h3>
                        ⚠️ Something went wrong
                    </h3>

                    <p>
                        ${error.message}
                    </p>

                    <p>
                        Please check the username
                        and try again.
                    </p>

                </div>

            `;

        }

    },


    /* =====================================
       GENERAL ERROR DISPLAY
    ====================================== */

    showError(message) {

        const profileCard =
            document.getElementById(
                "dev-profile-card"
            );

        profileCard.innerHTML = `

            <div class="error-message">

                <h3>
                    ⚠️ Invalid Input
                </h3>

                <p>
                    ${message}
                </p>

            </div>

        `;

    }

};


/* =========================================
   START APPLICATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        App.init();

    }
);