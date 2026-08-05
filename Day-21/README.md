# 🚀 Day 21: Performance Engineering — Debouncing & Closures

## 📌 Project Overview

This project demonstrates how to improve the performance of a real-time search feature using **Debouncing** and **JavaScript Closures**.

In a normal search feature, the search function runs every time the user presses a key. While this may work well with a small amount of local data, it can create unnecessary processing and excessive API requests when connected to a database or external server.

To solve this problem, a custom debounce utility was created. The search function now waits for **300 milliseconds** after the user stops typing before executing.

## 🎯 Objectives

* Understand JavaScript Higher-Order Functions
* Learn how Closures preserve variables
* Use `setTimeout()` and `clearTimeout()`
* Reduce unnecessary function executions
* Optimize real-time search performance
* Prepare search functionality for future API integration
* Understand the difference between Debouncing and Throttling

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript

## ✨ Features

* Real-time technology search
* Custom debounce utility
* 300ms search delay
* Dynamic search results
* Case-insensitive searching
* No-results message
* Responsive user interface
* Optimized event handling
* Optional scroll throttling

## 🧠 How Debouncing Works

The debounce function delays the execution of a function until the user stops performing an action for a specified amount of time.

When the user types:

1. A timer starts.
2. If the user types another character before the delay ends, the previous timer is cancelled.
3. A new timer starts.
4. When the user stops typing for 300ms, the search function executes.

This prevents the search logic from running on every keystroke.

## 💻 Debounce Utility

```javascript
function debounce(func, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

## 🔍 Search Optimization

```javascript
const optimizedSearch = debounce(
  searchTechnology,
  300
);

searchInput.addEventListener(
  "input",
  optimizedSearch
);
```

The optimized search function executes only after the user pauses typing for **300 milliseconds**.

## ⚡ Debouncing vs Throttling

| Debouncing                           | Throttling                                        |
| ------------------------------------ | ------------------------------------------------- |
| Waits until the user stops an action | Limits execution to once every specified interval |
| Best for search bars                 | Best for scrolling and resizing                   |
| Reduces unnecessary API requests     | Controls frequent event execution                 |
| Executes after a delay               | Executes at regular intervals                     |

## 📚 Key Concepts Learned

* Higher-Order Functions
* Closures
* Lexical Scope
* Function References
* Rest Parameters (`...args`)
* `setTimeout()`
* `clearTimeout()`
* `func.apply(this, args)`
* Debouncing
* Throttling
* Event Optimization
* Frontend Performance Engineering

## 📂 Project Structure

```text
Day-21-Performance-Engineering/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run

1. Clone the repository:

```bash
git clone <your-repository-link>
```

2. Open the project folder in Visual Studio Code.

3. Open `index.html`.

4. Run the project using the Live Server extension.

5. Type a technology name into the search bar.

6. Open the browser console to observe the debounced search execution.

## 🧪 Testing

Type a word quickly, such as:

```text
JavaScript
```

The search function will not execute after every keystroke. It will execute only after the user stops typing for approximately **300 milliseconds**.

## 🎓 Learning Outcome

This project demonstrates how JavaScript performance utilities can improve application scalability.

By implementing Debouncing, unnecessary function calls are reduced, which can help prevent excessive API requests and improve the performance of real-world applications.

> Good performance engineering is not only about making applications fast—it is also about designing systems that can scale efficiently.

## 🔗 Live Demo

[Add your deployed project link here]

## 💻 GitHub Repository

[Add your GitHub repository link here]

---

### 🌟 Day 21 of the 50 Days Web Development Challenge

Built as part of the **Synexus Web Development Challenge**.
