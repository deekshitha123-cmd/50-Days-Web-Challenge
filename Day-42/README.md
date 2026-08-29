# 🧱 Day 42/50 – Web Components & Shadow DOM

> **50 Days Web Development Challenge – Team Synexus**

## 📌 Problem Statement

As web applications grow, maintaining consistent UI becomes difficult. Repeating the same HTML for user profiles, cards, navigation bars, and other components violates the **DRY (Don't Repeat Yourself)** principle.

Instead of copying and modifying the same HTML in multiple places, modern browsers provide **Web Components**, which allow developers to create reusable custom HTML elements without depending on frameworks such as React, Vue, or Angular.

In this project, I built a reusable `<user-card>` component using the **Web Components API** and **Shadow DOM**.

---

## 🎯 Objective

The main objective of this project is to:

* Create a reusable custom HTML element.
* Pass dynamic data using HTML attributes.
* Use ES6 Classes to create the component.
* Encapsulate HTML and CSS using Shadow DOM.
* Use lifecycle callbacks to manage the component.
* Make the component reactive when attributes change.

---

## 🛠️ Technologies Used

| Technology          | Purpose                                 |
| ------------------- | --------------------------------------- |
| HTML5               | Page structure and custom elements      |
| CSS3                | Main page styling and responsive design |
| JavaScript ES6      | Component logic                         |
| Custom Elements API | Creating `<user-card>`                  |
| Shadow DOM          | CSS and DOM encapsulation               |
| ES6 Classes         | Component architecture                  |
| Lifecycle Callbacks | Component initialization and updates    |

---

## 📂 Project Structure

```text
Day-42-Web-Components/
│
├── index.html
├── main.js
│
├── css/
│   └── style.css
│
└── components/
    └── UserCard.js
```

---

## 🧩 Web Component

The project introduces a custom HTML element:

```html
<user-card
    name="Jane Doe"
    role="Lead Engineer">
</user-card>
```

Multiple cards can be created simply by changing the attributes:

```html
<user-card
    name="John Smith"
    role="Frontend Developer">
</user-card>

<user-card
    name="Alex Johnson"
    role="Backend Developer">
</user-card>

<user-card
    name="Sarah Wilson"
    role="UI/UX Designer">
</user-card>
```

This eliminates the need to repeatedly write the complete card HTML structure.

---

## 🧠 Core Concepts

### 1. Custom Elements

The component is registered using:

```javascript
customElements.define("user-card", UserCard);
```

This tells the browser that whenever it encounters:

```html
<user-card></user-card>
```

it should use the `UserCard` class.

---

### 2. ES6 Classes

The component is created using:

```javascript
class UserCard extends HTMLElement {
    
}
```

By extending `HTMLElement`, our class gets the functionality required to behave like a native HTML element.

---

### 3. Shadow DOM

The component creates its own Shadow DOM:

```javascript
this.attachShadow({
    mode: "open"
});
```

Shadow DOM provides **encapsulation**.

The styles inside the component do not accidentally affect the rest of the webpage, and external styles do not directly interfere with the component's internal styling.

---

### 4. Lifecycle Callback

The `connectedCallback()` method runs when the custom element is added to the DOM.

```javascript
connectedCallback() {
    this.render();
}
```

This is where the component is rendered.

---

### 5. Dynamic Attributes

The component receives data from HTML attributes:

```javascript
const name = this.getAttribute("name");
const role = this.getAttribute("role");
```

These values are then displayed inside the card.

---

## 🔄 Reactive Web Component

As a bonus feature, the component also watches for changes to its attributes.

```javascript
static get observedAttributes() {
    return ["name", "role"];
}
```

Whenever one of these attributes changes:

```javascript
attributeChangedCallback(
    name,
    oldValue,
    newValue
) {
    if (oldValue !== newValue) {
        this.render();
    }
}
```

the component automatically re-renders.

For example:

```javascript
const card = document.querySelector("user-card");

card.setAttribute("name", "Deekshitha");

card.setAttribute(
    "role",
    "Full Stack Developer"
);
```

The displayed card updates automatically without refreshing the page.

---

## 🎨 CSS Encapsulation

The main page uses:

```text
css/style.css
```

while the `<user-card>` component has its own styles inside the Shadow DOM.

```javascript
this.shadowRoot.innerHTML = `
    <style>
        .card {
            ...
        }
    </style>

    <div class="card">
        ...
    </div>
`;
```

This demonstrates how Shadow DOM protects component styles from global CSS conflicts.

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

Open the project folder in **VS Code**.

### 3. Start the application

Use the **Live Server** extension in VS Code.

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

---

## 📱 Expected Output

The webpage displays a team section containing reusable user cards.

Each card contains:

* 👤 User avatar
* 🧑 User name
* 💼 User role
* 🟢 Active status
* ✨ Hover animation

Example:

```text
              Our Team

     ┌─────────────────────┐
     │          J          │
     │                     │
     │      Jane Doe       │
     │                     │
     │    Lead Engineer    │
     │                     │
     │      ● Active       │
     └─────────────────────┘
```

---

## 🌟 Key Features

* ♻️ Reusable UI components
* 🧩 Custom HTML elements
* 🔒 Shadow DOM encapsulation
* 🎨 Component-level styling
* 📦 Modular JavaScript
* 🔄 Reactive attributes
* 📱 Responsive design
* 🚫 No external UI framework required

---

## 💡 Advantages of Web Components

### Reusability

The same component can be used multiple times:

```html
<user-card name="Jane Doe" role="Engineer"></user-card>

<user-card name="John Smith" role="Developer"></user-card>

<user-card name="Alex Johnson" role="Designer"></user-card>
```

### Maintainability

The component's structure and behavior are defined in one place.

If the design changes, we update `UserCard.js` instead of modifying every card individually.

### Encapsulation

Shadow DOM prevents unwanted CSS conflicts between the component and the rest of the application.

### Framework Independent

Web Components are built into modern browsers, so they don't require React, Vue, Angular, or another UI framework.

---

## ⚠️ Important Concepts & Common Pitfalls

### Hyphen Rule

Custom elements must contain a hyphen.

✅ Correct:

```html
<user-card></user-card>
```

❌ Incorrect:

```html
<usercard></usercard>
```

---

### Don't Forget `super()`

When extending `HTMLElement`, the constructor must call:

```javascript
super();
```

before using:

```javascript
this
```

Otherwise, the component will throw an error.

---

## 📚 What I Learned

Through this project, I learned how to:

* Build native reusable UI components.
* Create custom HTML elements.
* Work with ES6 classes.
* Use the Custom Elements API.
* Understand Shadow DOM.
* Encapsulate component CSS.
* Work with lifecycle callbacks.
* Build reactive components using observed attributes.
* Create modular UI without depending on third-party frameworks.

---

## 🏁 Conclusion

This project demonstrates how modern browsers can provide powerful component-based architecture without requiring a JavaScript framework.

By combining **Custom Elements, ES6 Classes, Shadow DOM, and Lifecycle Callbacks**, I created a reusable and maintainable `<user-card>` component with dynamic data and encapsulated styling.

This approach follows the **DRY principle** and provides a strong foundation for building modular web applications.

---

## 🔗 Resources

* [MDN – Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
* [MDN – Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)

---

 

## 📈 50 Days Web Development Challenge

**Day 42/50 – Web Components & Shadow DOM 🚀**

Built with:

**HTML5 + CSS3 + Vanilla JavaScript + Web Components**

#50DaysDev #50DaysWeb #JavaScript #WebComponents #ShadowDOM #FrontendDevelopment #WebDevelopment #100DaysOfCode
