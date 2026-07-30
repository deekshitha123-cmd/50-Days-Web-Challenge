# 🔍 Day 15 – Array Filtering & Real-Time Search

## 🚀 50 Days Web Development Challenge

Welcome to **Day 15** of my **50 Days Web Development Challenge with Synexus**!

Today, I enhanced the Synexus Community Initiatives Gallery by building a **real-time project search feature** using **Vanilla JavaScript**.

As the user types in the search bar, the application instantly filters the project data and dynamically updates the UI without refreshing the page.

---

## 🎯 Problem Statement

As the Synexus community grows, the number of projects and initiatives may increase significantly. Users need a quick and simple way to find the projects they are interested in.

To solve this problem, I created a **client-side real-time search system** that filters project data before rendering it to the DOM.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript

---

## 🧠 JavaScript Concepts Practiced

* JavaScript Arrays
* Array `.filter()`
* Array `.forEach()`
* Reusable Functions
* DOM Manipulation
* The `"input"` Event
* `.toLowerCase()`
* `.includes()`
* Dynamic UI Rendering
* Template Literals
* Conditional Statements
* Empty-State Handling

---

## ✨ Features

* 🔍 Real-time project search
* ⚡ Instant results while typing
* 🔤 Case-insensitive search
* 🧩 Dynamically generated project cards
* ♻️ Reusable `renderProjects()` function
* 🧹 Clears old project cards before rendering new results
* 📭 Displays a **No Results Found** message
* 📱 Fully responsive design
* 🍔 Responsive mobile navigation
* 🎨 Modern and user-friendly interface

---

## 📂 Project Structure

```text
day-15-array-filtering/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How the Search Works

### 1. Store project information in an array

```javascript
const projectsData = [
    {
        title: "StoreLane",
        category: "Web Development"
    },
    {
        title: "CodeConnect",
        category: "Developer Community"
    }
];
```

---

### 2. Render projects using a reusable function

```javascript
function renderProjects(dataArray) {

    gridContainer.innerHTML = "";

    dataArray.forEach(function (project) {

        // Create and display project cards

    });

}
```

The function accepts any project array and displays the projects dynamically.

---

### 3. Listen for user input

```javascript
searchInput.addEventListener(
    "input",
    function () {

        // Search logic

    }
);
```

The `"input"` event runs every time the user types, deletes, or changes text in the search field.

---

### 4. Convert the search text to lowercase

```javascript
const searchTerm =
    searchInput.value
        .toLowerCase()
        .trim();
```

This makes the search **case-insensitive**.

For example:

* `store`
* `STORE`
* `Store`

All of these can find **StoreLane**.

---

### 5. Filter the project array

```javascript
const filteredProjects =
    projectsData.filter(
        function (project) {

            return project.title
                .toLowerCase()
                .includes(searchTerm);

        }
    );
```

The `.filter()` method creates a **new array** containing only the projects that match the search text.

---

### 6. Render the filtered results

```javascript
renderProjects(filteredProjects);
```

Only the matching project cards are displayed.

---

## 📭 No Results State

If no project matches the search term, the application displays:

> 🔍 No Results Found
> No initiatives match your search.

```javascript
if (dataArray.length === 0) {

    gridContainer.innerHTML = `
        <div class="no-results">

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
```

---

## 🧪 Search Examples

Try searching for:

| Search Text | Expected Result  |
| ----------- | ---------------- |
| `store`     | StoreLane        |
| `code`      | CodeConnect      |
| `smart`     | Smart Campus     |
| `health`    | HealthTrack      |
| `eco`       | EcoVision        |
| `skill`     | SkillBridge      |
| `python`    | No Results Found |

---

## 🧠 Key Learning

The major learning from this project was understanding that data can be **filtered before it is rendered to the DOM**.

Instead of manually hiding and showing HTML elements, the application:

1. Stores project information in a JavaScript array.
2. Reads the user's search input.
3. Filters the array using `.filter()`.
4. Passes the filtered array to `renderProjects()`.
5. Dynamically updates the UI.

This creates a clean, reusable, and scalable approach to building interactive web applications.

---

## ⚠️ Challenges Solved

### Case Sensitivity

The following search might fail if the text is compared directly:

```text
store
```

```text
StoreLane
```

To solve this, both values are converted to lowercase:

```javascript
project.title
    .toLowerCase()
    .includes(searchTerm);
```

---

### Duplicate Project Cards

Without clearing the grid, every search could add more cards below the existing cards.

This issue was solved using:

```javascript
gridContainer.innerHTML = "";
```

---

### Protecting the Original Data

The original `projectsData` array remains unchanged.

The `.filter()` method creates a new filtered array, so deleting the search text correctly displays all projects again.

---

## 📈 Learning Outcomes

After completing this challenge, I can:

* Create reusable JavaScript functions.
* Render data dynamically.
* Use the `.filter()` array method.
* Handle real-time user input.
* Build case-insensitive search functionality.
* Update the DOM dynamically.
* Create a user-friendly empty state.
* Build interactive frontend features without a database.

---

## 🔮 Future Improvements

* Search by project category
* Add search suggestions
* Add category filter buttons
* Add project sorting
* Highlight matching search text
* Add debounce functionality
* Connect the project data to a database
* Add project details pages

---

## 👩‍💻 Author

**Deekshitha HS**

Information Science & Engineering Student
Aspiring Full-Stack Developer

---

## 🔗 Connect With Me

* LinkedIn: Add your LinkedIn profile link
* GitHub: Add your GitHub profile link

---

## 🙌 Acknowledgment

This project was completed as part of the **50 Days Web Development Challenge with Synexus**.

Thank you to the Synexus community for providing practical challenges that help learners improve their web development skills.

---

⭐ If you like this project, consider giving the repository a star!
