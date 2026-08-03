/* =====================================
DAY 19
EVENT DELEGATION & DYNAMIC MODALS
===================================== */

/* =====================================
PROJECT DATA
===================================== */

const projects = [

{
title:
"AI Learning Hub",

```
category:
  "Artificial Intelligence",

description:
  "A collaborative platform where students can learn Artificial Intelligence through projects, resources, and community discussions.",

image:
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
```

},

{
title:
"Smart Campus",

```
category:
  "Web Development",

description:
  "A smart digital platform designed to improve communication, event management, and student engagement across the campus.",

image:
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
```

},

{
title:
"Green Future",

```
category:
  "Sustainability",

description:
  "An initiative focused on promoting environmental awareness, sustainable practices, and eco-friendly community projects.",

image:
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
```

},

{
title:
"Code Together",

```
category:
  "Programming",

description:
  "A community-driven coding platform where students collaborate, solve challenges, and build real-world applications.",

image:
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
```

},

{
title:
"Health Connect",

```
category:
  "Healthcare",

description:
  "A digital initiative that connects people with health resources, awareness programs, and community support.",

image:
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
```

},

{
title:
"Skill Bridge",

```
category:
  "Career Development",

description:
  "A platform that helps students discover skills, connect with mentors, and prepare for professional opportunities.",

image:
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
```

}

];

/* =====================================
SELECT DOM ELEMENTS
===================================== */

const gridContainer =
document.getElementById(
"gridContainer"
);

const searchInput =
document.getElementById(
"searchInput"
);

const emptyMessage =
document.getElementById(
"emptyMessage"
);

const modalOverlay =
document.getElementById(
"modalOverlay"
);

const modalTitle =
document.getElementById(
"modalTitle"
);

const modalDescription =
document.getElementById(
"modalDescription"
);

const closeModalButton =
document.getElementById(
"closeModal"
);

/* =====================================
RENDER PROJECTS
===================================== */

function renderProjects(
projectList
) {

gridContainer.innerHTML = "";

projectList.forEach(
function(project) {

```
  const projectCard =
    document.createElement(
      "article"
    );


  projectCard.classList.add(
    "project-card"
  );


  projectCard.innerHTML = `

    <img
      class="project-image"
      src="${project.image}"
      alt="${project.title}"
    >

    <div class="project-content">

      <span
        class="project-category"
      >
        ${project.category}
      </span>


      <h3>
        ${project.title}
      </h3>


      <p>
        ${project.description}
      </p>


      <!-- DAY 19 BUTTON -->

      <button
        class="view-btn"
        data-title="${project.title}"
        data-description="${project.description}"
      >

        <span>
          View Details
        </span>

      </button>

    </div>

  `;


  gridContainer.appendChild(
    projectCard
  );

}
```

);

/* Show empty message */

if (
projectList.length === 0
) {

```
emptyMessage.style.display =
  "block";
```

}

else {

```
emptyMessage.style.display =
  "none";
```

}

}

/* =====================================
INITIAL PROJECT RENDER
===================================== */

renderProjects(
projects
);

/* =====================================
DAY 15
SEARCH FUNCTIONALITY
===================================== */

searchInput.addEventListener(
"input",
function() {

```
const searchValue =
  searchInput.value
    .toLowerCase()
    .trim();


const filteredProjects =
  projects.filter(
    function(project) {

      return (

        project.title
          .toLowerCase()
          .includes(
            searchValue
          )

        ||

        project.category
          .toLowerCase()
          .includes(
            searchValue
          )

      );

    }
  );


renderProjects(
  filteredProjects
);
```

}
);

/* =====================================
DAY 19
EVENT DELEGATION
===================================== */

/*
Only ONE click listener is attached
to the parent grid container.
*/

gridContainer.addEventListener(
"click",
function(event) {

```
/*
  closest() finds the nearest
  parent button with .view-btn.

  This works even when the user
  clicks the <span> inside
  the button.
*/


const viewButton =
  event.target.closest(
    ".view-btn"
  );


/*
  If the click was not inside
  a View Details button,
  stop the function.
*/


if (
  !viewButton
) {

  return;

}


/*
  Get information stored
  inside data attributes.
*/


const projectTitle =
  viewButton.getAttribute(
    "data-title"
  );


const projectDescription =
  viewButton.getAttribute(
    "data-description"
  );


/*
  Update modal content.
*/


modalTitle.textContent =
  projectTitle;


modalDescription.textContent =
  projectDescription;


/*
  Open modal.
*/


modalOverlay.style.display =
  "flex";
```

}
);

/* =====================================
CLOSE MODAL FUNCTION
===================================== */

function closeModal() {

modalOverlay.style.display =
"none";

}

/* =====================================
CLOSE USING X BUTTON
===================================== */

closeModalButton.addEventListener(
"click",
closeModal
);

/* =====================================
CLOSE BY CLICKING OVERLAY
===================================== */

modalOverlay.addEventListener(
"click",
function(event) {

```
/*
  Only close when the dark
  background is clicked.

  Do not close when the
  modal box is clicked.
*/


if (
  event.target ===
  modalOverlay
) {

  closeModal();

}
```

}
);

/* =====================================
CLOSE USING ESCAPE KEY
===================================== */

document.addEventListener(
"keydown",
function(event) {

```
if (
  event.key ===
  "Escape"
) {

  closeModal();

}
```

}
);
