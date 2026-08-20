// api.js

const BASE_URL = "https://jsonplaceholder.typicode.com";

// 🔐 Authentication utility
export function getAuthHeaders() {
    const token = localStorage.getItem("auth_token");

    if (!token) {
        throw new Error("Access Denied: No authentication token found.");
    }

    return {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
    };
}

// 🔒 Secure DELETE request
export async function secureDeleteResource(targetId) {
    try {
        // Get authentication headers
        const authHeaders = getAuthHeaders();

        // Send authenticated DELETE request
        const response = await fetch(`${BASE_URL}/posts/${targetId}`, {
            method: "DELETE",
            headers: {
                ...authHeaders
            }
        });

        // Handle expired/invalid token
        if (response.status === 401) {
            throw new Error("Unauthorized: Session expired");
        }

        // Handle other HTTP errors
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return {
            success: true,
            message: `Resource ${targetId} deleted successfully`
        };

    } catch (error) {
        console.error("Secure DELETE Error:", error.message);
        throw error;
    }
}