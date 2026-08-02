/* =====================================
DAY 18:
TIMERS, INTERVALS
& THE EVENT LOOP
===================================== */

/* =====================================
TESTIMONIAL DATA
===================================== */

const testimonialsData = [

{
name:
"Deekshitha HS",

```
quote:
  "This community helped me improve my web development skills, stay consistent, and gain confidence by building projects.",

role:
  "Web Development Learner"
```

},

{
name:
"Aarav Sharma",

```
quote:
  "The daily challenges made learning JavaScript practical and enjoyable. I now understand how interactive websites work.",

role:
  "Frontend Developer"
```

},

{
name:
"Priya N",

```
quote:
  "Being part of this community motivated me to learn every day, complete projects, and share my progress with others.",

role:
  "Community Member"
```

},

{
name:
"Rahul Kumar",

```
quote:
  "The collaborative environment helped me learn from other developers and improve my technical problem-solving skills.",

role:
  "Full-Stack Learner"
```

}

];

/* =====================================
SELECT HTML ELEMENTS
===================================== */

const testimonialName =
document.getElementById(
"testimonial-name"
);

const testimonialQuote =
document.getElementById(
"testimonial-quote"
);

const testimonialRole =
document.getElementById(
"testimonial-role"
);

const memberAvatar =
document.getElementById(
"member-avatar"
);

const previousButton =
document.getElementById(
"previous-btn"
);

const nextButton =
document.getElementById(
"next-btn"
);

const carouselStatus =
document.getElementById(
"carousel-status"
);

/* =====================================
TRACK THE CURRENT INDEX
===================================== */

let currentIndex = 0;

/* =====================================
UPDATE TESTIMONIAL
===================================== */

function updateTestimonial() {

/*
Get the current object
from the array
*/

const currentData =
testimonialsData[
currentIndex
];

/*
Update name
*/

testimonialName.textContent =
currentData.name;

/*
Update quote
*/

testimonialQuote.textContent =
currentData.quote;

/*
Update role
*/

testimonialRole.textContent =
currentData.role;

/*
Get the first letter
of the member's name
*/

memberAvatar.textContent =
currentData.name.charAt(0);

/*
Increase the index
*/

currentIndex++;

/*
Reset the index when
it reaches array length
*/

if (
currentIndex ===
testimonialsData.length
) {

```
currentIndex = 0;
```

}

}

/* =====================================
START AUTO-ROTATION
===================================== */

let carouselInterval =
setInterval(
updateTestimonial,
3000
);

/* =====================================
NEXT BUTTON
===================================== */

nextButton.addEventListener(
"click",
function () {

```
/*
   Stop automatic timer
*/

clearInterval(
  carouselInterval
);


/*
   Show next testimonial
*/

updateTestimonial();


/*
   Update status
*/

carouselStatus.textContent =
  "Auto-rotation paused. You are using manual controls.";
```

}
);

/* =====================================
PREVIOUS BUTTON
===================================== */

previousButton.addEventListener(
"click",
function () {

```
/*
   Stop automatic timer
*/

clearInterval(
  carouselInterval
);


/*
   currentIndex already points
   to the next testimonial.

   Therefore, subtract 2
   to move to the previous one.
*/

currentIndex -= 2;


/*
   Handle negative index
*/

if (
  currentIndex < 0
) {

  currentIndex =
    testimonialsData.length - 1;

}


/*
   Display previous item
*/

updateTestimonial();


/*
   Update status
*/

carouselStatus.textContent =
  "Auto-rotation paused. You are using manual controls.";
```

}
);

/* =====================================
CONSOLE MESSAGE
===================================== */

console.log(
"Day 18 carousel is running!"
);
