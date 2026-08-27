// api.js

import { saveOfflineData } from "./db.js";

export async function createProposal(payload) {

    // Check whether the browser is offline
    if (!navigator.onLine) {

        try {
            await saveOfflineData(payload);

            alert(
                "You are offline. Your proposal has been saved locally and will be submitted when you are online."
            );

            return {
                offline: true,
                message: "Data saved locally"
            };

        } catch (error) {

            console.error(
                "Could not save proposal offline:",
                error
            );

            alert(
                "You are offline and your data could not be saved."
            );

            return {
                offline: false,
                error: true
            };
        }
    }


    // Normal online request
    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(payload)
            }
        );


        if (!response.ok) {
            throw new Error(
                `HTTP error: ${response.status}`
            );
        }


        const data = await response.json();

        console.log(
            "Proposal successfully submitted:",
            data
        );

        return data;

    } catch (error) {

        console.error(
            "Failed to submit proposal:",
            error
        );

        throw error;
    }
}