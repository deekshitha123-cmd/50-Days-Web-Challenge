# 🗓️ Day 18: Timers, Intervals & The Event Loop

## 🎯 Project: Auto-Rotating Community Testimonial Carousel

This project is part of the **50 Days Web Development Challenge by Synexus**.

On Day 18, I built an **Auto-Rotating Community Testimonial Carousel** using **Vanilla JavaScript**. The carousel automatically updates the displayed testimonial every **3 seconds** using `setInterval()`.

The project demonstrates how JavaScript can execute tasks automatically over time instead of waiting only for user actions.

---

## 🚀 Live Demo

🔗 **Live Website:** Add your deployed project link here

🔗 **GitHub Repository:** Add your GitHub repository link here

---

## 📸 Project Preview

Add a screenshot or GIF of your project here.

```text
Community Voices

"What Our Members Say"

"This community helped me improve my
web development skills and stay consistent."

Deekshitha HS
Web Development Learner

← Previous        Next →
```

---

## ✨ Features

* 🔄 Automatically changes testimonials every 3 seconds
* ⏱️ Uses JavaScript `setInterval()`
* 🛑 Uses `clearInterval()` when manual controls are used
* ➡️ Includes a **Next** button
* ⬅️ Includes a **Previous** button
* 🔁 Loops back to the first testimonial
* 📊 Uses an array of testimonial objects
* 🧠 Tracks the current testimonial using an index
* 📱 Fully responsive design
* 🎨 Modern dark user interface
* ⚡ Built using pure Vanilla JavaScript
* ♿ Includes accessible button labels

---

## 🛠️ Technologies Used

| Technology        | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| HTML5             | Creates the structure of the webpage             |
| CSS3              | Designs and styles the carousel                  |
| JavaScript        | Adds automatic and manual carousel functionality |
| `setInterval()`   | Runs the carousel every 3 seconds                |
| `clearInterval()` | Stops the automatic timer                        |
| DOM Manipulation  | Updates the testimonial content                  |
| Event Listeners   | Handles button clicks                            |

---

## 📂 Project Structure

```text
day-18-carousel/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧠 Core Concepts Learned

### 1. Event Loop

The **JavaScript Event Loop** helps JavaScript handle asynchronous tasks.

When a timer is created using `setInterval()`, the browser keeps track of the timer. After the specified time is completed, the Event Loop allows the callback function to be executed when JavaScript is ready.

In this project:

```javascript
setInterval(
  updateTestimonial,
  3000
);
```

The `updateTestimonial()` function is scheduled to run every **3000 milliseconds**, which is equal to **3 seconds**.

---

### 2. `setInterval()`

`setInterval()` repeatedly executes a function after a specified time interval.

```javascript
setInterval(
  updateTestimonial,
  3000
);
```

Here:

* `updateTestimonial` is the function that updates the carousel.
* `3000` represents 3000 milliseconds.
* 3000 milliseconds = 3 seconds.

The carousel automatically changes every 3 seconds.

---

### 3. `clearInterval()`

`clearInterval()` stops a running interval.

```javascript
clearInterval(
  carouselInterval
);
```

In this project, the automatic timer is stopped when the user clicks the **Next** or **Previous** button.

This prevents the automatic timer and manual buttons from updating the carousel at the same time.

---

### 4. Array Indexing

Testimonials are stored inside an array.

```javascript
const testimonialsData = [
  {
    name: "Deekshitha HS",
    quote:
      "This community helped me improve my skills.",
    role:
      "Web Development Learner"
  },

  {
    name: "Aarav Sharma",
    quote:
      "The daily challenges improved my JavaScript skills.",
    role:
      "Frontend Developer"
  }
];
```

JavaScript arrays start from index `0`.

```text
Index 0 → Deekshitha HS

Index 1 → Aarav Sharma
```

The current testimonial is selected using:

```javascript
const currentData =
  testimonialsData[currentIndex];
