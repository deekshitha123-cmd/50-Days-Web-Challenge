# 🚀 Day 30: Completing the Cycle — PUT & DELETE Requests

## 📌 Project Overview

Day 30 of my 50 Days Web Development Challenge focused on completing the CRUD lifecycle using the JavaScript Fetch API.

After working with `GET` and `POST` requests, today I implemented `PUT` requests for updating existing data and `DELETE` requests for removing data.

The project now demonstrates the complete CRUD architecture:

- Create → POST
- Read → GET
- Update → PUT
- Delete → DELETE

---

## 🎯 Objective

The main goal of this project was to understand how frontend applications can manage existing server data using RESTful HTTP methods.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES8+)
- Fetch API
- REST API
- JSON
- JSONPlaceholder

---

## ✨ Features

### 📝 Create Proposal

Users can submit a new initiative using a `POST` request.

### 🔄 Update Proposal

Existing proposals can be updated using a `PUT` request targeting a specific ID.

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    method: "PUT",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(updatedInitiative)
});