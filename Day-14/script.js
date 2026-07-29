// ==========================================
// DAY 14
// DYNAMIC DOM RENDERING
// DATA VS VIEW
// ==========================================


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle =
    document.getElementById("menu-toggle");


const navigation =
    document.getElementById("nav-menu");


menuToggle.addEventListener(
    "click",
    function () {

        navigation.classList.toggle("active");


        const menuIsOpen =
            navigation.classList.contains("active");


        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

    }
);


// Close mobile menu after clicking a link

const navigationLinks =
    document.querySelectorAll(
        ".navigation a"
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navigation.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }
);



// ==========================================
// PROJECT DATA
// ==========================================

// The data is separated from HTML.

// Every object represents one project.

const projectsData = [

    {

        title:
            "Web Development Challenge",

        description:
            "A structured 50-day challenge where students learn HTML, CSS, JavaScript, responsive design, accessibility, and DOM development.",

        status:
            "Active",

        icon:
            "💻"

    },


    {

        title:
            "AI Learning Hub",

        description:
            "A collaborative learning initiative focused on Artificial Intelligence, Machine Learning, Python, and practical AI applications.",

        status:
            "Active",

        icon:
            "🤖"

    },


    {

        title:
            "Community Portfolio",

        description:
            "A modern portfolio platform created to help community members showcase their technical skills, projects, and achievements.",

        status:
            "Completed",

        icon:
            "🎨"

    },


    {

        title:
            "Smart Campus System",

        description:
            "A software solution designed to improve campus communication, event management, and access to useful student resources.",

        status:
            "Planning",

        icon:
            "🏫"

    },


    {

        title:
            "Open Source Program",

        description:
            "A collaborative initiative where developers contribute to open-source projects and gain practical teamwork experience.",

        status:
            "Active",

        icon:
            "🌐"

    },


    {

        title:
            "Career Connect",

        description:
            "A platform that connects students with mentors, career resources, internships, coding opportunities, and industry guidance.",

        status:
            "Completed",

        icon:
            "🚀"

    }

];



// ==========================================
// SELECT THE EMPTY GRID
// ==========================================

const dynamicGrid =
    document.getElementById(
        "dynamic-grid"
    );



// ==========================================
// LOOP THROUGH PROJECT DATA
// ==========================================

projectsData.forEach(
    function (project) {

        // Convert the project status
        // into a lowercase CSS class.

        const statusClass =
            project.status.toLowerCase();


        // ==================================
        // CREATE HTML USING TEMPLATE LITERALS
        // ==================================

        const projectCard = `

            <article
                class="initiative-card ${statusClass}">

                <div class="project-top">

                    <div
                        class="project-icon"
                        aria-hidden="true">

                        ${project.icon}

                    </div>


                    <span
                        class="status status-${statusClass}">

                        ${project.status}

                    </span>

                </div>


                <h3>

                    ${project.title}

                </h3>


                <p>

                    ${project.description}

                </p>


                <a
                    href="#contact"
                    class="project-button">

                    Learn More →

                </a>

            </article>

        `;


        // ==================================
        // INJECT CARD INTO THE DOM
        // ==================================

        dynamicGrid.innerHTML +=
            projectCard;

    }
);



// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(
    "Day 14 Dynamic DOM Rendering loaded successfully!"
);


console.log(
    "Total projects:",
    projectsData.length
);