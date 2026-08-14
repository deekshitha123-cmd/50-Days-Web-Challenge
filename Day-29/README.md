# 🚀 Day 29: Two-Way Data Streams — POST Requests

## 📌 Project Overview

Day 29 of my 50 Days Web Development Challenge focused on understanding how websites can send data to external servers using HTTP `POST` requests.

In the previous days, I mainly worked with `GET` requests to retrieve data. Today, I extended the application by creating a **Community Initiative Proposal Form** that collects user input and sends it to an external API.

---

## 🎯 Objective

The main goal of this project was to understand how to:

- Create and handle HTML forms
- Prevent the default form submission behavior
- Extract user input using JavaScript
- Create JavaScript objects from form data
- Configure the `fetch()` API for `POST` requests
- Set HTTP request headers
- Convert JavaScript objects into JSON
- Send JSON data to an API
- Handle server responses
- Detect a `201 Created` response
- Provide user feedback
- Prevent duplicate submissions

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES8+)
- Fetch API
- JSON
- REST API
- JSONPlaceholder

---

## ✨ Features

### 📝 Proposal Form

Users can submit:

- Initiative Title
- Initiative Description

### 📡 POST Request

The form data is sent to the API using:

```javascript
fetch(url, {
    method: "POST",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(newInitiative)
});