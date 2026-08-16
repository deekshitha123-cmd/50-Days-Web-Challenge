// ========================================
// DAY 30 - FULL CRUD OPERATIONS
// ========================================


// API URL
const API_URL =
    "https://jsonplaceholder.typicode.com/posts";


// ========================================
// GET HTML ELEMENTS
// ========================================

const proposalForm =
    document.getElementById("proposal-form");

const titleInput =
    document.getElementById("title");

const descriptionInput =
    document.getElementById("description");

const submitButton =
    document.getElementById("submit-btn");

const updateButton =
    document.getElementById("update-btn");

const deleteButton =
    document.getElementById("delete-btn");

const proposalIdInput =
    document.getElementById("proposal-id");

const message =
    document.getElementById("message");

const responseBox =
    document.getElementById("response-box");

const responseData =
    document.getElementById("response-data");


// ========================================
// POST - CREATE
// ========================================

proposalForm.addEventListener(
    "submit",
    async function (e) {

        e.preventDefault();


        const title =
            titleInput.value.trim();

        const description =
            descriptionInput.value.trim();


        if (!title || !description) {

            showMessage(
                "Please fill in all fields.",
                "error"
            );

            return;
        }


        const newInitiative = {

            title: title,

            body: description,

            userId: 1

        };


        submitButton.disabled = true;

        submitButton.textContent =
            "Submitting...";


        try {

            const response = await fetch(
                API_URL,
                {

                    method: "POST",

                    headers: {
                        "Content-type":
                            "application/json; charset=UTF-8"
                    },

                    body:
                        JSON.stringify(newInitiative)

                }
            );


            if (!response.ok) {

                throw new Error(
                    `HTTP Error: ${response.status}`
                );

            }


            const data =
                await response.json();


            console.log(
                "POST Response:",
                data
            );


            if (response.status === 201) {

                showMessage(
                    "🎉 Initiative created successfully!",
                    "success"
                );


                showResponse(data);


                proposalForm.reset();

            }

        }

        catch (error) {

            console.error(
                "POST Error:",
                error
            );


            showMessage(
                "❌ Failed to create initiative.",
                "error"
            );

        }

        finally {

            submitButton.disabled = false;

            submitButton.textContent =
                "Submit Proposal";

        }

    }
);


// ========================================
// PUT - UPDATE
// ========================================

async function updateInitiative(id) {

    console.log(
        `Updating initiative with ID: ${id}`
    );


    // Example updated data
    const updatedInitiative = {

        id: id,

        title:
            "AI Developer Assistant [UPDATED]",

        body:
            "This initiative has been updated using a PUT request.",

        userId: 1

    };


    updateButton.disabled = true;

    updateButton.textContent =
        "Updating...";


    try {

        // ====================================
        // PUT REQUEST
        // ====================================

        const response = await fetch(
            API_URL + "/" + id,
            {

                method: "PUT",

                headers: {

                    "Content-type":
                        "application/json; charset=UTF-8"

                },

                body:
                    JSON.stringify(
                        updatedInitiative
                    )

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
        // PARSE RESPONSE
        // ====================================

        const data =
            await response.json();


        // ====================================
        // LOG RESPONSE
        // ====================================

        console.log(
            "PUT Response:",
            data
        );


        showResponse(data);


        showMessage(
            `✅ Proposal ${id} updated successfully!`,
            "success"
        );

    }

    catch (error) {

        console.error(
            "PUT Error:",
            error
        );


        showMessage(
            "❌ Failed to update proposal.",
            "error"
        );

    }

    finally {

        updateButton.disabled = false;

        updateButton.textContent =
            "Update Proposal";

    }

}


// ========================================
// DELETE - DESTROY
// ========================================

async function deleteInitiative(id) {

    console.log(
        `Deleting initiative with ID: ${id}`
    );


    deleteButton.disabled = true;

    deleteButton.textContent =
        "Deleting...";


    try {

        // ====================================
        // DELETE REQUEST
        // ====================================

        const response = await fetch(
            API_URL + "/" + id,
            {

                method: "DELETE"

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
        // PARSE RESPONSE
        // ====================================

        const data =
            await response.json();


        // ====================================
        // LOG RESPONSE
        // ====================================

        console.log(
            "DELETE Response:",
            data
        );


        console.log(
            `✅ Proposal ${id} deleted successfully.`
        );


        showResponse(data);


        showMessage(
            `🗑️ Proposal ${id} deleted successfully!`,
            "success"
        );

    }

    catch (error) {

        console.error(
            "DELETE Error:",
            error
        );


        showMessage(
            "❌ Failed to delete proposal.",
            "error"
        );

    }

    finally {

        deleteButton.disabled = false;

        deleteButton.textContent =
            "Delete Proposal";

    }

}


// ========================================
// UPDATE BUTTON EVENT
// ========================================

updateButton.addEventListener(
    "click",
    function () {

        const id =
            Number(proposalIdInput.value);


        if (!id || id < 1) {

            showMessage(
                "Please enter a valid Proposal ID.",
                "error"
            );

            return;

        }


        updateInitiative(id);

    }
);


// ========================================
// DELETE BUTTON EVENT
// ========================================

deleteButton.addEventListener(
    "click",
    function () {

        const id =
            Number(proposalIdInput.value);


        if (!id || id < 1) {

            showMessage(
                "Please enter a valid Proposal ID.",
                "error"
            );

            return;

        }


        // ====================================
        // CONFIRMATION
        // ====================================

        const confirmed =
            window.confirm(
                "Are you sure you want to delete this initiative? This action cannot be undone."
            );


        if (confirmed) {

            deleteInitiative(id);

        }

    }
);


// ========================================
// SHOW MESSAGE
// ========================================

function showMessage(text, type) {

    message.textContent = text;

    message.className =
        `message ${type}`;

}


// ========================================
// SHOW SERVER RESPONSE
// ========================================

function showResponse(data) {

    responseBox.style.display =
        "block";


    responseData.textContent =
        JSON.stringify(
            data,
            null,
            2
        );

}