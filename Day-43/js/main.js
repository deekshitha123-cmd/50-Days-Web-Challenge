import "./components/cart.js";
import "./components/theme.js";

import { globalStore } from "./core/store.js";


// Application started

console.log(
    "🚀 Day 43 Application Started"
);


// Display initial state

console.log(
    "Initial Global State:",
    globalStore.getState()
);


// Subscribe main.js to global state

globalStore.subscribe(
    (state) => {

        console.log(
            "🔄 Global State Updated:",
            state
        );

    }
);