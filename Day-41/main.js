// Create Web Worker
const myWorker = new Worker("worker.js");

const processBtn = document.getElementById("process-btn");
const cancelBtn = document.getElementById("cancel-btn");
const status = document.getElementById("status");

// Start heavy process
processBtn.addEventListener("click", function () {

    status.textContent = "Processing...";

    myWorker.postMessage("START");

});

// Receive result from worker
myWorker.onmessage = function (e) {

    console.log("Result:", e.data);

    status.textContent = "Process Completed!";

};

// Handle worker errors
myWorker.onerror = function (error) {

    console.error("Worker Error:", error);

    status.textContent = "Worker Error";

};

// Cancel worker
cancelBtn.addEventListener("click", function () {

    myWorker.terminate();

    status.textContent = "Process Cancelled";

});