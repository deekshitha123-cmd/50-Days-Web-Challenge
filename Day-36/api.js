// api.js

const BASE_URL = "https://api.github.com/users";

export async function searchUser(username) {
    try {
        const response = await fetch(`${BASE_URL}/${username}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("User not found.");
            }

            throw new Error(`Request failed: ${response.status}`);
        }

        const user = await response.json();

        return user;

    } catch (error) {
        console.error("API Error:", error.message);
        throw error;
    }
}