import { globalStore } from "../core/store.js";


class ThemeComponent extends HTMLElement {


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

                    this.updateTheme(state);

                }
            );


        // Display initial state
        this.updateTheme(
            globalStore.getState()
        );

    }


    disconnectedCallback() {

        // Remove listener
        if (this.unsubscribe) {

            this.unsubscribe();

        }

    }


    render() {

        this.shadowRoot.innerHTML = `

            <style>

                .theme-card {

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


                .theme-value {

                    font-size: 30px;

                    font-weight: bold;

                    margin: 15px;

                    text-transform: capitalize;

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


            <div class="theme-card">

                <div class="icon">
                    🎨
                </div>

                <h2>
                    Theme Manager
                </h2>

                <p class="description">
                    Updates the global theme state
                </p>

                <div
                    class="theme-value"
                    id="themeValue"
                >
                    light
                </div>

                <button id="themeButton">
                    Toggle Theme
                </button>

            </div>

        `;


        const themeButton =
            this.shadowRoot
                .querySelector("#themeButton");


        themeButton.addEventListener(
            "click",
            () => {

                // Get current theme
                const currentTheme =
                    globalStore
                        .getState()
                        .userTheme;


                // Calculate new theme
                const newTheme =
                    currentTheme === "light"
                        ? "dark"
                        : "light";


                // Update global state
                globalStore.setState({

                    userTheme:
                        newTheme

                });

            }
        );

    }


    updateTheme(state) {

        const themeValue =
            this.shadowRoot
                .querySelector("#themeValue");


        themeValue.textContent =
            state.userTheme;


        // Update main global state display
        const globalTheme =
            document.querySelector(
                "#globalTheme"
            );


        if (globalTheme) {

            globalTheme.textContent =
                state.userTheme;

        }

    }

}


customElements.define(
    "theme-component",
    ThemeComponent
);