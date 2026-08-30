class StateStore {

    constructor(initialState) {

        // Store the application's state
        this.state = initialState;

        // Store all subscribed functions
        this.listeners = [];

    }


    // Subscribe a component to state changes
    subscribe(listenerFunction) {

        this.listeners.push(listenerFunction);


        // Return unsubscribe function
        return () => {

            this.listeners =
                this.listeners.filter(
                    listener =>
                        listener !== listenerFunction
                );

        };

    }


    // Update the global state
    setState(newState) {

        this.state = {
            ...this.state,
            ...newState
        };


        // Notify every subscriber
        this.listeners.forEach(
            listener => {

                listener(this.state);

            }
        );

    }


    // Get the current state
    getState() {

        return this.state;

    }

}


// Create ONE global store instance

export const globalStore =
    new StateStore({

        cartCount: 0,

        userTheme: "light"

    });