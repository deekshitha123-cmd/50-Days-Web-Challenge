// main.js

import { secureDeleteResource } from "./api.js";

const deleteButton = document.getElementById("delete-btn");
const resourceIdInput = document.getElementById("resource-id");
const result = document.getElementById("result");

deleteButton.addEventListener("click", async () => {

    const targetId = resourceIdInput.value.trim();

    if (!targetId) {
        result.textContent = "Please enter a resource ID.";
        return;
    }

    result.textContent = "Deleting resource...";

    try {
        const response = await secureDeleteResource(targetId);

        result.textContent = response.message;

    } catch (error) {

        result.textContent = error.message;

    }
});