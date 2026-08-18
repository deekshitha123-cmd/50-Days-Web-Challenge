# 🗓️ Day 32: Architecture & Code Splitting – ES6 Modules

## 🚀 Project Overview

Today, I focused on improving JavaScript code architecture by breaking a large monolithic JavaScript file into smaller, reusable modules using **Native ES6 Modules**.

Instead of keeping API logic, utility functions, DOM manipulation, and event handling in one file, I separated them into dedicated files.

This makes the application cleaner, easier to maintain, reusable, and scalable.

---

## 🎯 Objectives

* Understand ES6 Modules
* Use `import` and `export`
* Separate application logic into multiple files
* Implement Separation of Concerns
* Understand module scope
* Improve code maintainability
* Use native browser modules without a bundler

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript ES6
* Fetch API
* ES6 Modules
* Git & GitHub
* VS Code
* Live Server

---

## 📂 Project Structure

```text
Day-32/
│
├── index.html
├── style.css
├── main.js
├── api.js
└── utils.js
```

### `main.js`

Contains:

* DOM element selection
* Event listeners
* UI rendering
* Main application logic
* Imports functions from other modules

### `api.js`

Contains:

* GitHub API functions
* User profile fetching
* Repository fetching

### `utils.js`

Contains:

* Reusable utility functions
* Debounce functionality

---

## 🔑 Key Concepts

### Export

Functions can be shared with other modules using `export`.

```javascript
export function debounce(callback, delay) {
    // function logic
}
```

### Import

Exported functions can be used in another file using `import`.

```javascript
import { debounce } from "./utils.js";
```

Multiple functions can also be imported:

```javascript
import {
    fetchContributor,
    fetchRepositories
} from "./api.js";
```

---

## 🌐 Application Features

The application allows users to:

* Search for a GitHub user
* Fetch GitHub profile information
* Display profile details
* Fetch recently updated repositories
* Display repository information
* Handle invalid usernames
* Display loading states
* Use debounced search functionality

---

## 🧠 What I Learned

### 1. Separation of Concerns

Different responsibilities should be handled by different modules.

### 2. Code Reusability

Reusable functions can be exported and used wherever required.

### 3. Module Scope

Variables and functions inside modules do not automatically become global variables.

### 4. Native Browser Modules

Modern browsers can directly support ES6 modules without requiring tools such as Webpack.

### 5. Maintainable Architecture

Breaking a large application into smaller files makes the code easier to understand, debug, and scale.

---

## ⚠️ Important

ES6 modules should be run through a local server.

Opening the HTML file directly using:

```text
file://
```

may cause module/CORS errors.

Use **VS Code Live Server** or another local development server.

---

## 🚀 How to Run

1. Clone or download the project.
2. Open the project in VS Code.
3. Install the Live Server extension.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. Search for a GitHub username.

Example:

```text
octocat
```

---

## 📚 Resources

* MDN Web Docs – JavaScript Modules
* V8 JavaScript Engine – JavaScript Modules

---

## 📌 Challenge

**50 Days Web Development Challenge**

**Day 32/50 – Architecture & Code Splitting**

#JavaScript #ES6 #WebDevelopment #CleanCode #FrontendDevelopment #50DaysDev
