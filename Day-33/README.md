# 🚀 Day 33: Network Optimization — Client-Side Caching

## 📌 Overview

As part of my **50 Days Web Development Challenge**, Day 33 focused on improving application performance using **Client-Side Data Caching**.

Every API request takes time and consumes network resources. Instead of requesting the same GitHub user data repeatedly, I implemented an in-memory cache using the JavaScript **ES6 `Map` object**.

The application now checks the cache before making an API request. If the requested user already exists in the cache, the stored data is returned instantly.

---

## 🎯 Objectives

- Understand client-side caching.
- Learn how the JavaScript `Map` object works.
- Reduce unnecessary API requests.
- Improve application response time.
- Understand memoization and in-memory storage.
- Handle API errors without caching failed requests.
- Practice modular JavaScript architecture.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript ES6
- ES6 Modules
- GitHub REST API
- `Map`
- `fetch()`
- Async/Await
- In-Memory Caching

---

## 📂 Project Structure

```text
Day-33-Client-Side-Caching/
│
├── index.html
├── style.css
├── app.js
├── api.js
└── utils.js