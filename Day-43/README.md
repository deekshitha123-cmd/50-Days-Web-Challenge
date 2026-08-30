# 🌐 Day 43 — Global State Management (Pub/Sub Pattern)

> **Day 43/50 of the Web Development Challenge 🚀**

A Vanilla JavaScript project that demonstrates **Global State Management** using the **Publish-Subscribe (Pub/Sub) Design Pattern**.

The project creates a centralized `StateStore` that acts as a **single source of truth**. Multiple independent Web Components can subscribe to the store and automatically receive updates whenever the global state changes.

---

## 🎯 Problem Statement

In a modular frontend application, different UI components often need to share the same data.

For example:

* A shopping cart component needs to display the cart count.
* A theme component needs to know the current theme.
* Other components may also need access to the same information.

Passing data manually between components can make an application tightly coupled and difficult to maintain.

To solve this problem, this project implements a centralized **Global State Store** using the **Publish-Subscribe Pattern**.

---

## 💡 Solution

The application contains one centralized store called:

```javascript
globalStore
```

The store maintains:

```javascript
{
    cartCount: 0,
    userTheme: "light"
}
```

Components can:

* Subscribe to state changes using `subscribe()`
* Update state using `setState()`
* Read state using `getState()`
* Unsubscribe when removed from the DOM

Whenever the state changes, the store automatically notifies all active subscribers.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* ES6 Classes
* ES6 Modules
* Web Components
* Shadow DOM
* Spread Syntax (`...`)
* Callback Functions
* Publish-Subscribe Pattern
* Centralized State Management

---

## 📁 Project Structure

```text
Day-43-Global-State-Management/
│
├── index.html
│
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    │
    ├── main.js
    │
    ├── core/
    │   └── store.js
    │
    └── components/
        ├── cart.js
        └── theme.js
```

---

## 🧠 Core Architecture

The application follows this architecture:

```text
              GLOBAL STORE
                   │
        ┌──────────┴──────────┐
        │                     │
    Cart State            Theme State
        │                     │
        ▼                     ▼
    Cart Component       Theme Component
        │                     │
        └──────────┬──────────┘
                   │
              subscribe()
                   │
                   ▼
              setState()
                   │
                   ▼
           Notify Listeners
                   │
                   ▼
              UI Updates
```

---

# 🏪 StateStore

The main class is:

```javascript
class StateStore
```

It manages the application's global state.

### Constructor

```javascript
constructor(initialState) {

    this.state = initialState;

    this.listeners = [];

}
```

The store contains two important properties:

### `state`

Stores the current application data.

```javascript
this.state = {
    cartCount: 0,
    userTheme: "light"
};
```

### `listeners`

Stores all functions that have subscribed to state changes.

```javascript
this.listeners = [];
```

---

# 📢 Subscribe

Components can subscribe to the store using:

```javascript
globalStore.subscribe(listenerFunction);
```

The listener is added to the listeners array:

```javascript
this.listeners.push(listenerFunction);
```

Whenever the state changes, these listeners are notified.

---

# 🔄 setState()

The `setState()` method updates the global state.

```javascript
setState(newState) {

    this.state = {
        ...this.state,
        ...newState
    };

    this.listeners.forEach(
        listener => {
            listener(this.state);
        }
    );

}
```

The spread operator combines the old state with the new state.

For example:

### Old state

```javascript
{
    cartCount: 5,
    userTheme: "light"
}
```

### New update

```javascript
{
    userTheme: "dark"
}
```

### Result

```javascript
{
    cartCount: 5,
    userTheme: "dark"
}
```

---

# 🛒 Shopping Cart Component

The cart component subscribes to the global store:

```javascript
globalStore.subscribe((state) => {

    this.updateCart(state);

});
```

When the user clicks **Add Item**, it gets the current count:

```javascript
const currentCount =
    globalStore.getState().cartCount;
```

Then updates the global store:

```javascript
globalStore.setState({

    cartCount: currentCount + 1

});
```

The store then notifies all subscribers.

---

# 🎨 Theme Component

The theme component also subscribes to the same store.

It reads the current theme:

```javascript
const currentTheme =
    globalStore.getState().userTheme;
```

Then changes it:

```javascript
const newTheme =
    currentTheme === "light"
        ? "dark"
        : "light";
```

Finally:

```javascript
globalStore.setState({

    userTheme: newTheme

});
```

The UI automatically receives the updated state.

---

# 🧹 Memory Leak Prevention

A bonus feature has also been implemented.

When a component subscribes:

```javascript
this.unsubscribe =
    globalStore.subscribe(...);
```

The `subscribe()` method returns an unsubscribe function.

When the component is removed:

```javascript
disconnectedCallback() {

    if (this.unsubscribe) {

        this.unsubscribe();

    }

}
```

The listener is removed from the store:

