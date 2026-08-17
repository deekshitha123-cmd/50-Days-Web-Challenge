// api.js

const GITHUB_API = "https://api.github.com/users";

/*
    Fetch GitHub user profile
*/
export async function fetchContributor(username) {

    const response = await fetch(`${GITHUB_API}/${username}`);

    if (!response.ok) {
        throw new Error("GitHub user not found");
    }

    return await response.json();
}


/*
    Fetch user's repositories
*/
export async function fetchRepositories(username) {

    const response = await fetch(
        `${GITHUB_API}/${username}/repos?sort=updated&per_page=10`
    );

    if (!response.ok) {
        throw new Error("Unable to fetch repositories");
    }

    return await response.json();
}