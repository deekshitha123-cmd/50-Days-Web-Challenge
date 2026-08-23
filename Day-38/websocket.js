// websocket.js

let socket = null;

const RECONNECT_DELAY = 3000;


// ========================================
// UI ELEMENTS
// ========================================

const liveFeed =
    document.getElementById("live-feed");

const connectionStatus =
    document.getElementById("connection-status");

const statusDot =
    document.getElementById("status-dot");


// ========================================
// CONNECT TO WEBSOCKET SERVER
// ========================================

function connectWebSocket() {

    console.log("Connecting to WebSocket...");

    socket = new WebSocket(
        "wss://ws.postman-echo.com/raw"
    );


    // ====================================
    // CONNECTION OPENED
    // ====================================

    socket.onopen = () => {

        console.log(
            "WebSocket connection established ✅"
        );

        updateStatus(
            "Connected",
            true
        );

        addMessage(
            "System",
            "WebSocket connection established."
        );
    };


    // ====================================
    // MESSAGE RECEIVED
    // ====================================

    socket.onmessage = (event) => {

        console.log(
            "Message received:",
            event.data
        );

        addMessage(
            "Server",
            event.data
        );
    };


    // ====================================
    // ERROR
    // ====================================

    socket.onerror = (error) => {

        console.error(
            "WebSocket error:",
            error
        );

        updateStatus(
            "Connection Error",
            false
        );

        addMessage(
            "Error",
            "WebSocket connection error."
        );
    };


    // ====================================
    // CONNECTION CLOSED
    // ====================================

    socket.onclose = () => {

        console.log(
            "WebSocket connection closed."
        );

        updateStatus(
            "Disconnected",
            false
        );

        addMessage(
            "System",
            "Connection lost. Reconnecting in 3 seconds..."
        );


        // Auto reconnect

        setTimeout(() => {

            addMessage(
                "System",
                "Attempting to reconnect..."
            );

            connectWebSocket();

        }, RECONNECT_DELAY);
    };
}


// ========================================
// SEND MESSAGE
// ========================================

function sendLiveMessage(text) {

    // Check empty message

    if (!text.trim()) {
        return;
    }


    // Check WebSocket connection

    if (
        !socket ||
        socket.readyState !== WebSocket.OPEN
    ) {

        addMessage(
            "Error",
            "WebSocket is not connected."
        );

        return;
    }


    // Send message to server

    socket.send(text);


    console.log(
        "Message sent:",
        text
    );


    // Display sent message

    addMessage(
        "You",
        text
    );
}


// ========================================
// ADD MESSAGE TO LIVE FEED
// ========================================

function addMessage(sender, message) {

    const messageElement =
        document.createElement("div");

    messageElement.classList.add(
        "message"
    );


    if (sender === "You") {

        messageElement.classList.add(
            "sent"
        );

    } else if (sender === "Server") {

        messageElement.classList.add(
            "received"
        );

    } else {

        messageElement.classList.add(
            "system"
        );
    }


    messageElement.innerHTML = `
        <strong>${sender}</strong>
        <span>${escapeHTML(message)}</span>
    `;


    liveFeed.appendChild(
        messageElement
    );


    // Automatically scroll down

    liveFeed.scrollTop =
        liveFeed.scrollHeight;
}


// ========================================
// UPDATE CONNECTION STATUS
// ========================================

function updateStatus(
    status,
    connected
) {

    connectionStatus.textContent =
        status;

    if (connected) {

        statusDot.classList.add(
            "connected"
        );

    } else {

        statusDot.classList.remove(
            "connected"
        );
    }
}


// ========================================
// CLEAR FEED
// ========================================

function clearFeed() {

    liveFeed.innerHTML = "";

}


// ========================================
// BASIC HTML ESCAPING
// ========================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ========================================
// START CONNECTION
// ========================================

connectWebSocket();


// ========================================
// EXPORT
// ========================================

export {
    sendLiveMessage,
    clearFeed
};