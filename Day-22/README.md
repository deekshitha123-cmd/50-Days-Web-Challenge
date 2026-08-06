# 🚀 Day 22 – Advanced DOM & Intersection Observer (Scroll Animations)

## 📌 Overview

This project is part of my **50 Days Web Development Challenge** with **Synexus**.

On Day 22, I implemented high-performance scroll animations using the **Intersection Observer API**. Instead of relying on traditional `scroll` event listeners that execute continuously and impact performance, this project uses the browser's native Intersection Observer to detect when elements enter the viewport and trigger smooth CSS animations.

---

## ✨ Features

* Smooth fade-in animation on scroll
* Slide-up effect using CSS transforms
* High-performance viewport detection
* Intersection Observer API implementation
* Responsive card layout
* Sticky navigation bar
* Contact section
* Clean and reusable JavaScript
* No external animation libraries

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Intersection Observer API

---

## 📚 Concepts Learned

* Advanced DOM Manipulation
* Intersection Observer API
* Viewport Tracking
* CSS Transitions
* CSS Transform
* JavaScript Class Manipulation
* Performance Optimization
* Responsive Web Design

---

## ⚙️ How It Works

1. All elements that should animate are assigned the `.hidden` class.
2. An `IntersectionObserver` monitors these elements.
3. When an element enters the viewport, the observer adds the `.show` class.
4. CSS transitions animate the element smoothly from hidden to visible.
5. Once the animation completes, the observer stops watching that element for improved performance.

---

## 🎯 Key Learnings

* Replaced expensive `window.scroll` event listeners with the native Intersection Observer API.
* Improved UI performance by allowing the browser to optimize viewport detection.
* Learned how JavaScript and CSS work together to create modern animations.
* Built reusable animation logic without using third-party libraries.

---

## 📂 Project Structure

```
Project/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 🚀 Future Improvements

* Add staggered animations dynamically.
* Animate elements from different directions.
* Add image lazy loading using the Intersection Observer API.
* Create reusable animation utilities.
* Add dark mode compatibility.

---

## 📸 Preview

*(Add screenshots or a screen recording of the page here.)*

---

## 🔗 GitHub Repository

Add your GitHub repository link here.

---

## 🙌 Challenge

**50 Days Web Development Challenge** with **Synexus**

Day 22 focused on building performant, modern scroll animations using native browser APIs and clean JavaScript.

---

### ⭐ If you found this project helpful, consider giving it a Star!
