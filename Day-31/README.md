# 🗓️ Day 31: Data Scaling – Pagination & Infinite Scroll

## 🚀 Project Overview

On Day 31 of the 50 Days Web Development Challenge, I worked on **Data Scaling** by building an **Infinite Scroll Feed** using Vanilla JavaScript.

Instead of loading a large amount of data at once, the application fetches data in smaller chunks using **API pagination**. When the user scrolls near the bottom of the page, the next set of posts is automatically fetched and displayed.

---

## 🎯 Objective

The goal of this project was to understand how modern web applications efficiently handle large amounts of data using:

* API Pagination
* Infinite Scrolling
* Fetch API
* Intersection Observer
* Asynchronous JavaScript
* State Management
* Loading Locks
* Dynamic DOM Rendering

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES8+)
* Fetch API
* JSONPlaceholder API
* Intersection Observer API

---

## ⚙️ How It Works

The application loads **10 posts at a time**.

### Initial Load

```text
Page 1
↓
10 Posts
```

### User Scrolls

```text
Sentinel becomes visible
↓
Intersection Observer detects it
↓
Page number increases
↓
Next 10 posts are fetched
↓
Posts are appended to the feed
```

This continues automatically until there are no more posts.

---

## 🔢 Pagination

The API request uses `_page` and `_limit` parameters:

```javascript
https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}
```

Where:

```javascript
let currentPage = 1;
const limit = 10;
```

For example:

```text
Page 1 → Posts 1–10
Page 2 → Posts 11–20
Page 3 → Posts 21–30
```

---

## 🔐 State Locking

An `isLoading` variable is used to prevent multiple API requests from happening simultaneously.

```javascript
if (isLoading || !hasMoreData) {
    return;
}

isLoading = true;
```

After the request finishes:

```javascript
finally {
    isLoading = false;
}
```

This prevents duplicate requests and improves application reliability.

---

## 👀 Intersection Observer

The `IntersectionObserver` watches the sentinel element at the bottom of the page.

```javascript
observer.observe(scrollSentinel);
```

When the sentinel becomes visible:

```javascript
if (entry.isIntersecting) {
    currentPage++;
    fetchNextPage();
}
```

The next page is automatically loaded.

---

## ➕ Dynamic DOM Rendering

New posts are appended instead of replacing existing posts.

```javascript
dataFeed.innerHTML += `
    <article class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </article>
`;
```

This ensures that previously loaded posts remain visible.

---

## 🏁 End of Data

The application also checks whether the API returns an empty array.

```javascript
if (data.length === 0) {
    hasMoreData = false;
    scrollSentinel.textContent = "You've reached the end!";
    observer.disconnect();
}
```

Once all posts are loaded, the observer is disconnected.

---

## 📂 Project Structure

```text
Day-31-Infinite-Scroll/
│
├── index.html
├── style.css
└── script.js
```

---

## 📚 Key Learnings

Through this project, I learned:

1. How API pagination works.
2. How to fetch data page by page.
3. How Infinite Scroll works.
4. How to use the Intersection Observer API.
5. How to prevent duplicate API requests using state locks.
6. How to append dynamic content without overwriting existing data.
7. How to handle the end of an API dataset.
8. How asynchronous JavaScript works with real API requests.

---

## 🌐 API Used

**JSONPlaceholder**

Used the `/posts` endpoint to simulate a real-world paginated API.

---

## 🚀 Future Improvements

Possible improvements include:

* Add a proper animated loading spinner.
* Add error retry functionality.
* Add search and filtering.
* Add skeleton loading cards.
* Add post details.
* Add better accessibility.
* Add caching for previously loaded pages.

---

## 👩‍💻 Challenge

**50 Days Web Development Challenge – Day 31**

Built using **Vanilla JavaScript without external frontend libraries**.

#50DaysDev #50DaysWeb #JavaScript #API #Pagination #InfiniteScroll #WebDevelopment #FrontendDevelopment #IntersectionObserver
