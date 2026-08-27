import { createProposal } from "./api.js";
import { getOfflineData } from "./db.js";


// Handle proposal form
const proposalForm = document.getElementById("proposalForm");

if (proposalForm) {

    proposalForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const title =
            document.getElementById("title").value;

        const description =
            document.getElementById("description").value;


        const payload = {
            title: title,
            description: description,
            createdAt: new Date().toISOString()
        };


        try {

            const result = await createProposal(payload);

            console.log("Result:", result);

            proposalForm.reset();

        } catch (error) {

            console.error(
                "Submission failed:",
                error
            );

            alert(
                "Something went wrong while submitting the proposal."
            );
        }
    });
}


// Check offline data when connection returns
window.addEventListener("online", async () => {

    console.log("Internet connection restored.");

    try {

        const offlineData = await getOfflineData();

        console.log(
            "Data stored while offline:",
            offlineData
        );

    } catch (error) {

        console.error(
            "Could not retrieve offline data:",
            error
        );
    }
});