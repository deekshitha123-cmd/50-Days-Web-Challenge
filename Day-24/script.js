// ==========================================
// DAY 24 - VANILLA JAVASCRIPT SPA ROUTER
// ==========================================


// ==========================================
// 1. VIEW DEFINITIONS
// ==========================================

const views = {

    "/": `
        <section class="hero">
            <div class="hero-content">

                <span class="badge">
                    Day 24 / 50 Web Dev Challenge
                </span>

                <h1>
                    Welcome to <span>DevSpace</span>
                </h1>

                <p>
                    A Single Page Application built completely
                    with HTML, CSS and Vanilla JavaScript.
                    No page reloads. No frameworks.
                </p>

                <a href="/team" class="btn nav-link">
                    Meet Our Team
                </a>

                <a href="/projects" class="btn btn-secondary nav-link">
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

                <article class="card">
                    <div class="card-icon">👩‍💻</div>

                    <h3>Frontend Developer</h3>

                    <p>
                        Builds responsive and interactive
                        user interfaces using modern web
                        technologies.
                    </p>
                </article>


                <article class="card">
                    <div class="card-icon">👨‍💻</div>

                    <h3>Backend Developer</h3>

                    <p>
                        Develops APIs, server-side logic
                        and database integrations.
                    </p>
                </article>


                <article class="card">
                    <div class="card-icon">🤖</div>

                    <h3>AI Developer</h3>

                    <p>
                        Works on intelligent solutions using
                        machine learning and artificial intelligence.
                    </p>
                </article>

            </div>

        </section>
    `,


    "/projects": `
        <section class="page">

            <div class="page-header">
                <h1>Our Projects</h1>

                <p>
                    Some projects created while learning
                    modern web development.
                </p>
            </div>

            <div class="card-grid">

                <article class="card project-card">

                    <div class="card-icon">📋</div>

                    <h3>Task Tracker</h3>

                    <p>
                        A CRUD-based task management application
                        built with Vanilla JavaScript and LocalStorage.
                    </p>

                </article>


                <article class="card project-card">

                    <div class="card-icon">🔎</div>

                    <h3>Real-Time Search</h3>

                    <p>
                        A dynamic search interface demonstrating
                        filtering, DOM manipulation and debouncing.
                    </p>

                </article>


                <article class="card project-card">

                    <div class="card-icon">🚀</div>

                    <h3>SPA Router</h3>

                    <p>
                        A client-side routing system built from
                        scratch using the JavaScript History API.
                    </p>

                </article>

            </div>

        </section>
    `,


    "/about": `
        <section class="page">

            <div class="page-header">
                <h1>About This Project</h1>

                <p>
                    Understanding how Single Page Applications work.
                </p>
            </div>

            <div class="about-box">

                <p>
                    This project demonstrates how a basic SPA router
                    can be created using Vanilla JavaScript without
                    relying on frameworks such as React or Vue.
                </p>

                <p>
                    The router uses the History API to modify the
                    browser URL without refreshing the page.
                </p>

                <p>
                    When navigation occurs, JavaScript detects the
                    requested path and dynamically injects the
                    corresponding HTML into the application root.
                </p>

                <p>
                    The browser's Back and Forward buttons are also
                    supported using the popstate event.
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

            <h2>Page Not Found</h2>

            <p>
                Sorry, the page you are looking for
                doesn't exist.
            </p>

            <a href="/" class="btn nav-link">
                Back to Home
            </a>

        </div>

    </section>
`;


// ==========================================
// 3. ROUTER FUNCTION
// ==========================================

async function router() {

    // Get the current URL path
    const path = window.location.pathname;

    // Find the application root
    const appRoot = document.getElementById("app-root");

    // Get matching view
    const view = views[path] || notFoundView;

    // Inject view into DOM
    appRoot.innerHTML = view;

    // Scroll to top after navigation
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// 4. LINK INTERCEPTION
// ==========================================

document.addEventListener("click", (event) => {

    // Find the nearest anchor element
    const link = event.target.closest(".nav-link");

    // Ignore clicks outside nav links
    if (!link) {
        return;
    }

    // Get the URL
    const href = link.getAttribute("href");

    // Ignore external links
    if (!href || href.startsWith("http")) {
        return;
    }

    // Prevent browser's default page reload
    event.preventDefault();

    // Update browser URL without reload
    window.history.pushState({}, "", href);

    // Render the new view
    router();
});


// ==========================================
// 5. BROWSER BACK/FORWARD BUTTON
// ==========================================

window.addEventListener("popstate", router);


// ==========================================
// 6. INITIAL PAGE LOAD
// ==========================================

router();