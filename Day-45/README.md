# 🚀 Day 45: Advanced Component Composition — Templates & Slots

## 📌 Overview

This project is part of the **50 Days Web Development Challenge**.

The goal of Day 45 is to understand **Advanced Component Composition** using native Web Component technologies such as:

* HTML `<template>`
* HTML `<slot>`
* Shadow DOM
* Custom Elements
* DOM Node Cloning
* Reusable Web Components

Instead of writing large HTML strings using JavaScript `innerHTML`, this project defines a reusable modal structure using an HTML `<template>` and dynamically inserts content using `<slot>`.

---

## 🎯 Problem Statement

Writing large HTML structures directly inside JavaScript using `innerHTML` can become difficult to maintain and can lead to formatting and code-management problems.

Reusable components such as **Modals, Dialogs, and Dropdowns** often have the same outer structure but different inner content.

For example, multiple modals may have the same:

* Overlay
* Modal container
* Header
* Body
* Close button

but different titles and messages.

This project solves the problem by creating a reusable **Custom Modal Web Component** using `<template>` and `<slot>`.

---

## 💡 Proposed Solution

The solution uses a native HTML `<template>` to define the modal's reusable structure.

The template is cloned using JavaScript and inserted into the component's **Shadow DOM**.

The `<slot>` API is then used to allow each modal instance to provide its own content.

For example:

```html
<custom-modal>

    <h2 slot="title">
        Warning
    </h2>

    <p>
        Are you sure you want to delete this?
    </p>

</custom-modal>
```

The same component can then be reused with completely different content.

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **Web Components**
* **Shadow DOM**
* **HTML Template API**
* **Slot API**

---

## 📂 Project Structure

```text
Day45
│
├── index.html
├── style.css
│
├── components
│   └── CustomModal.js
│
└── README.md
```

---

## 🧩 Core Concepts

### 1. HTML `<template>`

The `<template>` element is used to define HTML that is not immediately rendered by the browser.

```html
<template id="modal-template">

    <!-- Modal structure -->

</template>
```

JavaScript can later access and clone this template.

---

### 2. Shadow DOM

The custom modal creates an open Shadow DOM:

```javascript
this.attachShadow({
    mode: "open"
});
```

This provides an isolated DOM structure for the component.

---

### 3. Template Cloning

The template is retrieved from the document:

```javascript
const template =
    document.getElementById("modal-template");
```

Then its contents are cloned:

```javascript
const templateContent =
    template.content.cloneNode(true);
```

Finally, the cloned content is added to the Shadow DOM:

```javascript
this.shadowRoot.appendChild(
    templateContent
);
```

---

### 4. Named Slot

The modal contains a named slot for its title:

```html
<slot name="title">
    Default Title
</slot>
```

Content can be inserted into it using:

```html
<h2 slot="title">
    Warning
</h2>
```

The browser automatically places the `<h2>` inside the named slot.

---

### 5. Default Slot

The modal also contains a default slot:

```html
<slot>
    Default Body
</slot>
```

Any child element without a `slot` attribute is placed into this default slot.

Example:

```html
<p>
    Are you sure you want to delete this?
</p>
```

---

## 🖥️ Application Features

### 🔹 Reusable Modal Component

A single `<custom-modal>` component can be reused multiple times.

### 🔹 Dynamic Content

Each modal can have a different:

* Title
* Message
* Body content

### 🔹 Open and Close Functionality

The bonus challenge adds an `open` attribute:

```html
<custom-modal open>
```

The modal is hidden by default and becomes visible when the `open` attribute exists.

### 🔹 Close Button

Each modal contains a close button that removes the `open` attribute.

### 🔹 Overlay Click

Clicking outside the modal box also closes the modal.

### 🔹 Responsive Design

The interface is designed to work on both desktop and smaller screens.

### 🔹 Slotted Content Styling

The `::slotted()` CSS selector is used to style content passed into the component.

---

## 🔄 How the Application Works

The basic flow is:

```text
User clicks button
        ↓
JavaScript selects custom-modal
        ↓
Adds "open" attribute
        ↓
:host([open]) becomes active
        ↓
Modal becomes visible
        ↓
User views projected slot content
        ↓
User clicks Close
        ↓
"open" attribute is removed
        ↓
Modal becomes hidden
```

