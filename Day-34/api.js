// api.js

import { fetchWithRetry } from "./utils.js";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
    const response = await fetchWithRetry(API_URL);

    return await response.json();
}