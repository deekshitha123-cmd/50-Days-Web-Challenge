# Day 20 – Stateful UI Architecture & CRUD Task Tracker

## 🚀 Project Overview

This project was built as part of the **50 Days Web Development Challenge by Synexus**.

On Day 20, I developed a fully interactive **Task Tracker Dashboard** using **HTML, CSS, and Vanilla JavaScript**.

The application follows a **state-driven architecture**, where the `taskState` array acts as the single source of truth. Instead of directly changing the HTML, the application updates the JavaScript state first and then re-renders the UI to keep the data and interface synchronized.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Browser LocalStorage

---

## ✨ Features

* ➕ Add new tasks
* ⌨️ Add tasks using the Enter key
* 📋 Dynamically display all tasks
* ✅ Mark tasks as completed
* 🔄 Change completed tasks back to incomplete
* 🗑️ Delete tasks
* 📊 Display Total, Completed, and Remaining task counts
* ⚡ Use Event Delegation for dynamic task interactions
* 💾 Save tasks using LocalStorage
* 🔄 Restore tasks after refreshing the page
* 📱 Responsive user interface

---

## 🧠 Core Concepts Implemented

* State Management
* State-Driven UI Rendering
* CRUD Operations
* JavaScript Arrays and Objects
* `.push()`
* `.forEach()`
* `.find()`
* `.filter()`
* Event Delegation
* Dynamic DOM Rendering
* LocalStorage
* `JSON.stringify()`
* `JSON.parse()`

---

## 🔄 Application Data Flow

```text
User Action
     ↓
Update taskState
     ↓
Call renderTasks()
     ↓
UI Re-renders
     ↓
Save Updated State
     ↓
LocalStorage
```

The `taskState` array controls what appears on the screen.

Whenever a user adds, completes, or deletes a task, the application updates the state first and then calls `renderTasks()` to synchronize the UI.

---

## 📋 CRUD Operations

| CRUD Operation | Functionality          | JavaScript Method |
| -------------- | ---------------------- | ----------------- |
| **Create**     | Add a new task         | `.push()`         |
| **Read**       | Display tasks          | `.forEach()`      |
| **Update**     | Toggle task completion | `.find()`         |
| **Delete**     | Remove a task          | `.filter()`       |

---

## ⚡ Event Delegation

Instead of attaching separate event listeners to every task and delete button, the application uses Event Delegation.

A single event listener is attached to the parent task list:

```javascript
taskList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-btn");

  if (deleteButton) {
    // Delete the selected task
  }
});
```

This improves performance and allows dynamically created task elements to work without adding new event listeners.

---

## 💾 LocalStorage Persistence

The task state is saved using:

```javascript
localStorage.setItem(
  "taskState",
  JSON.stringify(taskState)
);
```

When the application loads, saved tasks are restored using:

```javascript
JSON.parse(
  localStorage.getItem("taskState")
);
```

This allows tasks to remain available even after refreshing or reopening the browser.

---

## 📂 Project Structure

```text
Day-20-Stateful-Task-Tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🎯 Learning Outcomes

Through this project, I learned how to:

* Build a complete CRUD application using Vanilla JavaScript
* Manage application data using a central state array
* Keep the UI synchronized with JavaScript state
* Avoid using the DOM as the primary data source
* Use `.push()`, `.find()`, and `.filter()` effectively
* Implement Event Delegation
* Create dynamic UI elements
* Persist application data using LocalStorage
* Understand the foundation of state-driven frontend frameworks

---

## 👩‍💻 Author

**Deekshitha HS**

---

## 🚀 Challenge

**Day 20/50 – Web Development Challenge by Synexus**
