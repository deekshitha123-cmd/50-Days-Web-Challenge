// Global State Store

let state = {
    cartCount: 0
};

// Store all subscribers
const listeners = [];

export const globalStore = {

    // Get current state
    getState() {
        return state;
    },

    // Subscribe to state changes
    subscribe(listener) {

        listeners.push(listener);

        // Return unsubscribe function
        return () => {

            const index = listeners.indexOf(listener);

            if (index !== -1) {
                listeners.splice(index, 1);
            }
        };
    },

    // Update state
    setState(newState) {

        state = {
            ...state,
            ...newState
        };

        // Notify all subscribers
        listeners.forEach(listener => {
            listener(state);
        });
    }
};