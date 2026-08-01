# 🌙 Day 17 – Theme Engineering & Persistent Dark Mode

## 🚀 Project Overview

On Day 17 of the **50 Days Web Development Challenge with Synexus**, I built a **Persistent Dark Mode feature** for the Synexus Community Platform.

The application allows users to switch between **Light Mode ☀️** and **Dark Mode 🌙**. The selected theme is stored using **LocalStorage**, so the website remembers the user's preference even after refreshing or reopening the browser.

This project also continues the Day 16 feature of automatically saving membership form data while the user types.

---

## ✨ Features

* 🌙 Dark Mode and Light Mode toggle
* ☀️ Dynamic Moon and Sun icons
* 💾 Theme preference saved using LocalStorage
* 🔄 Theme restored automatically after page refresh
* 🖥️ Detects the user's system theme preference
* 🎨 CSS Custom Properties for theme management
* ✨ Smooth theme transitions
* 📝 Membership form data saved automatically
* 🔁 Form data restored after refreshing the page
* ✅ Saved form data removed after successful submission
* 📱 Fully responsive design
* ♿ Accessible theme toggle button

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* CSS Custom Properties
* DOM Manipulation
* LocalStorage
* Responsive Web Design

---

## 🧠 Concepts Practiced

### 1. CSS Custom Properties

CSS variables are used to manage the website's colors.

```css
:root {
  --bg-color: #f4f7fb;
  --surface-color: #ffffff;
  --text-color: #20243a;
}
```

The dark theme redefines the same variables:

```css
.dark-theme {
  --bg-color: #121212;
  --surface-color: #1e1e1e;
  --text-color: #f1f1f1;
}
```

---

### 2. Global Theme Switching

JavaScript adds or removes the `dark-theme` class:

```javascript
document.documentElement.classList.toggle(
  "dark-theme"
);
```

This updates the complete website using CSS variables.

---

### 3. Theme Persistence

The selected theme is stored in LocalStorage:

```javascript
localStorage.setItem(
  "synexus_theme",
  "dark"
);
```

The saved theme is restored when the website loads.

---

### 4. Form Data Persistence

The membership form data is converted into JSON and stored in LocalStorage:

```javascript
localStorage.setItem(
  "synexus_form_draft",
  JSON.stringify(formData)
);
```

The saved data is restored after refreshing the page.

---

## 📂 Project Structure

```text
synexus-community/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ▶️ How to Run the Project

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html`.
4. Start the project using the **Live Server** extension.
5. Click the 🌙 button to enable Dark Mode.
6. Refresh the page to verify that the selected theme is saved.

---

## 🧪 Testing Checklist

* [x] Click 🌙 to enable Dark Mode
* [x] Moon icon changes to ☀️
* [x] Refresh the page
* [x] Dark Mode remains active
* [x] Click ☀️ to return to Light Mode
* [x] Refresh the page
* [x] Light Mode remains active
* [x] Enter a name and email
* [x] Refresh the page
* [x] Form data is restored
* [x] Submit the form
* [x] Saved form data is removed

---

## 🎯 Learning Outcomes

Through this project, I learned how to:

* Build a scalable theme architecture
* Use CSS variables for global UI changes
* Manipulate the DOM using JavaScript
* Track and manage UI state
* Save user preferences using LocalStorage
* Restore application state after page refresh
* Build a more user-friendly and accessible interface

---

## 🔮 Future Improvements

* Add multiple color themes
* Add a theme transition animation
* Allow users to select custom accent colors
* Sync theme preferences with a user account
* Add a system theme change listener

---

## 👩‍💻 Author

**Deekshitha HS**

Information Science and Engineering Student
Aspiring Full-Stack Developer

---

## 🔗 Connect With Me

* GitHub: Add your GitHub profile link
* LinkedIn: Add your LinkedIn profile link

---

⭐ If you found this project useful, consider giving the repository a star!