```javascript
this.listeners =
    this.listeners.filter(
        listener =>
            listener !== listenerFunction
    );
```

This prevents unnecessary listeners from remaining in memory.

---

# 🚫 Direct State Mutation

The project avoids directly modifying the global state.

### ❌ Incorrect

```javascript
globalStore.state.cartCount = 5;
```

This changes the value without notifying subscribers.

### ✅ Correct

```javascript
globalStore.setState({
    cartCount: 5
});
```

This ensures that:

```text
State changes
     ↓
Listeners are notified
     ↓
Components update
```

---

# 🔐 Singleton Store

The project uses only one global store instance:

```javascript
export const globalStore =
    new StateStore({
        cartCount: 0,
        userTheme: "light"
    });
```

Every component imports this same instance:

```javascript
import { globalStore }
from "../core/store.js";
```

This ensures that all components communicate through the same centralized state.

---

# ▶️ How to Run

## 1. Open the project

Open:

```text
Day-43-Global-State-Management
```

in VS Code.

## 2. Install Live Server

Install the **Live Server** extension in VS Code.

## 3. Start the application

Open:

```text
index.html
```

Right-click and select:

```text
Open with Live Server
```

The application will open in your browser.

---

# 🧪 Testing

### Test 1 — Cart

Click:

```text
Add Item
```

The cart count should change:

```text
0 → 1 → 2 → 3 → 4
```

The Global State section should also update.

---

### Test 2 — Theme

Click:

```text
Toggle Theme
```

The theme should change:

```text
light → dark → light
```

The global state display should update automatically.

---

### Test 3 — Console

Open browser Developer Tools:

```text
F12
```

Go to:

```text
Console
```

You should see:

```text
🚀 Day 43 Application Started
Initial Global State:
```

When the state changes:

```text
🔄 Global State Updated:
```

will appear in the console.

---

# 📸 Expected Output

The application contains:

* 🌐 Global State Management heading
* 🧠 Global State section
* 🛒 Shopping Cart component
* 🎨 Theme Manager component
* 🔄 Pub/Sub architecture flow
* 💡 Key concepts
* 🧩 Core implementation example

---

# 🎯 Learning Outcomes

After completing this project, I learned:

* How global state management works
* How the Publish-Subscribe pattern works
* How centralized state can be implemented
* How components can subscribe to state changes
* How callbacks can notify multiple components
* How the spread operator can merge state
* How Web Components can communicate through shared state
* How to prevent memory leaks using unsubscribe functions
* Why direct state mutation should be avoided
* Why a singleton store is useful for shared application state

---

# 🌟 Key Takeaway

Instead of making components communicate directly:

```text
Component A ↔ Component B
```

we use a centralized store:

```text
Component A
      ↓
Component B → GLOBAL STORE ← Component C
      ↑
Component D
```

The Global Store becomes the **single source of truth** for shared application state.

---

# 🚀 Future Improvements

This basic implementation could be extended with:

* State persistence using LocalStorage
* State history and undo/redo
* Selective subscriptions
* Middleware
* Asynchronous actions
* Immutable state protection
* More complex application state
* TypeScript support
* Unit testing

---

# 📚 Resources

* Patterns.dev — Observer / PubSub Pattern
* MDN Web Docs — JavaScript Spread Syntax
* MDN Web Components
* MDN JavaScript Modules

---

# 📱 LinkedIn Post

> **Day 43/50 of the Web Development Challenge! 🚀**
>
> Today I explored Global State Management by implementing the Publish-Subscribe (Pub/Sub) pattern using Vanilla JavaScript.
>
> I built a centralized `StateStore` that acts as a single source of truth for multiple independent Web Components.
>
> Components can subscribe to the store and automatically receive updates whenever `setState()` changes the global state.
>
> I also implemented an unsubscribe mechanism to prevent memory leaks when components are removed from the DOM.
>
> This project helped me understand the core ideas behind modern state-management solutions and reactive frontend architecture.
>
> 🔗 Source Code: Add your GitHub repository link here
>
> #50daysdev #50daysweb #JavaScript #StateManagement #PubSub #WebDevelopment #FrontendDevelopment #SoftwareArchitecture #CodingChallenge

````

---

## ✅ Day 43 is now complete

Your repository should contain:

```text
📁 Day-43-Global-State-Management
│
├── 📄 index.html
├── 📄 README.md
│
├── 📁 css
│   └── 📄 style.css
│
└── 📁 js
    ├── 📄 main.js
    │
    ├── 📁 core
    │   └── 📄 store.js
    │
    └── 📁 components
        ├── 📄 cart.js
        └── 📄 theme.js
````

**Important:** after creating `README.md`, save everything with **Ctrl + S**, run it with **Live Server**, test both buttons, and then you can push the complete Day 43 folder to GitHub.
