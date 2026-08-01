/* =====================================
DAY 17:
DARK MODE & THEME PERSISTENCE
===================================== */

/* Select Theme Button */

const themeToggle =
document.getElementById(
"theme-toggle"
);

/* Theme Storage Key */

const themeStorageKey =
"synexus_theme";

/* Update Theme Icon */

function updateThemeButton() {

const isDarkMode =

```
document.documentElement
  .classList
  .contains("dark-theme");
```

if (isDarkMode) {

```
themeToggle.textContent =
  "☀️";

themeToggle.setAttribute(

  "aria-label",

  "Enable light mode"

);
```

} else {

```
themeToggle.textContent =
  "🌙";

themeToggle.setAttribute(

  "aria-label",

  "Enable dark mode"

);
```

}

}

/* Set Correct Icon */

updateThemeButton();

/* Toggle Theme */

themeToggle.addEventListener(

"click",

function () {

```
document.documentElement
  .classList
  .toggle("dark-theme");


const isDarkMode =

  document.documentElement
    .classList
    .contains("dark-theme");


if (isDarkMode) {

  localStorage.setItem(

    themeStorageKey,

    "dark"

  );

} else {

  localStorage.setItem(

    themeStorageKey,

    "light"

  );

}


updateThemeButton();
```

}

);

/* =====================================
DAY 16:
FORM DATA PERSISTENCE
===================================== */

/* Select Form Elements */

const membershipForm =
document.getElementById(
"membershipForm"
);

const nameInput =
document.getElementById(
"name"
);

const emailInput =
document.getElementById(
"email"
);

const draftStatus =
document.getElementById(
"draftStatus"
);

const successMessage =
document.getElementById(
"successMessage"
);

/* Form Storage Key */

const formStorageKey =
"synexus_form_draft";

/* Recover Saved Form Data */

const savedDraft =

localStorage.getItem(
formStorageKey
);

if (savedDraft) {

const recoveredData =

```
JSON.parse(
  savedDraft
);
```

nameInput.value =

```
recoveredData.name || "";
```

emailInput.value =

```
recoveredData.email || "";
```

}

/* Draft Timer */

let draftTimer;

/* Save Form Data */

function saveFormData() {

const formData = {

```
name:
  nameInput.value,

email:
  emailInput.value
```

};

const stringData =

```
JSON.stringify(
  formData
);
```

localStorage.setItem(

```
formStorageKey,

stringData
```

);

draftStatus
.classList
.add("show");

clearTimeout(
draftTimer
);

draftTimer =

```
setTimeout(

  function () {

    draftStatus
      .classList
      .remove("show");

  },

  2000

);
```

}

/* Save Name */

nameInput.addEventListener(

"input",

saveFormData

);

/* Save Email */

emailInput.addEventListener(

"input",

saveFormData

);

/* Submit Form */

membershipForm.addEventListener(

"submit",

function (event) {

```
event.preventDefault();


/* Remove Saved Draft */

localStorage.removeItem(

  formStorageKey

);


/* Clear Form */

membershipForm.reset();


/* Hide Draft Message */

draftStatus
  .classList
  .remove("show");


/* Show Success Message */

successMessage.textContent =

  "✓ Application submitted successfully!";


/* Remove Message */

setTimeout(

  function () {

    successMessage.textContent =
      "";

  },

  4000

);
```

}

);
