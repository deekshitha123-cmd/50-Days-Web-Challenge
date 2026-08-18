// api.js

// ===============================
// DAY 33: CLIENT-SIDE CACHE
// ===============================

// Memory cache
const userCache = new Map();


// Fetch GitHub user data
export async function fetchUserData(username) {

    // -------------------------------
    // 1. CHECK CACHE FIRST
    // -------------------------------

    if (userCache.has(username)) {

        console.log("Serving from cache!");

        return userCache.get(username);
    }


    // -------------------------------
    // 2. FETCH FROM GITHUB API
    // -------------------------------

    console.log("Fetching from API...");

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );


        // -------------------------------
        // 3. HANDLE API ERRORS
        // -------------------------------

        if (!response.ok) {

            throw new Error(
                `User not found. Status: ${response.status}`
            );
        }


        // -------------------------------
        // 4. CONVERT RESPONSE TO JSON
        // -------------------------------

        const data = await response.json();


        // -------------------------------
        // 5. SAVE SUCCESSFUL DATA
        // -------------------------------

        userCache.set(username, data);


        console.log("Data saved to cache!");


        // -------------------------------
        // 6. RETURN DATA
        // -------------------------------

        return data;

    } catch (error) {

        console.error("API Error:", error);

        throw error;
    }
}


// Optional helper function
// Useful for checking the cache during development

export function clearCache() {

    userCache.clear();

    console.log("Cache cleared!");
}


// Optional helper function
// Shows how many users are currently cached

export function getCacheSize() {

    return userCache.size;
}