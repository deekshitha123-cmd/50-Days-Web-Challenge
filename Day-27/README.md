# 🚀 Day 27: API Array Iteration & Dynamic Feeds

## 📌 Project: GitHub Dynamic Repository Feed

As part of the **50 Days Web Development Challenge with Synexus**, Day 27 extends the Community Contributor Lookup project from Day 26.

Previously, the application fetched a single GitHub developer profile. Today, I extended the application to fetch the developer's **six most recently updated public repositories** and dynamically display them as project cards.

---

## 🎯 Objective

The main objective of Day 27 was to understand how frontend applications work with **JSON arrays received from external APIs**.

The project demonstrates:

* REST API integration
* API endpoint parameters
* JSON arrays
* `async/await`
* `fetch()`
* `Array.forEach()`
* Dynamic DOM rendering
* DOM clearing
* Empty states
* Logical OR (`||`) fallback values
* Error handling

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* GitHub REST API
* Async/Await
* Fetch API
* CSS Grid

---

## ✨ Features

### 🔍 GitHub Developer Search

Users can enter a GitHub username and retrieve their real-time profile.

### 👤 Developer Profile

The application displays:

* Profile picture
* Name
* Username
* Bio
* Followers
* Following
* Public repositories
* GitHub profile link

### 📂 Dynamic Repository Feed

The application fetches the developer's **6 most recently updated repositories**.

Each repository card displays:

* Repository name
* Description
* Stars
* Forks
* Primary programming language
* Repository link

### 🧹 Dynamic DOM Clearing

Previous search results are removed before displaying new results.

```javascript
reposGrid.innerHTML = "";
```

This prevents multiple searches from stacking old repository cards.

### 📭 Empty State

If a developer has no public repositories, the application displays:

```text
No public repositories found.
```

### 🛡️ Null Fallback

Some repositories may not have a description.

Instead of displaying:

```text
null
```

the application displays:

```text
No description provided.
```

using:

```javascript
repo.description || "No description provided."
```

---

## 🔗 API Endpoint

The project uses the GitHub REST API:

```text
https://api.github.com/users/{username}/repos?sort=updated&per_page=6
```

### Query Parameters

`sort=updated`

Sorts repositories based on their latest updates.

`per_page=6`

Limits the response to six repositories.

---

## 🔄 Application Flow

```text
User enters GitHub username
          ↓
Click Lookup
          ↓
Fetch developer profile
          ↓
Display profile
          ↓
Fetch repositories
          ↓
Receive JSON array
          ↓
Clear repository grid
          ↓
Check for empty array
          ↓
data.forEach()
          ↓
Create repository cards
          ↓
Display cards using CSS Grid
```

---

## 🧠 Key JavaScript Concepts

### Fetching Repositories

```javascript
const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
);
```

### Parsing the JSON Array

```javascript
const data = await response.json();
```

### Clearing Previous Results

```javascript
reposGrid.innerHTML = "";
```

### Empty State

```javascript
if (data.length === 0) {

    reposGrid.innerHTML = `
        <p>No public repositories found.</p>
    `;

    return;
}
```

### Array Iteration

```javascript
data.forEach((repo) => {

    reposGrid.innerHTML += `
        <article class="repo-card">
            <h3>${repo.name}</h3>
            <p>
                ${repo.description || "No description provided."}
            </p>
        </article>
    `;

});
```

---

## 📂 Project Structure

```text
Day-27/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🚀 How to Run

1. Clone the repository.
2. Open the project in VS Code.
3. Open the project using Live Server.
4. Enter a GitHub username.
5. Click **Lookup**.
6. View the developer profile.
7. Scroll down to see their latest repositories.

---

## 🧪 Testing

Try searching for:

```text
octocat
```

```text
torvalds
```

```text
github
```

Also try an invalid username to test the application's error handling.

---

## 📚 Learning Outcomes

Through this project, I learned how to:

* Fetch arrays from REST APIs
* Work with API query parameters
* Iterate through JSON arrays
* Use `forEach()`
* Dynamically generate HTML
* Clear previous DOM content
* Handle empty API responses
* Handle `null` values
* Build reusable repository cards
* Combine multiple asynchronous API requests

---

## 🔮 Future Improvements

Possible improvements include:

* Repository language filters
* Repository search
* Pagination
* Sort by stars
* Repository statistics
* GitHub contribution charts
* Search history
* Repository technology tags
* Infinite scrolling

---

## 👩‍💻 Challenge Information

**Challenge:** 50 Days Web Development Challenge
**Day:** 27/50
**Phase:** 3 – APIs & External Data
**Focus:** API Array Iteration & Dynamic Feeds

---

## ⭐ Conclusion

Day 27 helped me move from fetching a **single API object** to working with **dynamic arrays of API data**.

I learned how to control API responses using query parameters, iterate through JSON arrays, dynamically generate UI components, and handle important edge cases such as empty repositories and missing descriptions.

> "Standard engineering accounts for the unknowns."
