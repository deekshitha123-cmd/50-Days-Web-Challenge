# 🗓️ Day 14: Dynamic DOM Rendering — Data vs View

## 🚀 50 Days Web Development Challenge

This project was created as part of the **50 Days Web Development Challenge by Synexus**.

On Day 14, I learned how to separate **data from the user interface (UI)** by storing project information in JavaScript arrays and objects. Instead of manually writing multiple project cards in HTML, JavaScript automatically generates and displays the cards dynamically.

---

## 🎯 Problem Statement

Previously, every initiative card was hardcoded directly inside the HTML file. This approach becomes difficult to manage when the number of projects increases.

For example, if the community creates 50 new projects, manually copying and editing HTML for every project would be time-consuming and error-prone.

To solve this problem, project information is stored as JavaScript data. A `forEach()` loop reads the data and dynamically creates the project cards.

This makes the application more scalable, reusable, and easier to maintain.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* JavaScript DOM
* Git and GitHub

---

## 🧠 Concepts Learned

* JavaScript Arrays
* JavaScript Objects
* Array `forEach()` Method
* Template Literals
* `${}` Expression Syntax
* DOM Selection
* `document.getElementById()`
* Dynamic HTML Generation
* DOM Injection
* `innerHTML`
* Conditional CSS Classes
* Data-Driven UI Architecture

---

## 📂 Project Structure

```text
Day-14-Dynamic-DOM/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📋 Project Features

✅ Responsive navigation menu

✅ Mobile hamburger menu

✅ Dynamic project cards

✅ Project data stored in JavaScript

✅ JavaScript Arrays and Objects

✅ `forEach()` loop for rendering projects

✅ Template Literals for creating HTML

✅ Dynamic DOM injection

✅ Conditional project status styling

✅ Green border for active projects

✅ Gray border for completed projects

✅ Yellow border for projects in the planning stage

✅ Responsive design for mobile, tablet, and desktop

✅ Accessibility features

---

## 📊 Data Structure

The project information is stored inside a JavaScript array.

Each object represents one community project.

```javascript
const projectsData = [

    {
        title: "Web Development Challenge",

        description:
            "A structured 50-day challenge where students learn modern web development.",

        status: "Active",

        icon: "💻"
    },

    {
        title: "AI Learning Hub",

        description:
            "A collaborative learning initiative focused on Artificial Intelligence.",

        status: "Active",

        icon: "🤖"
    }

];
```

---

## ⚙️ How Dynamic Rendering Works

### 1. Create an Empty HTML Container

The project cards are removed from the HTML file.

Only an empty container is kept:

```html
<div
    class="initiatives-grid"
    id="dynamic-grid">

</div>
```

---

### 2. Select the Container

JavaScript selects the empty grid using:

```javascript
const dynamicGrid =
    document.getElementById(
        "dynamic-grid"
    );
```

---

### 3. Loop Through the Project Data

The `forEach()` method runs once for every project object.

```javascript
projectsData.forEach(
    function (project) {

        console.log(
            project.title
        );

    }
);
```

---

### 4. Create HTML Using Template Literals

Template literals use backticks:

```javascript
const projectCard = `

    <h3>
        ${project.title}
    </h3>

    <p>
        ${project.description}
    </p>

`;
```

The `${}` syntax inserts values from the JavaScript object into the HTML.

---

### 5. Inject the Card into the DOM

The generated card is added to the project grid using:

```javascript
dynamicGrid.innerHTML +=
    projectCard;
```

The `+=` operator adds the new card while keeping all previously generated cards.

---

## 🎨 Conditional Rendering

The project status is converted into a CSS class:

```javascript
const statusClass =
    project.status.toLowerCase();
```

For example:

```text
Active → active

Completed → completed

Planning → planning
```

The generated project card receives the correct class:

```javascript
<article
    class="initiative-card active">
```

CSS then applies a different border based on the project status.

```css
.initiative-card.active {

    border-color:
        #22c55e;

}
```

---

## ⚠️ Common Issue: Overwrite Bug

Using this code:

```javascript
dynamicGrid.innerHTML =
    projectCard;
```

will replace the previous card during every loop.

As a result, only the final project card will appear.

The correct code is:

```javascript
dynamicGrid.innerHTML +=
    projectCard;
```

The `+=` operator appends each new card to the existing content.

---

## 📱 Responsive Design

The website is optimized for:

* Desktop computers
* Laptops
* Tablets
* Mobile phones

CSS Grid automatically changes the layout based on the screen size.

---

## ♿ Accessibility Features

The project includes:

* Semantic HTML elements
* Accessible navigation
* Skip-to-content link
* Keyboard focus styles
* ARIA labels
* Responsive navigation controls
* Meaningful image alternative text

---

## ▶️ How to Run the Project

1. Download or clone this repository.

2. Open the project folder.

3. Open the folder in **Visual Studio Code**.

4. Open the `index.html` file.

5. Run the project using the **Live Server** extension.

6. View the website in your browser.

---

## 🧪 Testing

Open the browser developer tools:

```text
F12 → Console
```

The following messages should appear:

```text
Day 14 Dynamic DOM Rendering loaded successfully!

Total projects: 6
```

If all six project cards are displayed correctly, the dynamic rendering is working successfully.

---

## 🎓 Key Learning Outcome

Through this project, I learned that the data and visual layout can be separated.

Instead of writing repeated HTML for every project, project information can be stored in JavaScript and rendered automatically.

This approach:

* Reduces repeated code
* Improves scalability
* Makes updates easier
* Reduces manual errors
* Creates reusable UI components
* Forms the foundation for modern frontend frameworks

This concept is commonly used in frameworks such as React, Angular, and Vue.

---

## 🔮 Future Improvements

* Add project search functionality
* Add project category filters
* Add a dark and light theme toggle
* Add project details using modal windows
* Load project data from a JSON file
* Connect the project to an API
* Add user authentication
* Store project information in a database

---

## 👩‍💻 Author

**Deekshitha HS**

Information Science and Engineering Student

Aspiring Full-Stack Developer

---

## 🔗 Repository

Add your GitHub repository link here:

```text
https://github.com/your-username/your-repository-name
```

---

## 🏆 Challenge Progress

**Day 14 of 50 — Completed ✅**

### Dynamic DOM Rendering

**Data → JavaScript → forEach Loop → Template Literal → DOM → User Interface**

---

## 📜 License

This project was created for educational and learning purposes as part of the **50 Days Web Development Challenge**.
