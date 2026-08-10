# 🚀 Day 25 – Phase 2 Capstone: Core Engine Integration

## 📌 Overview

Day 25 marks the completion of **Phase 2** of the 50-Day Web Development Challenge with **Synexus**.

The goal of this capstone was to refactor the JavaScript functionality developed throughout the previous days into a centralized **Application Engine**.

Instead of having independent scripts running globally, the application now uses a structured initialization architecture where features are loaded only when they are required.

---

## 🎯 Problem Statement

As the application became more complex, different JavaScript features such as:

* SPA routing
* Dark mode
* Mobile navigation
* Intersection Observer
* Drag and Drop
* LocalStorage

could potentially conflict with each other or attempt to access DOM elements that do not exist on the current page.

Day 25 focuses on solving this problem through **centralized application initialization and route-aware feature management**.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript ES6+
* DOM API
* History API
* LocalStorage API
* Intersection Observer API
* HTML5 Drag and Drop API

---

## ✨ Features

### 🧭 Single Page Application Router

Implemented a client-side router using the JavaScript History API.

Supported routes:

```text
/
 /team
 /projects
 /about
```

The router dynamically renders views without refreshing the browser.

---

### 🧠 Centralized Application Engine

Created a central:

```javascript
initApp()
```

function that controls application startup.

Global functionality is initialized only once.

---

### 🌙 Dark Mode

Users can switch between light and dark themes.

The selected theme is stored using:

```javascript
localStorage
```

so the preference remains after refreshing the page.

---

### 📱 Mobile Navigation

Implemented a responsive mobile navigation menu using Vanilla JavaScript.

The menu can be opened and closed without requiring any external library.

---

### 👀 Intersection Observer

The Intersection Observer API is used to animate elements when they enter the viewport.

This avoids continuously listening to the scroll event and improves performance.

---

### 📋 Kanban Board

A functional Kanban board was integrated into the Team page.

The board contains:

```text
📝 To Do
⚙️ In Progress
✅ Done
```

Tasks can be dragged between columns using the native HTML5 Drag and Drop API.

---

### 💾 Kanban LocalStorage Persistence

Kanban state is stored in:

```javascript
localStorage
```

Whenever a task is moved between columns, the updated state is saved.

The board restores the saved state when the Team page is loaded again.

---

## 🏗️ Application Architecture

The application follows a centralized initialization model:

```text
                    initApp()
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
      Theme Toggle  Mobile Menu  Navigation
                                      │
                                      ↓
                                   router()
                                      │
                ┌─────────────────────┼──────────────────┐
                ↓                     ↓                  ↓
               Home                 Team             Projects
                                      │                  │
                              ┌───────┴───────┐          │
                              ↓               ↓          ↓
                         Kanban Board    Observer    Observer
                              │
                              ↓
                         LocalStorage
```

---

## 📂 Project Structure

```text
Day-25/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🔄 Route-Based Initialization

The router checks the active path and initializes only the features required for that page.

Example:

```javascript
if (path === "/team") {
    initScrollObserver();
    initKanbanBoard();
}

if (path === "/projects") {
    initScrollObserver();
}

if (path === "/about") {
    initScrollObserver();
}
```

This prevents JavaScript from attempting to access elements that are not present in the current DOM.

---

## 🛡️ Safety Checks

The application uses defensive checks before accessing DOM elements.

Example:

```javascript
const button =
    document.getElementById("add-task-btn");

if (!button) {
    return;
}
```

This prevents errors such as:

```text
Cannot read properties of null
```

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Open the project

Open the project folder in VS Code.

### 3. Run using Live Server

Open:

```text
index.html
```

using the VS Code Live Server extension.

### 4. Test the application

Test the following:

```text
Home
Team
Projects
About
Dark Mode
Mobile Menu
Kanban Drag & Drop
LocalStorage Persistence
Browser Back / Forward
```

---

## 🧪 Expected Result

The application should:

* Navigate between pages without refreshing.
* Support browser Back and Forward buttons.
* Preserve the selected dark/light theme.
* Display the mobile navigation correctly.
* Animate elements when they enter the viewport.
* Allow Kanban tasks to be dragged between columns.
* Preserve Kanban tasks after refreshing the page.
* Avoid JavaScript errors when route-specific elements do not exist.

---

## 📚 Key Learnings

Through this capstone, I learned:

1. How to structure a Vanilla JavaScript application.
2. How SPA routing works internally.
3. How the History API manages browser navigation.
4. Why DOM lifecycle management is important.
5. How to separate global and local features.
6. How to prevent duplicate event listeners.
7. How LocalStorage can persist application state.
8. How Drag and Drop can be integrated into an SPA.
9. How Intersection Observer improves scroll-based interactions.
10. How refactoring improves maintainability and scalability.

---

## 🏆 Phase 2 Completed

**Day 25 / 50 – Phase 2 Capstone completed! 🎉**

This project represents the transition from writing individual JavaScript scripts to designing a structured client-side application architecture.

---

## 👩‍💻 Author

**Deekshitha HS**

Bachelor of Engineering – Information Science & Engineering

---

## 🔗 Links

GitHub Repository:

```text
YOUR_GITHUB_REPOSITORY_LINK
```

LinkedIn:

```text
YOUR_LINKEDIN_PROFILE_LINK
```

---

## ⭐ Acknowledgement

Part of the **50-Day Web Development Challenge with Synexus**.
