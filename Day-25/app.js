// ==========================================
// DAY 25 - PHASE 2 CAPSTONE
// CENTRAL APPLICATION ENGINE
// ==========================================


// ==========================================
// 1. VIEW DEFINITIONS
// ==========================================

const views = {

    "/": `
        <section class="hero">

            <div class="hero-content">

                <span class="badge">
                    Day 25 / 50 Web Dev Challenge
                </span>

                <h1>
                    Welcome to <span>DevSpace</span>
                </h1>

                <p>
                    A Single Page Application built
                    completely with HTML, CSS and
                    Vanilla JavaScript.
                </p>

                <a href="./team" class="btn nav-link">
                    Meet Our Team
                </a>

                <a href="./projects"
                   class="btn btn-secondary nav-link">
                    View Projects
                </a>

            </div>

        </section>
    `,


    "/team": `
        <section class="page">

            <div class="page-header">

                <h1>Our Team</h1>

                <p>
                    Meet the developers behind DevSpace.
                </p>

            </div>


            <div class="card-grid">

                <article class="card observe">

                    <div class="card-icon">
                        👩‍💻
                    </div>

                    <h3>
                        Frontend Developer
                    </h3>

                    <p>
                        Builds responsive and interactive
                        user interfaces using modern
                        web technologies.
                    </p>

                </article>


                <article class="card observe">

                    <div class="card-icon">
                        👨‍💻
                    </div>

                    <h3>
                        Backend Developer
                    </h3>

                    <p>
                        Develops APIs, server-side logic
                        and database integrations.
                    </p>

                </article>


                <article class="card observe">

                    <div class="card-icon">
                        🤖
                    </div>

                    <h3>
                        AI Developer
                    </h3>

                    <p>
                        Works on intelligent solutions
                        using machine learning and
                        artificial intelligence.
                    </p>

                </article>

            </div>


            <!-- KANBAN -->

            <div class="page-header kanban-header">

                <h1>Kanban Board</h1>

                <p>
                    Drag and drop tasks between columns.
                </p>

            </div>


            <div class="add-task-area">

                <input
                    id="task-input"
                    type="text"
                    placeholder="Enter a task..."
                >

                <button
                    id="add-task-btn"
                    class="btn"
                    type="button"
                >
                    Add Task
                </button>

            </div>


            <div class="kanban-board">

                <div
                    class="kanban-column"
                    data-status="todo"
                >

                    <h2>
                        📝 To Do
                    </h2>

                    <div
                        id="todo-list"
                        class="task-list"
                    ></div>

                </div>


                <div
                    class="kanban-column"
                    data-status="progress"
                >

                    <h2>
                        ⚙️ In Progress
                    </h2>

                    <div
                        id="progress-list"
                        class="task-list"
                    ></div>

                </div>


                <div
                    class="kanban-column"
                    data-status="done"
                >

                    <h2>
                        ✅ Done
                    </h2>

                    <div
                        id="done-list"
                        class="task-list"
                    ></div>

                </div>

            </div>

        </section>
    `,


    "/projects": `
        <section class="page">

            <div class="page-header">

                <h1>
                    Our Projects
                </h1>

                <p>
                    Projects created while learning
                    modern web development.
                </p>

            </div>


            <div class="card-grid">

                <article class="card project-card observe">

                    <div class="card-icon">
                        📋
                    </div>

                    <h3>
                        Task Tracker
                    </h3>

                    <p>
                        A CRUD-based task management
                        application using Vanilla
                        JavaScript and LocalStorage.
                    </p>

                </article>


                <article class="card project-card observe">

                    <div class="card-icon">
                        🔎
                    </div>

                    <h3>
                        Real-Time Search
                    </h3>

                    <p>
                        Dynamic search demonstrating
                        filtering, DOM manipulation
                        and debouncing.
                    </p>

                </article>


                <article class="card project-card observe">

                    <div class="card-icon">
                        🚀
                    </div>

                    <h3>
                        SPA Router
                    </h3>

                    <p>
                        Client-side routing using the
                        JavaScript History API.
                    </p>

                </article>

            </div>

        </section>
    `,


    "/about": `
        <section class="page">

            <div class="page-header">

                <h1>
                    About This Project
                </h1>

                <p>
                    Understanding SPA architecture.
                </p>

            </div>


            <div class="about-box observe">

                <p>
                    This project demonstrates how a
                    Single Page Application can be built
                    using Vanilla JavaScript.
                </p>

                <p>
                    Day 25 introduces a centralized
                    Application Engine that controls
                    initialization of application
                    features.
                </p>

                <p>
                    Global features such as dark mode
                    and the mobile menu are initialized
                    once.
                </p>

                <p>
                    Route-specific features are
                    initialized only when their
                    corresponding view is loaded.
                </p>

            </div>

        </section>
    `
};


// ==========================================
// 2. 404 VIEW
// ==========================================

