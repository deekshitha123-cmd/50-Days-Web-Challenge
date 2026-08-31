import { globalStore } from "../store.js";

class CartCounter extends HTMLElement {

    constructor() {
        super();

        // Create Shadow DOM
        this.attachShadow({ mode: "open" });

        // Component HTML + CSS
        this.shadowRoot.innerHTML = `

            <style>

                .counter-box {
                    background: #e8f0ff;
                    border: 2px solid #2563eb;
                    border-radius: 12px;

                    padding: 20px 30px;

                    text-align: center;

                    box-shadow:
                        0 4px 10px rgba(0, 0, 0, 0.08);
                }

                .title {
                    font-size: 18px;
                    font-weight: bold;

                    color: #333;

                    margin-bottom: 10px;
                }

                #counter {
                    font-size: 36px;
                    font-weight: bold;

                    color: #2563eb;
                }

            </style>

            <div class="counter-box">

                <div class="title">
                    🛒 Cart Items
                </div>

                <div id="counter">
                    0
                </div>

            </div>
        `;
    }


    // Runs when component is added to DOM
    connectedCallback() {

        // Get initial state
        const state = globalStore.getState();

        // Display initial cart count
        this.shadowRoot
            .getElementById("counter")
            .innerHTML = state.cartCount;


        // Subscribe to future changes
        this.unsubscribe = globalStore.subscribe((state) => {

            this.shadowRoot
                .getElementById("counter")
                .innerHTML = state.cartCount;

        });
    }


    // Runs when component is removed from DOM
    disconnectedCallback() {

        // Unsubscribe from store
        if (this.unsubscribe) {

            this.unsubscribe();

            this.unsubscribe = null;
        }
    }
}


// Register custom element
customElements.define("cart-counter", CartCounter);