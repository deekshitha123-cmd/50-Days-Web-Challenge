// utils.js

export function createUserHTML(user) {

    return `
        <div class="user-card">

            <img 
                src="${user.avatar_url}" 
                alt="${user.login}'s profile picture"
                class="avatar"
            >

            <div class="user-info">

                <h2>${user.name || user.login}</h2>

                <p class="username">@${user.login}</p>

                <p>
                    ${user.bio || "No bio available."}
                </p>

                <div class="stats">

                    <div>
                        <strong>${user.followers}</strong>
                        <span>Followers</span>
                    </div>

                    <div>
                        <strong>${user.following}</strong>
                        <span>Following</span>
                    </div>

                    <div>
                        <strong>${user.public_repos}</strong>
                        <span>Repositories</span>
                    </div>

                </div>

                <a 
                    href="${user.html_url}" 
                    target="_blank"
                    class="profile-link"
                >
                    View GitHub Profile
                </a>

            </div>

        </div>
    `;
}


export function showMessage(message, type = "") {

    const messageBox = document.getElementById("message");

    messageBox.textContent = message;

    messageBox.className = `message ${type}`;
}