const notFoundView = `

    <section class="error-page">

        <div>

            <h1>404</h1>

            <h2>
                Page Not Found
            </h2>

            <p>
                Sorry, the page you are looking
                for does not exist.
            </p>

            <a href="./" class="btn nav-link">
                Back to Home
            </a>

        </div>

    </section>

`;


// ==========================================
// 3. ROUTE NORMALIZATION
// ==========================================

function getRoute() {

    let path = window.location.pathname;


    // Remove trailing slash

    if (
        path.length > 1 &&
        path.endsWith("/")
    ) {
        path = path.slice(0, -1);
    }


    /*
        This makes the application work even when
        your Day-25 folder is inside a parent folder.

        Example:

        /Day-25/
        /Day-25/team
        /Day-25/projects
        /Day-25/about
    */

    const segments = path.split("/").filter(Boolean);


    if (segments.length === 0) {
        return "/";
    }


    const lastSegment =
        segments[segments.length - 1];


    if (lastSegment === "Day-25") {
        return "/";
    }


    if (
        lastSegment === "team" ||
        lastSegment === "projects" ||
        lastSegment === "about"
    ) {
        return "/" + lastSegment;
    }


    return path;

}


// ==========================================
// 4. ROUTER
// ==========================================

function router() {

    const path = getRoute();

    const appRoot =
        document.getElementById("app-root");


    if (!appRoot) {
        return;
    }


    const view =
        views[path] || notFoundView;


    appRoot.innerHTML = view;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    // ======================================
    // ROUTE-SPECIFIC INITIALIZERS
    // ======================================

    if (
        path === "/team"
    ) {

        initScrollObserver();

        initKanbanBoard();

    }


    if (
        path === "/projects"
    ) {

        initScrollObserver();

    }


    if (
        path === "/about"
    ) {

        initScrollObserver();

    }

}


// ==========================================
// 5. NAVIGATION HANDLER
// ==========================================

function handleNavigation(event) {

    const link =
        event.target.closest(".nav-link");


    if (!link) {
        return;
    }


    const href =
        link.getAttribute("href");


    if (!href) {
        return;
    }


    // Ignore external links

    if (
        href.startsWith("http") ||
        href.startsWith("mailto:")
    ) {
        return;
    }


    event.preventDefault();


    /*
        Convert relative links into a clean
        browser URL.
    */

    const url =
        new URL(
            href,
            window.location.href
        );


    window.history.pushState(
        {},
        "",
        url.pathname
    );


    // Render current route

    router();

}


// ==========================================
// 6. MOBILE MENU
// ==========================================

function initMobileMenu() {

    const button =
        document.getElementById("menu-toggle");


    const nav =
        document.getElementById("main-nav");


    if (!button || !nav) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            nav.classList.toggle("active");


            const isOpen =
                nav.classList.contains("active");


            button.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

}


// ==========================================
// 7. DARK MODE
// ==========================================

function initThemeToggle() {

    const button =
        document.getElementById("theme-toggle");


    if (!button) {
        return;
    }


    const savedTheme =
        localStorage.getItem("devspace-theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        button.textContent = "☀️";

    }


    button.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            const darkMode =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "devspace-theme",
                darkMode
                    ? "dark"
                    : "light"
            );


            button.textContent =
                darkMode
                    ? "☀️"
                    : "🌙";

        }
    );

}


// ==========================================
// 8. INTERSECTION OBSERVER
// ==========================================

