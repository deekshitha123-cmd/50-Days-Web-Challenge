class CustomModal extends HTMLElement {

    constructor() {
        super();

        // Create Shadow DOM
        this.attachShadow({ mode: "open" });

        // Get the template
        const template = document.getElementById("modal-template");

        if (!template) {
            console.error("Modal template not found!");
            return;
        }

        // Clone template
        const content = template.content.cloneNode(true);

        // Add cloned template to Shadow DOM
        this.shadowRoot.appendChild(content);
    }

    connectedCallback() {

        const closeButton =
            this.shadowRoot.querySelector(".close-btn");

        const overlay =
            this.shadowRoot.querySelector(".overlay");

        // Close button
        if (closeButton) {
            closeButton.addEventListener("click", () => {
                this.removeAttribute("open");
            });
        }

        // Close when clicking outside
        if (overlay) {
            overlay.addEventListener("click", (event) => {

                if (event.target === overlay) {
                    this.removeAttribute("open");
                }

            });
        }
    }
}


// Register Web Component
customElements.define("custom-modal", CustomModal);


// Warning button
document.addEventListener("DOMContentLoaded", () => {

    const warningButton =
        document.getElementById("openWarning");

    const warningModal =
        document.getElementById("warningModal");

    const successButton =
        document.getElementById("openSuccess");

    const successModal =
        document.getElementById("successModal");


    // Open Warning Modal
    warningButton.addEventListener("click", () => {
        warningModal.setAttribute("open", "");
    });


    // Open Success Modal
    successButton.addEventListener("click", () => {
        successModal.setAttribute("open", "");
    });

});