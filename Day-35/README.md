# 🔐 Day 35: API Security & Authentication (Bearer Tokens)

## 📌 Overview

On Day 35 of the 50 Days Web Development Challenge, I focused on **API Security and Authentication** using **Bearer Tokens**.

The goal was to build a secure request pipeline where an authentication token is retrieved from `LocalStorage` and attached to the HTTP request using the standard `Authorization: Bearer` header.

---

## 🎯 Problem Statement

Public APIs can allow users to retrieve data, but operations such as `POST`, `PUT`, and `DELETE` should be protected.

To prevent unauthorized users from modifying resources, the client sends an authentication token with the request.

This project demonstrates:

* Retrieving authentication tokens
* Validating authentication before making a request
* Using the `Authorization` header
* Sending Bearer Tokens
* Handling `401 Unauthorized`
* Centralizing authentication logic

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* ES6 Modules
* Fetch API
* LocalStorage
* REST API

---

## 🔑 Authentication Flow

```text
User clicks Secure Delete
        ↓
secureDeleteResource()
        ↓
Retrieve auth_token
from LocalStorage
        ↓
Token exists?
   ↓            ↓
  NO           YES
   ↓            ↓
Throw Error   Create Header
                ↓
Authorization:
Bearer <token>
                ↓
         Send DELETE Request
                ↓
        Check HTTP Response
                ↓
       ┌────────┴────────┐
       ↓                 ↓
     401              Success
       ↓                 ↓
Session Expired    Resource Deleted
```

---

## 🚀 Features

### 1. Mock Authentication

A token is manually stored in LocalStorage:

```text
Key: auth_token
Value: mock_jwt_12345
```

This simulates a user who has already authenticated.

### 2. Token Validation

Before sending the request, the application checks whether the token exists.

If no token is found, the request is stopped immediately.

```javascript
if (!token) {
    throw new Error(
        "Access Denied: No authentication token found."
    );
}
```

### 3. Bearer Token

The token is added to the request using the standard HTTP Authorization header:

```javascript
Authorization: Bearer mock_jwt_12345
```

### 4. Unauthorized Response Handling

The application specifically handles HTTP `401 Unauthorized` responses.

```javascript
if (response.status === 401) {
    throw new Error("Unauthorized: Session expired");
}
```

### 5. Centralized Authentication

The project also implements a reusable:

```javascript
getAuthHeaders()
```

function.

This prevents authentication logic from being duplicated across multiple API functions.

---

## 📂 Project Structure

```text
Day-35-API-Authentication/
│
├── index.html
├── style.css
├── api.js
└── main.js
```

---

## ⚙️ How to Run

### Step 1: Open the project

Open the project folder in VS Code.

### Step 2: Run using Live Server

Launch `index.html` using the VS Code Live Server extension.

### Step 3: Add the authentication token

Open:

```text
Browser → Developer Tools → Application
→ Local Storage
```

Add:

```text
auth_token = mock_jwt_12345
```

### Step 4: Test the request

Enter a resource ID such as:

```text
1
```

Click:

```text
🔒 Secure Delete
```

The application sends an authenticated DELETE request.

---

## 🧪 Test Cases

### ✅ Test Case 1: Valid Token

```text
auth_token = mock_jwt_12345
```

Expected result:

```text
Resource 1 deleted successfully
```

### ❌ Test Case 2: Missing Token

Remove `auth_token` from LocalStorage.

Expected result:

```text
Access Denied: No authentication token found.
```

The network request should not be attempted.

### ⚠️ Test Case 3: Unauthorized Token

If the server returns:

```text
401 Unauthorized
```

Expected result:

```text
Unauthorized: Session expired
```

---

## 🧠 Key Concepts Learned

### Authorization Header

The HTTP `Authorization` header is used to provide credentials to a server.

### Bearer Token

The standard format is:

```text
Authorization: Bearer <token>
```

The space after `Bearer` is important.

### HTTP 401

`401 Unauthorized` indicates that the request does not have valid authentication credentials.

### LocalStorage

LocalStorage can be used to store the mock authentication token for this learning exercise.

---

## 🔒 Security Note

For this challenge, the token is intentionally stored in `LocalStorage` to demonstrate authentication concepts.

However, LocalStorage is accessible to JavaScript and can therefore be exposed in certain XSS scenarios.

In production applications, authentication tokens may instead be handled using secure approaches such as:

* `HttpOnly` cookies
* `Secure` cookies
* Proper session management
* HTTPS
* CSRF protection where applicable

---

## 💡 What I Learned

Through this task, I learned how a frontend application can securely attach authentication credentials to API requests.

I also understood that authentication should happen **before** making a protected network request and that the client must properly handle expired or invalid sessions.

Most importantly, I learned the standard:

```text
Authorization: Bearer <token>
```

pattern used in modern API communication.

---

## 🚀 Future Improvements

* Implement real JWT authentication
* Add login and logout functionality
* Add token expiration handling
* Refresh expired access tokens
* Use secure cookie-based authentication
* Add protected routes
* Implement authentication for POST, PUT, and DELETE requests

---

## 👩‍💻 50 Days Web Development Challenge

**Day 35/50 — API Security & Authentication**

Built with ❤️ using **Vanilla JavaScript**.

#50daysdev #50daysweb #JavaScript #WebSecurity #API #FrontendEngineering #Authentication #BearerToken
