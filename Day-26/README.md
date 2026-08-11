# 🚀 Day 26: Asynchronous JavaScript & External APIs

## 📌 Project: Community Contributor Lookup

As part of the **50 Days Web Development Challenge with Synexus**, Day 26 focuses on asynchronous JavaScript and working with external REST APIs.

In this project, I built a **Community Contributor Lookup** tool that allows users to search for a GitHub username and view their real-time GitHub profile information.

Instead of hardcoding developer information, the application communicates directly with the **GitHub REST API** using JavaScript's native `fetch()` API.

---

## 🎯 Objective

The main objective of this project was to understand how modern JavaScript handles operations that take an unknown amount of time, such as API requests.

The project demonstrates:

* Asynchronous JavaScript
* Promises
* `async/await`
* `fetch()` API
* REST API integration
* JSON parsing
* HTTP status validation
* `try/catch` error handling
* Dynamic DOM manipulation
* Loading states

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* GitHub REST API
* Async/Await
* Fetch API

---

## ✨ Features

### 🔍 GitHub User Search

Users can enter any valid GitHub username and retrieve their profile information.

### 👤 Developer Profile

The application displays:

* Profile picture
* Developer name
* GitHub username
* Bio
* Followers
* Following
* Public repositories
* Link to GitHub profile

### ⏳ Loading State

While the API request is being processed, the application displays a loading indicator.

### ⚠️ Error Handling

The application handles:

* Empty username input
* Non-existent GitHub users
* HTTP errors
* Network/API failures

---

## 🔄 Application Flow

```text
User enters GitHub username
          ↓
      Click Lookup
          ↓
 getDeveloperProfile()
          ↓
     fetch() API
          ↓
     GitHub Server
          ↓
     response.ok?
       ↙      ↘
     NO        YES
      ↓         ↓
  Error      JSON Data
      ↓         ↓
   catch()   Render UI
```

---

## 🧠 Key JavaScript Concepts

### Async Function

The GitHub API function is declared using `async`:

```javascript
async getDeveloperProfile(username) {
    // asynchronous operations
}
```

### Fetch API

The application requests the GitHub profile using:

```javascript
const response = await fetch(
    `https://api.github.com/users/${username}`
);
```

### JSON Parsing

The API response is converted into a JavaScript object:

```javascript
const data = await response.json();
```

### HTTP Error Validation

A `404` response does not automatically cause `fetch()` to throw an error, so the application checks:

```javascript
if (!response.ok) {
    throw new Error("GitHub user not found.");
}
```

### Try/Catch

Errors are handled gracefully:

```javascript
try {
    // API request
} catch (error) {
    // Error handling
}
```

---

## 📂 Project Structure

```text
Day-26/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open the project in VS Code.
3. Install/use the **Live Server** extension.
4. Open `index.html` using Live Server.
5. Enter a GitHub username.
6. Click **Lookup**.
7. View the developer's real-time GitHub profile.

---

## 🧪 Testing

Try these usernames:

```text
octocat
torvalds
github
```

You can also enter an invalid username to test the error-handling mechanism.

---

## 📚 Learning Outcome

This project helped me understand how frontend applications communicate with external services.

I learned how to:

* Work with REST APIs
* Handle asynchronous operations
* Use `async/await`
* Work with JavaScript Promises
* Parse JSON responses
* Validate HTTP responses
* Handle network failures
* Dynamically update the DOM
* Build more resilient frontend applications

---

## 🔮 Future Improvements

Possible improvements include:

* GitHub repository search
* Repository cards
* Pagination
* GitHub contribution statistics
* Search history using LocalStorage
* Debounced username search
* GitHub organization lookup
* Dark/light theme integration

---

## 👩‍💻 Challenge

**50 Days Web Development Challenge**

**Day:** 26/50
**Phase:** 3 – APIs & External Data
**Focus:** Asynchronous JavaScript & External APIs

---

## ⭐ Conclusion

Day 26 was an important step toward building applications that interact with real-world data.

Instead of working only with static information, this project connects the frontend to an external API and demonstrates how modern JavaScript handles asynchronous operations and failures.

> "Standard, not a trend. The Logic, not a language."

---

### 🔗 Source Code

Add your GitHub repository link here:

`YOUR_GITHUB_REPOSITORY_LINK`