```

---

### 5. State Tracking

The variable below stores the current position of the carousel:

```javascript
let currentIndex = 0;
```

After displaying a testimonial, the index increases:

```javascript
currentIndex++;
```

For example:

```text
0 → 1 → 2 → 3
```

---

### 6. Reset Logic

After displaying the last testimonial, the index is reset to `0`.

```javascript
if (
  currentIndex ===
  testimonialsData.length
) {
  currentIndex = 0;
}
```

This creates an infinite loop:

```text
Deekshitha
      ↓
Aarav
      ↓
Priya
      ↓
Rahul
      ↓
Deekshitha
      ↓
...
```

---

## ⚙️ How the Carousel Works

1. The testimonial data is stored in an array.
2. `currentIndex` starts with the value `0`.
3. The current testimonial is selected from the array.
4. The member's name, quote, and role are displayed on the webpage.
5. The index increases using `currentIndex++`.
6. If the index reaches the array length, it resets to `0`.
7. `setInterval()` runs the update function every 3 seconds.
8. The carousel continues rotating automatically.

---

## ▶️ How to Run the Project

1. Download or clone the repository.

2. Open the project folder in **Visual Studio Code**.

3. Make sure the following files are available:

```text
index.html
style.css
script.js
README.md
```

4. Install the **Live Server** extension in VS Code.

5. Right-click on `index.html`.

6. Select:

```text
Open with Live Server
```

7. The project will open in your browser.

8. Scroll to the **Community Testimonials** section.

9. Watch the testimonials change automatically every 3 seconds.

---

## 🧪 Testing Checklist

* [x] Testimonials display correctly
* [x] Testimonial changes every 3 seconds
* [x] Name updates correctly
* [x] Quote updates correctly
* [x] Role updates correctly
* [x] Carousel returns to the first testimonial
* [x] Next button works
* [x] Previous button works
* [x] Automatic timer stops after a manual click
* [x] Website works on mobile devices
* [x] No JavaScript errors appear in the browser console

---

## ⚠️ Challenges Faced

### Array Out-of-Bounds Error

Arrays are zero-indexed.

If an array contains four testimonials:

```text
Valid indexes:

0
1
2
3
```

Index `4` does not exist.

The reset logic prevents JavaScript from trying to access an invalid array position.

```javascript
if (
  currentIndex ===
  testimonialsData.length
) {
  currentIndex = 0;
}
```

---

### Preventing Multiple Timers

Creating multiple intervals can cause the carousel to update too quickly or behave unexpectedly.

The interval is stored inside a variable:

```javascript
let carouselInterval =
  setInterval(
    updateTestimonial,
    3000
  );
```

The timer can then be stopped using:

```javascript
clearInterval(
  carouselInterval
);
```

---

## 🎓 Learning Outcomes

After completing this project, I learned how to:

* Use `setInterval()` to execute code repeatedly
* Use `clearInterval()` to stop an interval
* Understand the basic role of the JavaScript Event Loop
* Store UI data inside an array
* Access objects using array indexes
* Track UI state using variables
* Update webpage content using DOM manipulation
* Build an automatic carousel without external libraries
* Prevent multiple timers from running together
* Create responsive and interactive user interfaces

---

## 🔮 Future Improvements

* Add smooth slide animations
* Add fade-in and fade-out effects
* Add carousel indicator dots
* Add a progress bar
* Pause the carousel when the mouse is over it
* Restart automatic rotation after manual navigation
* Add swipe support for mobile devices
* Fetch testimonials from an API
* Add profile images for each member

---

## 👩‍💻 Author

**Deekshitha HS**

Information Science & Engineering Student

Aspiring Full-Stack Developer

---

## 🔗 Connect With Me

* GitHub: Add your GitHub profile link
* LinkedIn: Add your LinkedIn profile link

---

## 🏆 Challenge Progress

```text
Day 18 / 50

✅ Timers
✅ Intervals
✅ Event Loop
✅ Array Indexing
✅ State Tracking
✅ DOM Manipulation
✅ Auto-Rotating Carousel
```

---

## 📜 License

This project is created for educational purposes as part of the **50 Days Web Development Challenge**.

---

⭐ If you like this project, consider giving the repository a star!
