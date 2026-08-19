// main.js

import { getPosts } from "./api.js";

const postsContainer = document.getElementById("posts");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("error");

async function loadPosts() {
    try {
        loading.textContent = "Loading posts...";
        errorMessage.textContent = "";

        const posts = await getPosts();

        postsContainer.innerHTML = "";

        posts.slice(0, 10).forEach(post => {
            const postElement = document.createElement("div");

            postElement.className = "post";

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            postsContainer.appendChild(postElement);
        });

        loading.textContent = "";

    } catch (error) {
        loading.textContent = "";
        errorMessage.textContent =
            `Failed to load posts: ${error.message}`;

        console.error("Final Error:", error);
    }
}

loadPosts();