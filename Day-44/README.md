# Day 44: Reactive Web Components & Memory Management ⚡

## 🎯 Overview

This project demonstrates how to build **Reactive Web Components** using Vanilla JavaScript and a centralized Global State Store.

The main goal is to allow different UI components to communicate through a global store without directly depending on or modifying each other's DOM.

The project contains:

* A **Cart Counter** that subscribes to global state changes.
* A **Product Button** that updates the global cart state.
* A **Global Store** that manages application state.
* Proper Web Component lifecycle management.
* Unsubscription when components are removed to help prevent memory leaks.
* Shadow DOM for component encapsulation.

---

## 📝 Problem Statement

In a modular application, UI elements need to react to global data changes without becoming tightly coupled.

For example, when a user clicks an **Add to Cart** button, the cart counter should update automatically.

Instead of directly querying and modifying another component's DOM, this project uses a **centralized state store with Pub/Sub communication**.

The components independently read from and write to the global store while maintaining encapsulation and memory safety.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript ES6+
* Web Components
* Shadow DOM
* ES6 Modules
* Pub/Sub Pattern
* Component Lifecycle Callbacks
* JavaScript Memory Management

---

## 📁 Project Structure

```text
Day-44-Reactive-Components/
│
├── index.html
├── style.css
├── store.js
│
└── components/
    ├── CartCounter.js
    └── ProductButton.js
```

---

## ⚙️ How It Works

### 1. Global Store

The `store.js` file maintains the application state.

```javascript
let state = {
    cartCount: 0
};
```

It provides three main functions:

### `getState()`

Returns the current application state.

### `subscribe()`

Allows components to listen for state changes.

### `setState()`

Updates the state and notifies all subscribed components.

---

## 🛒 CartCounter Component

The `CartCounter` is the **subscriber component**.

When it is added to the DOM, the `connectedCallback()` method runs.

It:

1. Gets the initial cart count.
2. Displays the current count.
3. Subscribes to future state changes.
4. Updates its Shadow DOM whenever the cart count changes.

Example:

```javascript
this.unsubscribe = globalStore.subscribe((state) => {
    this.shadowRoot
        .getElementById("counter")
        .innerHTML = state.cartCount;
});
```

---

## 🧹 Memory Management

One of the most important parts of this project is preventing memory leaks.

When the `CartCounter` is removed from the DOM, `disconnectedCallback()` is executed.

```javascript
disconnectedCallback() {
    if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
    }
}
```

This removes the component's subscription from the global store.

Therefore, the store does not continue holding unnecessary references to a destroyed component.

---

## ➕ ProductButton Component

The `ProductButton` acts as the **publisher**.

It does not directly communicate with `CartCounter`.

Instead, when the button is clicked, it updates the global store:

```javascript
globalStore.setState({
    cartCount: currentState.cartCount + 1
});
```

The global store then notifies the `CartCounter`.

---

## 🔄 Application Flow

```text
User clicks Add to Cart
          │
          ↓
   ProductButton
          │
          ↓
 globalStore.setState()
          │
          ↓
    Global Store
          │
          ↓
  Notify Subscribers
          │
          ↓
    CartCounter
          │
          ↓
    Shadow DOM
          │
          ↓
    Counter Updates
```

---

## 🌐 Shadow DOM

Each custom component uses Shadow DOM to keep its internal structure and styles encapsulated.

For example:

```javascript
this.attachShadow({ mode: "open" });
```

Elements inside the Shadow DOM should be accessed using:

```javascript
this.shadowRoot.getElementById("counter");
```

Instead of:

```javascript
document.getElementById("counter");
```

This keeps the component independent from the rest of the webpage.

---

## 🚀 How to Run

### Step 1: Open the project

Open the project folder in **Visual Studio Code**.

### Step 2: Install Live Server

Install the **Live Server** extension in VS Code if it is not already installed.

### Step 3: Start the application

Right-click `index.html` and select:

```text
Open with Live Server
```

The application will open in your browser.

---

## 🧪 Testing

Initially, the application displays:

```text
Cart Items: 0
```

Clicking an **Add to Cart** button increases the count:

```text
Cart Items: 1
```

Click again:

```text
Cart Items: 2
```

Clicking another button:

```text
Cart Items: 3
```

All ProductButton components update the same centralized state.

---

## 🎯 Task Requirements Completed

* [x] Created `CartCounter.js`
* [x] Used Web Components
* [x] Implemented Shadow DOM
* [x] Imported the global store
* [x] Implemented `connectedCallback()`
* [x] Implemented store subscription
* [x] Implemented initial state rendering
* [x] Implemented `disconnectedCallback()`
* [x] Implemented unsubscribe functionality
* [x] Created `ProductButton.js`
* [x] Implemented click event handling
* [x] Updated global cart state
* [x] Used encapsulated component communication
* [x] Practiced memory management

---

## 🧠 Key Learnings

Through this project, I learned:

1. How to create autonomous Web Components.
2. How to use Shadow DOM for encapsulation.
3. How to use `connectedCallback()` and `disconnectedCallback()`.
4. How the Pub/Sub pattern can connect independent components.
5. How a centralized state store can manage application data.
6. Why subscriptions should be removed when components are destroyed.
7. How proper cleanup helps prevent memory leaks.
8. How reactive UI components can respond automatically to state changes.

---

## 🏆 Outcome

The final application demonstrates a **reactive, modular, and memory-conscious Web Component architecture**.

The Product Button publishes changes to the centralized store, while the Cart Counter independently subscribes to those changes and updates its own Shadow DOM.

This approach avoids direct DOM manipulation between components and provides better separation of concerns.

---

## 📚 Resources

* MDN Web Components
* MDN Custom Elements
* MDN Shadow DOM
* MDN JavaScript Memory Management

---

## 📅 Challenge

**Day 44 / 50 Days Web Development Challenge**

### Topics Covered

`JavaScript` `Web Components` `Shadow DOM` `Pub/Sub` `Global State` `Lifecycle Callbacks` `Memory Management` `Memory Leaks`

---

## 🔗 Source Code

Add your GitHub repository link here:

```text
https://github.com/your-username/your-repository
```

---

## 💼 LinkedIn Post

> **Day 44/50 of the Web Development Challenge! 🚀**
>
> Today I worked with Reactive Web Components and Memory Management.
>
> I learned how independent UI components can communicate through a centralized global state store without directly modifying each other's DOM.
>
> I implemented a `CartCounter` component that subscribes to state changes and a `ProductButton` component that updates the global cart state.
>
> I also implemented `connectedCallback()` and `disconnectedCallback()` to manage the component lifecycle and properly unsubscribe components when they are removed from the DOM.
>
> This helped me understand how proper subscription cleanup can prevent unnecessary references and memory leaks.
>
> 🔗 Source Code: Add your GitHub repository link
>
> #50daysdev #50daysweb #JavaScript #WebComponents #ShadowDOM #SoftwareArchitecture #MemoryManagement #FrontendEngineering #CodingChallenge