function initScrollObserver() {

    const elements =
        document.querySelectorAll(
            ".observe"
        );


    if (!elements.length) {
        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(
        function (element) {

            observer.observe(element);

        }
    );

}


// ==========================================
// 9. KANBAN STATE
// ==========================================

let kanbanState = {

    todo: [],

    progress: [],

    done: []

};


const KANBAN_STORAGE_KEY =
    "devspace-kanban";


// ==========================================
// 10. LOAD KANBAN
// ==========================================

function loadKanbanState() {

    const saved =
        localStorage.getItem(
            KANBAN_STORAGE_KEY
        );


    if (!saved) {
        return;
    }


    try {

        const parsed =
            JSON.parse(saved);


        if (
            parsed &&
            Array.isArray(parsed.todo) &&
            Array.isArray(parsed.progress) &&
            Array.isArray(parsed.done)
        ) {

            kanbanState = parsed;

        }

    } catch (error) {

        console.error(
            "Error loading Kanban state:",
            error
        );

    }

}


// ==========================================
// 11. SAVE KANBAN
// ==========================================

function saveKanbanState() {

    localStorage.setItem(
        KANBAN_STORAGE_KEY,
        JSON.stringify(kanbanState)
    );

}


// ==========================================
// 12. CREATE TASK ELEMENT
// ==========================================

function createTaskElement(task) {

    const taskElement =
        document.createElement("div");


    taskElement.className =
        "task-card";


    taskElement.draggable = true;


    taskElement.dataset.id =
        task.id;


    taskElement.textContent =
        task.text;


    taskElement.addEventListener(
        "dragstart",
        function () {

            taskElement.classList.add(
                "dragging"
            );

        }
    );


    taskElement.addEventListener(
        "dragend",
        function () {

            taskElement.classList.remove(
                "dragging"
            );

        }
    );


    return taskElement;

}


// ==========================================
// 13. RENDER KANBAN
// ==========================================

function renderKanban() {

    const todoList =
        document.getElementById(
            "todo-list"
        );


    const progressList =
        document.getElementById(
            "progress-list"
        );


    const doneList =
        document.getElementById(
            "done-list"
        );


    if (
        !todoList ||
        !progressList ||
        !doneList
    ) {
        return;
    }


    todoList.innerHTML = "";

    progressList.innerHTML = "";

    doneList.innerHTML = "";


    kanbanState.todo.forEach(
        function (task) {

            todoList.appendChild(
                createTaskElement(task)
            );

        }
    );


    kanbanState.progress.forEach(
        function (task) {

            progressList.appendChild(
                createTaskElement(task)
            );

        }
    );


    kanbanState.done.forEach(
        function (task) {

            doneList.appendChild(
                createTaskElement(task)
            );

        }
    );


    // Empty messages

    addEmptyMessage(
        todoList,
        kanbanState.todo
    );


    addEmptyMessage(
        progressList,
        kanbanState.progress
    );


    addEmptyMessage(
        doneList,
        kanbanState.done
    );

}


// ==========================================
// 14. EMPTY MESSAGE
// ==========================================

function addEmptyMessage(
    container,
    tasks
) {

    if (tasks.length !== 0) {
        return;
    }


    const message =
        document.createElement("p");


    message.className =
        "empty-message";


    message.textContent =
        "No tasks";


    container.appendChild(message);

}


// ==========================================
// 15. KANBAN INITIALIZER
// ==========================================

function initKanbanBoard() {

    const addButton =
        document.getElementById(
            "add-task-btn"
        );


    const input =
        document.getElementById(
            "task-input"
        );


    const board =
        document.querySelector(
            ".kanban-board"
        );


    if (
        !addButton ||
        !input ||
        !board
    ) {
        return;
    }


    // Load previous state

    loadKanbanState();


    // Render previous tasks

    renderKanban();


    // ======================================
    // ADD TASK
    // ======================================

    addButton.addEventListener(
        "click",
        function () {

            const text =
                input.value.trim();


            if (!text) {

                alert(
                    "Please enter a task."
                );

                return;

            }


            const task = {

                id: Date.now(),

                text: text

            };


            kanbanState.todo.push(task);


            saveKanbanState();


            renderKanban();


            input.value = "";

            input.focus();

        }
    );


    // ======================================
    // ENTER KEY
    // ======================================

    input.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                addButton.click();

            }

        }
    );


    // ======================================
    // DRAG OVER
    // ======================================

    board.addEventListener(
        "dragover",
        function (event) {

            event.preventDefault();

        }
    );


    // ======================================
    // DROP
    // ======================================

    board.addEventListener(
        "drop",
        function (event) {

            event.preventDefault();


            const dragging =
                document.querySelector(
                    ".dragging"
                );


            if (!dragging) {
                return;
            }


            const column =
                event.target.closest(
                    ".kanban-column"
                );


            if (!column) {
                return;
            }


            const newStatus =
                column.dataset.status;


            const taskId =
                Number(
                    dragging.dataset.id
                );


            let movedTask = null;


            // Remove from old column

            const statuses = [
                "todo",
                "progress",
                "done"
            ];


            for (
                const status of statuses
            ) {

                const index =
                    kanbanState[status]
                        .findIndex(
                            function (task) {

                                return (
                                    task.id ===
                                    taskId
                                );

                            }
                        );


                if (index !== -1) {

                    movedTask =
                        kanbanState[status]
                            .splice(
                                index,
                                1
                            )[0];

                    break;

                }

            }


            if (!movedTask) {
                return;
            }


            // Add to new column

            kanbanState[newStatus].push(
                movedTask
            );


            // Save after DROP

            saveKanbanState();


            // Render again

            renderKanban();

        }
    );

}


// ==========================================
// 16. CENTRAL APPLICATION ENGINE
// ==========================================

function initApp() {

    console.log(
        "DevSpace Application Engine Started"
    );


    // ======================================
    // GLOBAL FEATURES
    // Initialized ONLY ONCE
    // ======================================

    initMobileMenu();

    initThemeToggle();


    // ======================================
    // GLOBAL SPA NAVIGATION
    // ======================================

    document.addEventListener(
        "click",
        handleNavigation
    );


    // ======================================
    // BACK / FORWARD
    // ======================================

    window.addEventListener(
        "popstate",
        router
    );


    // ======================================
    // INITIAL ROUTE
    // ======================================

    router();

}


// ==========================================
// 17. DOM CONTENT LIFECYCLE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    initApp
);