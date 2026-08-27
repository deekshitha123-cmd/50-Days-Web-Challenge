// db.js

// Open / initialize IndexedDB
export function openDB() {
    return new Promise((resolve, reject) => {

        const request = indexedDB.open("PlatformDB", 1);

        // Runs when database is created or version is upgraded
        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Create object store only if it doesn't already exist
            if (!db.objectStoreNames.contains("offline_proposals")) {
                db.createObjectStore("offline_proposals", {
                    keyPath: "id",
                    autoIncrement: true
                });
            }
        };

        // Database opened successfully
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        // Database opening failed
        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}


// Save data when the user is offline
export async function saveOfflineData(payload) {
    try {
        const db = await openDB();

        return new Promise((resolve, reject) => {

            const transaction = db.transaction(
                "offline_proposals",
                "readwrite"
            );

            const store = transaction.objectStore(
                "offline_proposals"
            );

            const request = store.add(payload);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });

    } catch (error) {
        console.error("Failed to save offline data:", error);
        throw error;
    }
}


// Retrieve all data saved while offline
export async function getOfflineData() {
    try {
        const db = await openDB();

        return new Promise((resolve, reject) => {

            const transaction = db.transaction(
                "offline_proposals",
                "readonly"
            );

            const store = transaction.objectStore(
                "offline_proposals"
            );

            const request = store.getAll();

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });

    } catch (error) {
        console.error("Failed to retrieve offline data:", error);
        throw error;
    }
}