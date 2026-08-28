self.onmessage = function (e) {

    if (e.data === "START") {

        console.log("Worker started...");

        let result = 0;

        // Heavy calculation
        for (let i = 0; i < 100000000; i++) {
            result += i;
        }

        console.log("Worker finished...");

        // Send result back to main thread
        self.postMessage(result);
    }
};