/* ==================================
SYNEXUS COMMUNITY
DAY 15:
ARRAY FILTERING & REAL-TIME SEARCH
================================== */

/* ==================================
PROJECT DATA
================================== */

const projectsData = [

```
{
    title: "StoreLane",
    category: "Web Development",
    description:
        "A modern online marketplace that helps users discover and manage products easily.",
    image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
},

{
    title: "CodeConnect",
    category: "Developer Community",
    description:
        "A collaborative platform where developers can share ideas and work on projects.",
    image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
},

{
    title: "Smart Campus",
    category: "Education",
    description:
        "A digital campus system designed to improve communication and student services.",
    image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
},

{
    title: "HealthTrack",
    category: "Healthcare",
    description:
        "A health monitoring application that helps users track daily wellness activities.",
    image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
},

{
    title: "EcoVision",
    category: "Sustainability",
    description:
        "A smart platform that encourages sustainable habits and environmental awareness.",
    image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80"
},

{
    title: "SkillBridge",
    category: "Learning",
    description:
        "An online learning platform that connects students with useful technical resources.",
    image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
}
```

];

/* ==================================
SELECT HTML ELEMENTS
================================== */

const gridContainer =
document.getElementById("dynamic-grid");

const searchInput =
document.getElementById("search-projects");

const menuButton =
document.getElementById("menu-btn");

const navigationLinks =
document.getElementById("nav-links");

/* ==================================
REUSABLE RENDER FUNCTION
================================== */

function renderProjects(dataArray) {

```
/* Clear old project cards */

gridContainer.innerHTML = "";


/* Show message when no project matches */

if (dataArray.length === 0) {

    gridContainer.innerHTML = `

        <div class="no-results">

            <span class="no-results-icon">
                🔍
            </span>

            <h3>
                No Results Found
            </h3>

            <p>
                No initiatives match your search.
            </p>

        </div>

    `;

    return;

}


/* Create project cards */

dataArray.forEach(function (project) {

    const projectCard =
        document.createElement("article");


    projectCard.classList.add(
        "project-card"
    );


    projectCard.innerHTML = `

        <img
            src="${project.image}"
            alt="${project.title} project"
            class="project-image"
        >

        <div class="project-content">

            <span class="project-category">

                ${project.category}

            </span>

            <h3>

                ${project.title}

            </h3>

            <p>

                ${project.description}

            </p>

        </div>

    `;


    gridContainer.appendChild(
        projectCard
    );

});
```

}

/* ==================================
DISPLAY ALL PROJECTS INITIALLY
================================== */

renderProjects(projectsData);

/* ==================================
REAL-TIME SEARCH
================================== */

searchInput.addEventListener(
"input",

```
function () {

    /* Get the search text */

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    /* Filter matching projects */

    const filteredProjects =
        projectsData.filter(
            function (project) {

                return (
                    project.title
                        .toLowerCase()
                        .includes(searchTerm)
                );

            }
        );


    /* Display matching projects */

    renderProjects(
        filteredProjects
    );

}
```

);

/* ==================================
MOBILE NAVIGATION
================================== */

menuButton.addEventListener(
"click",

```
function () {

    navigationLinks.classList.toggle(
        "active"
    );


    const isMenuOpen =
        navigationLinks.classList.contains(
            "active"
        );


    menuButton.setAttribute(
        "aria-expanded",
        isMenuOpen
    );


    if (isMenuOpen) {

        menuButton.textContent = "✕";

    } else {

        menuButton.textContent = "☰";

    }

}
```

);
