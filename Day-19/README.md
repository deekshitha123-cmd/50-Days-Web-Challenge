# Day 19 – Event Delegation & Dynamic Modals

## 🚀 Project Overview

This project is part of the **50 Days Web Development Challenge by Synexus**.

On Day 19, I implemented **Event Delegation** and **Event Bubbling** to create a high-performance dynamic modal system for the Initiatives Gallery.

Instead of attaching a separate event listener to every **View Details** button, the application uses one event listener on the parent project grid.

This approach supports dynamically generated project cards and improves memory efficiency.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript

---

## 🧠 Concepts Implemented

* Event Bubbling
* Event Delegation
* `event.target`
* `event.currentTarget`
* `Element.closest()`
* Dynamic DOM Rendering
* Data Attributes
* Modal UI Architecture
* Search and Filtering
* Keyboard Events

---

## ✨ Features

* Dynamically generated project cards
* Real-time project search
* View Details button on every project
* Dynamic project modal
* One event listener for all project buttons
* Close modal using the X button
* Close modal by clicking the overlay
* Close modal using the Escape key
* Responsive design

---

## ⚡ Event Delegation

Instead of attaching an event listener to every button:

```javascript
buttons.forEach((button) => {
  button.addEventListener("click", openModal);
});
```

the application attaches one listener to the parent container:

```javascript
gridContainer.addEventListener(
  "click",
  (event) => {

    const button =
      event.target.closest(
        ".view-btn"
      );

  }
);
```

The click event bubbles from the clicked element to its parent container.

This allows one event listener to handle all existing and dynamically generated buttons.

---

## 📂 Project Structure

```text
Day-19-Event-Delegation/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🎯 Learning Outcome

Through this project, I learned how to:

* Use Event Bubbling
* Implement Event Delegation
* Work with `event.target`
* Use `closest()` for reliable element selection
* Build a reusable modal system
* Handle dynamically generated DOM elements
* Reduce unnecessary event listeners

---

## 👩‍💻 Author

Deekshitha HS

---

## 🔗 Challenge

Day 19 of the 50 Days Web Development Challenge by Synexus.
