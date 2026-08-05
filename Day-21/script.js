// =====================================
// DAY 21: DEBOUNCING AND CLOSURES
// =====================================


// Get HTML elements

const searchInput = document.getElementById("searchInput");

const results = document.getElementById("results");

const status = document.getElementById("status");


// Data to search

const technologies = [

  "JavaScript",

  "Python",

  "Java",

  "C Programming",

  "C++",

  "React",

  "Node.js",

  "MongoDB",

  "HTML",

  "CSS",

  "SQL",

  "Machine Learning"

];


// =====================================
// DEBOUNCE UTILITY
// =====================================

function debounce(func, delay) {

  // This variable is remembered
  // because of Closure

  let timeout;


  // Return a new optimized function

  return function (...args) {

    // Cancel the previous timer

    clearTimeout(timeout);


    // Start a new timer

    timeout = setTimeout(() => {

      // Run the original function
      // after the user stops typing

      func.apply(this, args);

    }, delay);

  };

}


// =====================================
// SEARCH FUNCTION
// =====================================

function searchTechnology(event) {

  const searchValue =
    event.target.value
      .toLowerCase()
      .trim();


  // Clear old results

  results.innerHTML = "";


  // If input is empty

  if (searchValue === "") {

    status.textContent =
      "Start typing to search.";

    return;

  }


  // Filter technologies

  const filteredTechnologies =
    technologies.filter(function (technology) {

      return technology
        .toLowerCase()
        .includes(searchValue);

    });


  // Console message

  console.log(
    "Heavy search function executed:",
    searchValue
  );


  // Show number of results

  status.textContent =
    `${filteredTechnologies.length} result(s) found`;


  // Display results

  if (
    filteredTechnologies.length > 0
  ) {

    filteredTechnologies.forEach(
      function (technology) {

        const resultItem =
          document.createElement("div");


        resultItem.classList.add(
          "result-item"
        );


        resultItem.textContent =
          technology;


        results.appendChild(
          resultItem
        );

      }
    );

  } else {

    results.innerHTML = `

      <div class="no-result">

        No technologies found.

      </div>

    `;

  }

}


// =====================================
// CREATE DEBOUNCED FUNCTION
// =====================================

const optimizedSearch =
  debounce(
    searchTechnology,
    300
  );


// =====================================
// ATTACH EVENT LISTENER
// =====================================

searchInput.addEventListener(
  "input",
  optimizedSearch
);