// main.js


// ========================================
// SERVICE WORKER REGISTRATION
// ========================================

window.addEventListener("load", () => {

    if ("serviceWorker" in navigator) {

        navigator.serviceWorker
            .register("/sw.js")

            .then((registration) => {

                console.log(
                    "Service Worker registered successfully:",
                    registration.scope
                );

            })

            .catch((error) => {

                console.error(
                    "Service Worker registration failed:",
                    error
                );

            });

    } else {

        console.log(
            "Service Workers are not supported."
        );

    }

});


// ========================================
// HTML ELEMENTS
// ========================================

const statusElement =
    document.getElementById("status");

const statusText =
    document.getElementById("status-text");

const statusIcon =
    document.querySelector(".status-icon");

const statusCard =
    document.querySelector(".status-card");

const testButton =
    document.getElementById("testBtn");

const result =
    document.getElementById("result");


// ========================================
// CHECK CONNECTION
// ========================================

function updateConnectionStatus() {

    if (navigator.onLine) {

        statusElement.textContent =
            "Online";

        statusText.textContent =
            "Internet connection is available.";

        statusIcon.textContent =
            "🟢";

        statusCard.classList.remove(
            "offline"
        );

    } else {

        statusElement.textContent =
            "Offline";

        statusText.textContent =
            "You are offline, but the app is still available.";

        statusIcon.textContent =
            "📴";

        statusCard.classList.add(
            "offline"
        );
    }
}


// ========================================
// ONLINE EVENT
// ========================================

window.addEventListener(
    "online",
    updateConnectionStatus
);


// ========================================
// OFFLINE EVENT
// ========================================

window.addEventListener(
    "offline",
    updateConnectionStatus
);


// ========================================
// TEST SERVICE WORKER
// ========================================

testButton.addEventListener(
    "click",
    () => {

        if ("serviceWorker" in navigator) {

            result.textContent =
                "✅ Service Worker API is supported.";

        } else {

            result.textContent =
                "❌ Service Workers are not supported.";

        }

    }
);


// ========================================
// INITIAL STATUS
// ========================================

updateConnectionStatus();