---

## 🧪 Modal Examples

### Warning Modal

```html
<custom-modal id="warningModal">

    <h2 slot="title">
        Warning
    </h2>

    <p>
        Are you sure you want to delete this?
    </p>

</custom-modal>
```

### Success Modal

```html
<custom-modal id="successModal">

    <h2 slot="title">
        Success
    </h2>

    <p>
        Your profile has been successfully updated!
    </p>

</custom-modal>
```

Both use the **same reusable component**, but display different content.

---

## ▶️ How to Run

### Step 1: Open the project

Open the `Day45` folder in VS Code.

### Step 2: Check the structure

Make sure the files are arranged like this:

```text
Day45
├── index.html
├── style.css
└── components
    └── CustomModal.js
```

### Step 3: Run the project

Use **Live Server** in VS Code.

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

### Step 4: Test the application

Click:

```text
Open Warning Modal
```

or:

```text
Open Success Modal
```

Then use the **Close** button to close the modal.

---

## ⚠️ Common Pitfalls

### Template returns `null`

If this returns `null`:

```javascript
document.getElementById("modal-template");
```

make sure the template exists in `index.html` and the JavaScript is loaded after the HTML.

The project uses:

```html
<script
    src="components/CustomModal.js"
    defer>
</script>
```

The `defer` attribute helps ensure the HTML is parsed before the script executes.

---

### Incorrect file path

Make sure the JavaScript path is:

```html
<script src="components/CustomModal.js" defer></script>
```

and the actual file is:

```text
components/CustomModal.js
```

---

### Slotted content styling

Normal Shadow DOM CSS does not directly style elements placed into slots.

For slotted elements, use:

```css
::slotted(h2) {
    color: #dc2626;
}
```

---

## 📚 Learning Outcomes

After completing this project, I learned how to:

* Create reusable Web Components.
* Use the native HTML `<template>` element.
* Create and work with Shadow DOM.
* Clone template contents using `cloneNode()`.
* Use named slots.
* Use default slots.
* Project Light DOM content into Shadow DOM.
* Use `::slotted()` for styling.
* Create reusable modal components.
* Control component visibility using HTML attributes.
* Build cleaner and more maintainable component architecture.

---

## 🚀 Future Improvements

Possible improvements include:

* Add keyboard support using the `Escape` key.
* Add different modal types such as warning, error, success, and information.
* Add customizable buttons using additional slots.
* Add animations for opening and closing.
* Add accessibility features such as ARIA labels.
* Allow the modal to be opened through JavaScript methods.
* Add customizable modal sizes.

---

## 📸 Expected Output

The application contains two buttons:

```text
┌─────────────────────────────────────────┐
│                                         │
│     Day 45 - Templates & Slots          │
│                                         │
│  Advanced Component Composition         │
│                                         │
│ [ Open Warning Modal ]                   │
│ [ Open Success Modal ]                   │
│                                         │
└─────────────────────────────────────────┘
```

When the warning button is clicked:

```text
┌─────────────────────────────────┐
│ Warning                         │
├─────────────────────────────────┤
│ Are you sure you want to        │
│ delete this?                    │
│                                 │
│                 [ Close ]       │
└─────────────────────────────────┘
```

---

## 🏁 Conclusion

Day 45 demonstrates how native Web Component technologies can be used to build **clean, reusable, and maintainable UI components**.

By combining `<template>`, `<slot>`, Shadow DOM, and Custom Elements, the same modal structure can be reused with different content without duplicating the component's HTML structure.

This approach provides a native browser-based alternative for component composition and helps build a stronger understanding of how modern frontend component systems work.

---

## 🔗 Resources

* MDN Web Docs — Web Components
* MDN Web Docs — `<template>` and `<slot>`
* Web Components — Shadow DOM and Slots

---

## 📌 Challenge

**Day 45 / 50 Days Web Development Challenge 🚀**

### Topics Covered

`HTML` `CSS` `JavaScript` `Web Components` `Shadow DOM` `Templates` `Slots` `Component Composition`

---

## 👨‍💻 Author

**50 Days Web Development Challenge**

Built as part of the Day 45 Web Development Challenge.
