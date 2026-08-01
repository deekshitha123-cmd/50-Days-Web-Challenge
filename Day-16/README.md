# 🗓️ Day 16: LocalStorage & Client-Side Data Persistence

## 📌 Project Overview

This project was developed as part of the **50 Days Web Development Challenge with Synexus**.

The main objective of this project is to use the browser's **LocalStorage** feature to automatically save membership form data while the user is typing.

If the user accidentally refreshes or closes the browser, the entered name and email are restored automatically when the page is opened again.

This improves the user experience by preventing accidental data loss.

---

## 🎯 Problem Statement

When users fill out an online form, their entered information may disappear if they accidentally refresh the page or close the browser before submitting the form.

To solve this problem, LocalStorage is used as a small client-side database.

The application automatically:

* Saves the user's name and email while typing
* Converts form data into JSON format
* Stores the data in the browser
* Restores the saved information after a page refresh
* Removes the saved draft after successful form submission

---

## 🚀 Features

* 📝 Membership application form
* 💾 Automatic form-data saving
* 🔄 Data recovery after page refresh
* 📦 JSON data serialization using `JSON.stringify()`
* 🔓 JSON data recovery using `JSON.parse()`
* ✅ “Draft Saved Automatically” indicator
* 🗑️ Automatic LocalStorage cleanup after submission
* 📱 Responsive design
* 🎨 Modern and user-friendly interface

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Browser Web Storage API
* LocalStorage
* JSON

---

## 📂 Project Structure

```text
day-16-localstorage/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

### 1. User enters form details

The user enters their name and email address in the membership application form.

### 2. Input event is triggered

The JavaScript `input` event listens for every change made by the user.

```javascript
nameInput.addEventListener("input", saveFormData);

emailInput.addEventListener("input", saveFormData);
```

### 3. Form data is stored in an object

```javascript
const formData = {
  name: nameInput.value,
  email: emailInput.value
};
```

### 4. Data is converted into a JSON string

LocalStorage can only store strings. Therefore, `JSON.stringify()` converts the JavaScript object into a JSON string.

```javascript
const stringData = JSON.stringify(formData);
```

### 5. Data is saved in LocalStorage

```javascript
localStorage.setItem(
  "synexus_form_draft",
  stringData
);
```

### 6. Saved data is recovered

When the page loads, the application checks whether a saved draft exists.

```javascript
const savedDraft =
  localStorage.getItem(
    "synexus_form_draft"
  );
```

### 7. Data is converted back into an object

```javascript
const recoveredData =
  JSON.parse(savedDraft);
```

### 8. Form fields are automatically populated

```javascript
nameInput.value =
  recoveredData.name || "";

emailInput.value =
  recoveredData.email || "";
```

### 9. Saved data is removed after submission

```javascript
localStorage.removeItem(
  "synexus_form_draft"
);
```

This ensures that a new user starts with an empty form.

---

## 🧠 Key Concepts Learned

* Browser Storage
* Web Storage API
* LocalStorage
* Client-side data persistence
* JavaScript objects
* JSON serialization
* `JSON.stringify()`
* `JSON.parse()`
* Event listeners
* `input` events
* Form submission handling
* State recovery
* User experience improvement

---

## 🧪 How to Test

1. Open the project in a web browser.
2. Enter your name and email address.
3. Wait for the message:

```text
✓ Draft saved automatically
```

4. Refresh the browser.
5. The entered name and email should remain in the form.
6. Click the **Submit Application** button.
7. The form will be cleared.
8. Refresh the page again.
9. The old form data should not appear because the LocalStorage draft has been removed.

---

## 💡 Example of Stored Data

The data is stored in LocalStorage in the following JSON format:

```json
{
  "name": "Deekshitha",
  "email": "deekshitha@example.com"
}
```

The LocalStorage key used in this project is:

```text
synexus_form_draft
```

---

## 🎨 Bonus Feature

A visual **“✓ Draft saved automatically”** message appears whenever the user enters or changes information.

The message automatically fades out after two seconds using:

* JavaScript `setTimeout()`
* CSS `opacity`
* CSS transitions

---

## 📸 Project Preview

Add screenshots of your project here.

```text
screenshots/
├── home-page.png
├── form-data-entered.png
├── draft-saved.png
└── data-restored-after-refresh.png
```

---

## 🔮 Future Improvements

* Add more form fields
* Save phone number and address
* Add a dark mode option
* Add form validation messages
* Add a “Clear Draft” button
* Store multiple form drafts
* Connect the form to a backend database
* Add user authentication

---

## 👩‍💻 Developer

**Deekshitha HS**

Information Science and Engineering Student

---

## 📚 Learning Outcome

Through this project, I learned how websites can remember user information without using a server-side database.

I understood how to save JavaScript objects using `JSON.stringify()`, retrieve them using `localStorage.getItem()`, and restore them using `JSON.parse()`.

This project also demonstrated how client-side data persistence can improve user experience by preventing form data from being lost during accidental page refreshes.

---

## ⭐ Challenge

**Day 16/50 — Web Development Challenge**

Building practical web development skills one day at a time. 🚀

---

## 📄 License

This project is created for educational and learning purposes.
