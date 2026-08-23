// api.js

const BASE_URL = "https://api.github.com/users";


// ========================================
// FETCH WITH RETRY
// ========================================

async function fetchWithRetry(
    url,
    options = {},
    retries = 3,
    backoff = 500
) {

    try {

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return response;

    } catch (error) {

        if (retries === 0) {
            throw error;
        }

        console.log(
            `Request failed. Retrying... ${retries} attempts left`
        );

        await new Promise(resolve =>
            setTimeout(resolve, backoff)
        );

        return fetchWithRetry(
            url,
            options,
            retries - 1,
            backoff * 2
        );
    }
}


// ========================================
// DAY 37
// PARALLEL NETWORK ARCHITECTURE
// ========================================

async function fetchDashboardData(username) {

    // API URLs

    const profileUrl =
        `${BASE_URL}/${username}`;

    const reposUrl =
        `${BASE_URL}/${username}/repos`;

    const followersUrl =
        `${BASE_URL}/${username}/followers`;


    // ------------------------------------
    // Create promises
    // DO NOT use await here
    // ------------------------------------

    const profilePromise =
        fetchWithRetry(profileUrl);

    const reposPromise =
        fetchWithRetry(reposUrl);

    const followersPromise =
        fetchWithRetry(followersUrl);


    console.log("🚀 All requests started");


    // ------------------------------------
    // Run requests in parallel
    // ------------------------------------

    const responses = await Promise.all([
        profilePromise,
        reposPromise,
        followersPromise
    ]);


    console.log("✅ All responses received");


    // ------------------------------------
    // Convert responses to JSON
    // ------------------------------------

    const parsedData = await Promise.all(
        responses.map(response => response.json())
    );


    // ------------------------------------
    // Array destructuring
    // ------------------------------------

    const [
        profile,
        repos,
        followers
    ] = parsedData;


    // ------------------------------------
    // Return unified object
    // ------------------------------------

    return {
        profile,
        repos,
        followers
    };
}


// Export function

export {
    fetchDashboardData
};