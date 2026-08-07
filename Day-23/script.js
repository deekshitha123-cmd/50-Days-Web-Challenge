const tasks = document.querySelectorAll(".task-card");
const columns = document.querySelectorAll(".column");

tasks.forEach(task => {

    task.addEventListener("dragstart", () => {

        task.classList.add("is-dragging");

    });

    task.addEventListener("dragend", () => {

        task.classList.remove("is-dragging");

    });

});


columns.forEach(column => {

    column.addEventListener("dragover", (e) => {

        e.preventDefault();

        column.classList.add("drag-over");

    });

    column.addEventListener("dragleave", () => {

        column.classList.remove("drag-over");

    });

    column.addEventListener("drop", () => {

        const dragging = document.querySelector(".is-dragging");

        column.appendChild(dragging);

        column.classList.remove("drag-over");

    });

});