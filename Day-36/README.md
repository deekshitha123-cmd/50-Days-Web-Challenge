# 🔗 Day 36: Deep Linking & URL Search Parameters

## 📌 Overview

On Day 36 of the 50 Days Web Development Challenge, I focused on **Deep Linking and URL Search Parameters**.

The goal was to synchronize the application's UI state with the browser's URL using the native `URLSearchParams` API and the History API.

Now, when a user searches for a GitHub profile, the username is stored in the URL. If the URL is refreshed, copied, or opened in another tab, the application reads the username from the URL and automatically restores the previous state.

---

## 🎯 Problem Statement

In a Single Page Application, application state is often stored only in JavaScript memory.

This creates a problem:

* Refreshing the page can reset the state.
* Sharing the current page state becomes difficult.
* Users cannot easily create links to specific searches.

This project solves the problem by creating a two-way connection between:

```text
URL ↔ JavaScript State ↔ UI
```

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* ES6 Modules
* Fetch API
* URLSearchParams API
* Browser History API
* GitHub REST API

---

## ✨ Features

### 🔍 GitHub User Search

Users can search for a GitHub username and retrieve profile information from the GitHub API.

### 🔗 URL Synchronization

After a successful search, the username is added to the URL:

```text
?user=bradtraversy
```

### 🔄 State Hydration

When the application loads, it checks the current URL for a `user` parameter.

If one exists, the application automatically fetches and displays that profile.

### ⚡ No Page Reload

The URL is updated using:

```javascript
window.history.pushState({}, "", url);
```

This changes the browser address bar without reloading the page.

### 🧹 Clean URL

When the search input is cleared, the `user` parameter is removed instead of leaving:

```text
?user=
```

---

## 🔄 Application Flow

```text
User enters GitHub username
            ↓
        Search
            ↓
      Fetch GitHub API
            ↓
      Successful response
            ↓
       Render profile
            ↓
     Update URL using
     URLSearchParams
            ↓
      ?user=username
```

When the page loads:

```text
Page Load
   ↓
Read window.location.search
   ↓
URLSearchParams
   ↓
Get "user" parameter
   ↓
Username exists?
   ↓
Yes
   ↓
Fetch GitHub profile
   ↓
Render profile
```

---

## 📂 Project Structure

```text
Day-36-URL-Search-Parameters/
│
├── index.html
├── style.css
├── api.js
└── main.js
```

---

## 🔑 Important JavaScript Concepts

### 1. Reading URL Parameters

The current query string is accessed using:

```javascript
const params = new URLSearchParams(
    window.location.search
);
```

The username is then retrieved with:

```javascript
const username = params.get("user");
```

---

### 2. Setting URL Parameters

After a successful search:

```javascript
const url = new URL(window.location);

url.searchParams.set("user", username);

window.history.pushState({}, "", url);
```

This produces a URL such as:

```text
https://example.com/?user=bradtraversy
```

---

### 3. Removing URL Parameters

When the search is cleared:

```javascript
const url = new URL(window.location);

url.searchParams.delete("user");

window.history.pushState({}, "", url);
```

The URL returns to:

```text
https://example.com/
```

---

## 🧪 How to Run

### Step 1

Open the project in VS Code.

### Step 2

Run the project using **Live Server**.

### Step 3

Search for a GitHub username such as:

```text
bradtraversy
```

### Step 4

Observe the browser URL.

It should contain:

```text
?user=bradtraversy
```

### Step 5

Refresh the page.

The same GitHub profile should automatically load again.

---

## 🧪 Test Cases

### ✅ Test Case 1: Search a User

Input:

```text
bradtraversy
```

Expected URL:

```text
?user=bradtraversy
```

Expected result:

The GitHub profile is displayed.

---

### ✅ Test Case 2: Refresh the Page

URL:

```text
?user=bradtraversy
```

Expected result:

The profile automatically loads after refresh.

---

### ✅ Test Case 3: Open a Deep Link

Open:

```text
http://127.0.0.1:5500/?user=bradtraversy
```

Expected result:

The application automatically searches for `bradtraversy`.

---

### ✅ Test Case 4: Clear Search

Clear the search input and submit.

Expected URL:

```text
http://127.0.0.1:5500/
```

The `user` query parameter should be removed.

---

### ❌ Test Case 5: Invalid Username

Search for a username that does not exist.

Expected result:

```text
User not found.
```

---

## 🧠 Key Learnings

Through this task, I learned:

* How query strings work.
* How to use the `URLSearchParams` API.
* How to read parameters using `get()`.
* How to modify parameters using `set()`.
* How to remove parameters using `delete()`.
* How `window.history.pushState()` updates the URL without a reload.
* How to hydrate application state from the URL.
* How to create shareable deep links in an SPA.

---

## 🔗 Deep Linking

A deep link allows a user to directly access a specific application state.

For example:

```text
http://127.0.0.1:5500/?user=bradtraversy
```

Instead of opening the application in its default state, the URL tells the application exactly which profile should be displayed.

This makes the application more **shareable and user-friendly**.

---

## ⚠️ Common Pitfalls

### Incorrect URL Construction

Avoid manually concatenating query strings:

```javascript
window.location.href + "?user=" + username;
```

This can result in malformed URLs when parameters already exist.

Instead, use:

```javascript
url.searchParams.set("user", username);
```

### Forgetting `pushState()`

Updating a `URL` object alone does not change the browser's address bar.

You need:

```javascript
window.history.pushState({}, "", url);
```

### Forgetting State Hydration

Updating the URL is only half the solution.

The application must also read the URL when it loads:

```javascript
const params = new URLSearchParams(window.location.search);

const username = params.get("user");

if (username) {
    handleSearch(username);
}
```

---

## 🚀 Future Improvements

* Add multiple URL parameters such as language, repository, or sort order.
* Add browser Back/Forward navigation support using `popstate`.
* Create deep links for repository searches.
* Persist additional application filters in the URL.
* Add loading states and improved error handling.
* Integrate the URL state with a larger SPA routing architecture.

---

## 📚 Resources

* MDN Web Docs — URLSearchParams
* MDN Web Docs — URL API
* MDN Web Docs — History API
* GitHub REST API Documentation

---

## 👩‍💻 50 Days Web Development Challenge

**Day 36/50 — Deep Linking & URL Search Parameters**

Built with ❤️ using **Vanilla JavaScript**.

#50daysdev #50daysweb #JavaScript #WebArchitecture #DeepLinking #URLSearchParams #FrontendEngineering #CodingChallenge
