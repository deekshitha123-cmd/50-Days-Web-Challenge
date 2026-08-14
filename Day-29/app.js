// ========================================
// DAY 29 - POST REQUEST
// ========================================


// Get the proposal form
const proposalForm = document.getElementById("proposal-form");


// Get form inputs
const titleInput = document.getElementById("title");

const descriptionInput =
    document.getElementById("description");


// Get UI elements
const submitButton =
    document.getElementById("submit-btn");

const message =
    document.getElementById("message");

const responseBox =
    document.getElementById("response-box");

const responseData =
    document.getElementById("response-data");


// ========================================
// FORM SUBMIT EVENT
// ========================================

proposalForm.addEventListener("submit", async function (e) {

    // Prevent page reload
    e.preventDefault();


    // ====================================
    // GET USER INPUT
    // ====================================

    const title =
        titleInput.value.trim();

    const description =
        descriptionInput.value.trim();


    // ====================================
    // BASIC VALIDATION
    // ====================================

    if (!title || !description) {

        showMessage(
            "Please fill in all fields.",
            "error"
        );

        return;
    }


    // ====================================
    // CREATE PAYLOAD
    // ====================================

    const newInitiative = {

        title: title,

        body: description,

        userId: 1

    };


    // ====================================
    // START SUBMISSION
    // ====================================

    submitButton.disabled = true;

    submitButton.textContent = "Submitting...";


    // Clear previous messages
    message.className = "message";

    message.textContent = "";


    // Hide previous response
    responseBox.style.display = "none";


    try {

        // ====================================
        // POST REQUEST
        // ====================================

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {

                method: "POST",

                headers: {

                    "Content-type":
                        "application/json; charset=UTF-8"

                },

                body: JSON.stringify(newInitiative)

            }
        );


        // ====================================
        // CHECK RESPONSE
        // ====================================

        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        // ====================================
        // PARSE JSON
        // ====================================

        const data = await response.json();


        // ====================================
        // CHECK 201 CREATED
        // ====================================

        if (response.status === 201) {

            showMessage(
                "🎉 Initiative submitted successfully!",
                "success"
            );


            // Show server response
            responseBox.style.display = "block";


            responseData.textContent =
                JSON.stringify(data, null, 2);


            // Reset form
            proposalForm.reset();

        }

    }

    catch (error) {

        // ====================================
        // ERROR HANDLING
        // ====================================

        console.error(
            "POST request failed:",
            error
        );


        showMessage(
            "❌ Failed to submit initiative. Please try again.",
            "error"
        );

    }

    finally {

        // ====================================
        // RE-ENABLE BUTTON
        // ====================================

        submitButton.disabled = false;

        submitButton.textContent =
            "Submit Proposal";

    }

});


// ========================================
// SHOW MESSAGE FUNCTION
// ========================================

function showMessage(text, type) {

    message.textContent = text;

    message.className =
        `message ${type}`;

}