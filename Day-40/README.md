# 🗄️ Day 40: Client-Side Databases (IndexedDB)

## 🎯 Overview

Today’s challenge focuses on **IndexedDB**, a browser-based database that allows web applications to store structured data locally.

The goal is to make a PWA more reliable during network failures. Instead of losing form data when the user is offline, the application stores the submitted data in IndexedDB and retrieves it when the connection is restored.

---

## 🚨 Problem Statement

When a user submits a form without an internet connection, a normal `fetch()` request fails and the entered data may be lost.

To solve this problem, we use **IndexedDB** as local client-side storage.

The application:

* Detects whether the user is online or offline.
* Saves form data locally when offline.
* Uses IndexedDB to store structured data.
* Retrieves previously stored offline data.
* Allows the application to continue working even without an internet connection.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* IndexedDB API
* Fetch API
* Browser Network Information (`navigator.onLine`)
* JavaScript Modules

---

## 📁 Project Structure

```text
Day-40-IndexedDB-Offline-Data/
│
├── index.html      # Application interface
├── style.css       # Page styling
├── main.js         # Form handling and online event
├── api.js          # API POST request and offline detection
├── db.js           # IndexedDB database operations
└── README.md       # Project documentation
```

---

## ⚙️ How It Works

### Online Mode

When the browser is connected to the internet:

```text
User submits form
        ↓
main.js
        ↓
api.js
        ↓
fetch()
        ↓
Server
```

### Offline Mode

When the browser has no internet connection:

```text
User submits form
        ↓
main.js
        ↓
api.js
        ↓
navigator.onLine = false
        ↓
saveOfflineData()
        ↓
IndexedDB
        ↓
offline_proposals
```

---

## 🗄️ IndexedDB Structure

The application creates a database called:

```text
PlatformDB
```

Inside the database, an object store is created:

```text
offline_proposals
```

The object store uses:

```javascript
{
    keyPath: "id",
    autoIncrement: true
}
```

This automatically generates a unique ID for each offline proposal.

---

## 🔑 Main Features

### 1. Database Initialization

The application opens IndexedDB using:

```javascript
indexedDB.open("PlatformDB", 1);
```

### 2. Object Store Creation

During the database upgrade event:

```javascript
db.createObjectStore("offline_proposals", {
    keyPath: "id",
    autoIncrement: true
});
```

### 3. Offline Data Storage

When the user is offline:

```javascript
if (!navigator.onLine) {
    await saveOfflineData(payload);
}
```

The data is stored locally using:

```javascript
store.add(payload);
```

### 4. Retrieve Offline Data

The application can retrieve all saved records using:

```javascript
store.getAll();
```

### 5. Online Event Detection

When the connection returns:

```javascript
window.addEventListener("online", async () => {
    // Retrieve offline data
});
```

---

## 🧪 How to Test

### Step 1: Run the Project

Open the project using a local development server such as **Live Server**.

### Step 2: Open Developer Tools

Press:

```text
F12
```

Then open:

```text
Application → IndexedDB
```

### Step 3: Go Offline

Open:

```text
Developer Tools → Network → Throttling → Offline
```

### Step 4: Submit the Form

Enter a proposal and click **Submit Proposal**.

The application will detect the offline state and save the data locally.

### Step 5: Check IndexedDB

Navigate to:

```text
Application
→ IndexedDB
→ PlatformDB
→ offline_proposals
```

The submitted proposal should appear there.

### Step 6: Restore Internet

Change Network throttling back to:

```text
No throttling
```

The application detects the `online` event and retrieves the stored offline data.

---

## 📚 Key Concepts Learned

* IndexedDB database creation
* Database versioning
* Object stores
* Auto-increment keys
* Read/write transactions
* Read-only transactions
* Asynchronous JavaScript
* Promises
* `async/await`
* Network state detection
* Offline-first architecture
* Client-side data persistence

---

## 🚀 Future Improvements

The current implementation stores and retrieves offline proposals.

Future versions can automatically synchronize the stored data with the server when the internet connection returns.

Possible improvements:

* Automatic background synchronization
* Delete data after successful synchronization
* Retry failed requests
* Display offline/online status
* Add synchronization status to each record
* Add timestamps and unique identifiers
* Handle failed synchronization gracefully

---

## 🎯 Learning Outcome

By completing Day 40, I learned how to use **IndexedDB as a client-side database** and how it can be integrated with an offline-first web application.

This improves application reliability by preventing user-submitted data from being lost during temporary network failures.

---

## 🔗 Resources

* MDN Web Docs – IndexedDB API
* web.dev – Storage for the Web

---

## 📱 LinkedIn Post

**Day 40/50 of the Web Development Challenge! 🚀**

Today I explored **Client-Side Databases using IndexedDB**. 🗄️

Service Workers help cache the application itself, but user-submitted data needs a reliable place to live when the network goes offline.

I built an IndexedDB wrapper that stores form submissions locally whenever the browser detects an offline state.

This helped me understand database versioning, object stores, transactions, asynchronous operations, and offline-first architecture.

Another step toward building more reliable and resilient PWAs! 🚀

#50DaysDev #50DaysWeb #JavaScript #IndexedDB #PWA #OfflineFirst #WebDevelopment #FrontendDevelopment #CodingChallenge
