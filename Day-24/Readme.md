# 🚀 Day 24: Single Page Application (SPA) Router

A Single Page Application router built completely from scratch using **HTML, CSS, and Vanilla JavaScript**.

This project demonstrates how modern web applications can change views and URLs without performing a full browser page reload.

---

## 📌 Project Overview

Traditional websites reload the entire page whenever a user navigates to another URL.

Modern applications such as React and Vue applications use client-side routing to provide a smoother experience.

For Day 24 of the 50 Days Web Development Challenge, I built a simple SPA router using the native JavaScript History API.

The application:

* Intercepts navigation links
* Prevents the browser's default page reload
* Updates the URL using `history.pushState()`
* Detects the current route
* Dynamically renders the appropriate view
* Supports browser Back and Forward buttons
* Includes a custom 404 page

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* History API
* DOM Manipulation
* Event Delegation
* `pushState()`
* `popstate` event

---

## 📂 Project Structure

```text
day-24-spa-router/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ✨ Features

### 1. Single Page Application

The application uses a single HTML document and dynamically changes the content inside:

```html
<main id="app-root"></main>
```

---

### 2. Client-Side Routing

The router supports multiple routes:

```text
/
 /team
 /projects
 /about
```

An unknown route displays a custom:

```text
404 Page Not Found
```

---

### 3. History API

The application uses:

```javascript
window.history.pushState({}, "", href);
```

This changes the browser URL without reloading the page.

---

### 4. Event Delegation

Instead of attaching individual click listeners to every navigation link, the project listens for clicks on the document:

```javascript
document.addEventListener("click", (event) => {
    // navigation logic
});
```

This also works for dynamically generated navigation links.

---

### 5. Browser Navigation

The Back and Forward buttons are supported using:

```javascript
window.addEventListener("popstate", router);
```

---

### 6. Dynamic View Rendering

Each route has an associated HTML view:

```javascript
const views = {
    "/": "...",
    "/team": "...",
    "/projects": "...",
    "/about": "..."
};
```

The router injects the selected view into the DOM:

```javascript
appRoot.innerHTML = view;
```

---

## 🧠 Core Concepts Learned

### History API

The History API allows JavaScript applications to manipulate the browser's session history.

The main method used in this project is:

```javascript
history.pushState()
```

---

### `pushState()`

```javascript
window.history.pushState({}, "", "/team");
```

Changes the URL without causing a page reload.

---

### `popstate`

The `popstate` event is triggered when the active history entry changes, such as when the user uses the browser's Back or Forward button.

```javascript
window.addEventListener("popstate", router);
```

---

### Event Delegation

Event delegation allows a parent element to handle events from its child elements.

In this project:

```javascript
document.addEventListener("click", ...)
```

handles navigation clicks.

---

## 🔄 Application Flow

```text
User clicks navigation link
            ↓
Event Delegation
            ↓
event.preventDefault()
            ↓
Get href
            ↓
history.pushState()
            ↓
URL changes
            ↓
router()
            ↓
Check pathname
            ↓
Find matching view
            ↓
Update #app-root
            ↓
New UI rendered
```

---

## ⚠️ Important Note About Live Server

When using VS Code Live Server, the application should initially be opened from the root URL.

For example:

```text
http://localhost:5500/
```

Then navigate using the application's links.

If you manually enter:

```text
http://localhost:5500/team
```

the development server may return a 404 because it is looking for an actual `/team` file.

Production applications normally configure the server to redirect unknown routes back to `index.html`.

---

## 🧪 Routes to Test

| Route          | Page     |
| -------------- | -------- |
| `/`            | Home     |
| `/team`        | Team     |
| `/projects`    | Projects |
| `/about`       | About    |
| `/random-page` | 404      |

---

## 🎯 Learning Outcomes

Through this project, I learned:

* How Single Page Applications work internally
* How client-side routing works
* How to use the History API
* How `pushState()` changes URLs without reloads
* How the `popstate` event handles browser navigation
* How event delegation works with dynamic content
* How JavaScript can dynamically render different UI states
* Why routing is an important part of modern web applications

---

## 🚀 Future Improvements

Possible improvements include:

* Route parameters such as `/users/101`
* Nested routes
* Navigation loading states
* Active navigation indicators
* Authentication-based routes
* Lazy loading
* API-based pages
* Better server-side fallback configuration

---

## 👩‍💻 Challenge

**50 Days Web Development Challenge**

**Day:** 24/50

**Topic:** Single Page Application Architecture & Routing

**Built with:** Vanilla JavaScript

---

## 📚 Resources

* MDN Web Docs – History API
* MDN Web Docs – `pushState()`
* MDN Web Docs – `popstate`

---

⭐ If you found this project useful, feel free to explore the code and experiment with adding more routes.
