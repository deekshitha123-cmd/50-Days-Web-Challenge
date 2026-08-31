import { globalStore } from "../store.js";

class ProductButton extends HTMLElement {

    constructor() {
        super();

        // Create Shadow DOM
        this.attachShadow({ mode: "open" });

        // Component HTML + CSS
        this.shadowRoot.innerHTML = `

            <style>

                .button-container {
                    text-align: center;
                }

                button {
                    background: #2563eb;
                    color: white;

                    border: none;

                    padding: 12px 25px;

                    font-size: 16px;
                    font-weight: bold;

                    border-radius: 8px;

                    cursor: pointer;

                    transition: all 0.3s ease;
                }

                button:hover {
                    background: #1d4ed8;

                    transform: translateY(-2px);

                    box-shadow:
                        0 5px 12px rgba(0, 0, 0, 0.15);
                }

                button:active {
                    transform: scale(0.96);
                }

            </style>

            <div class="button-container">

                <button id="addButton">
                    ➕ Add to Cart
                </button>

            </div>
        `;
    }


    // Runs when component is added to DOM
    connectedCallback() {

        const button =
            this.shadowRoot.getElementById("addButton");


        // Add click event
        button.addEventListener("click", () => {

            // Get current state
            const currentState =
                globalStore.getState();


            // Increase cart count
            globalStore.setState({

                cartCount:
                    currentState.cartCount + 1

            });

        });
    }
}


// Register custom element
customElements.define("product-button", ProductButton);