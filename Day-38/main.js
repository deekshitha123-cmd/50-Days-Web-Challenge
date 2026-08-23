// main.js

import {
    sendLiveMessage,
    clearFeed
} from "./websocket.js";


// ========================================
// GET ELEMENTS
// ========================================

const input =
    document.getElementById("ws-input");

const sendButton =
    document.getElementById("ws-send");

const clearButton =
    document.getElementById("clear-btn");


// ========================================
// SEND BUTTON
// ========================================

sendButton.addEventListener(
    "click",
    sendMessage
);


// ========================================
// ENTER KEY
// ========================================

input.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            sendMessage();

        }
    }
);


// ========================================
// SEND MESSAGE FUNCTION
// ========================================

function sendMessage() {

    const message =
        input.value.trim();


    if (!message) {
        return;
    }


    sendLiveMessage(message);


    input.value = "";

    input.focus();
}


// ========================================
// CLEAR BUTTON
// ========================================

clearButton.addEventListener(
    "click",
    () => {

        clearFeed();

        input.focus();

    }
);