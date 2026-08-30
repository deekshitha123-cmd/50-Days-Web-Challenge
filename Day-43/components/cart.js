import { globalStore } from "../core/store.js";


class CartComponent extends HTMLElement {


    constructor() {

        super();

        this.attachShadow({
            mode: "open"
        });

        this.unsubscribe = null;

    }


    connectedCallback() {

        this.render();


        // Subscribe to global state
        this.unsubscribe =
            globalStore.subscribe(
                (state) => {

                    this.updateCart(state);

                }
            );


        // Display initial state
        this.updateCart(
            globalStore.getState()
        );

    }


    disconnectedCallback() {

        // Remove listener when component is removed
        if (this.unsubscribe) {

            this.unsubscribe();

        }

    }


    render() {

        this.shadowRoot.innerHTML = `

            <style>

                .cart-card {

                    background: white;

                    padding: 30px;

                    border-radius: 18px;

                    box-shadow:
                        0 8px 25px
                        rgba(0,0,0,0.07);

                    text-align: center;

                }


                .icon {

                    font-size: 45px;

                    margin-bottom: 10px;

                }


                h2 {

                    margin-bottom: 10px;

                }


                .description {

                    color: #777;

                    font-size: 14px;

                    margin-bottom: 20px;

                }


                .count {

                    font-size: 50px;

                    font-weight: bold;

                    margin: 15px;

                }


                button {

                    border: none;

                    background: #222;

                    color: white;

                    padding: 12px 22px;

                    border-radius: 8px;

                    cursor: pointer;

                    font-size: 15px;

                }


                button:hover {

                    opacity: 0.8;

                }

            </style>


            <div class="cart-card">

                <div class="icon">
                    🛒
                </div>

                <h2>
                    Shopping Cart
                </h2>

                <p class="description">
                    Updates the global cart state
                </p>

                <div
                    class="count"
                    id="cartCount"
                >
                    0
                </div>

                <button id="addButton">
                    Add Item
                </button>

            </div>

        `;


        const addButton =
            this.shadowRoot
                .querySelector("#addButton");


        addButton.addEventListener(
            "click",
            () => {

                // Get current count
                const currentCount =
                    globalStore
                        .getState()
                        .cartCount;


                // Update global state
                globalStore.setState({

                    cartCount:
                        currentCount + 1

                });

            }
        );

    }


    updateCart(state) {

        const cartCount =
            this.shadowRoot
                .querySelector("#cartCount");


        cartCount.textContent =
            state.cartCount;


        // Update main global state display
        const globalCount =
            document.querySelector(
                "#globalCartCount"
            );


        if (globalCount) {

            globalCount.textContent =
                state.cartCount;

        }

    }

}


customElements.define(
    "cart-component",
    CartComponent
);