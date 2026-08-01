/* =====================================
   DAY 16:
   LOCALSTORAGE & DATA PERSISTENCE
===================================== */


/* 
   SELECT HTML ELEMENTS
 */

const membershipForm =
  document.getElementById("membershipForm");

const nameInput =
  document.getElementById("name");

const emailInput =
  document.getElementById("email");

const draftStatus =
  document.getElementById("draftStatus");

const successMessage =
  document.getElementById("successMessage");


/* 
   LOCALSTORAGE KEY
*/

const storageKey =
  "synexus_form_draft";


/* =====================================
   STATE RECOVERY
   Runs when the page loads
===================================== */

const savedDraft =
  localStorage.getItem(storageKey);


/*
Check whether saved data exists.
If data exists, convert it from
JSON text back into a JavaScript object.
*/

if (savedDraft) {

  const recoveredData =
    JSON.parse(savedDraft);


  /*
  Put the saved values back
  into the input fields.
  */

  nameInput.value =
    recoveredData.name || "";

  emailInput.value =
    recoveredData.email || "";

}


/* =====================================
   DRAFT STATUS TIMER
===================================== */

let draftTimer;


/* =====================================
   SAVE FORM DATA
===================================== */

function saveFormData() {

  /*
  Create an object containing
  the current input values.
  */

  const formData = {

    name:
      nameInput.value,

    email:
      emailInput.value

  };


  /*
  Convert the JavaScript object
  into a JSON string.
  */

  const stringData =
    JSON.stringify(formData);


  /*
  Save the JSON string
  inside LocalStorage.
  */

  localStorage.setItem(

    storageKey,

    stringData

  );


  /*
  Show the Draft Saved message.
  */

  draftStatus.classList.add(
    "show"
  );


  /*
  Clear the previous timer.
  This prevents multiple timers
  from running at the same time.
  */

  clearTimeout(
    draftTimer
  );


  /*
  Hide the message after
  2 seconds.
  */

  draftTimer =
    setTimeout(

      function () {

        draftStatus.classList.remove(
          "show"
        );

      },

      2000

    );

}


/* =====================================
   LISTEN FOR INPUT CHANGES
===================================== */

/*
The input event runs every time
the user types, deletes,
or changes a character.
*/

nameInput.addEventListener(

  "input",

  saveFormData

);


emailInput.addEventListener(

  "input",

  saveFormData

);


/* =====================================
   FORM SUBMISSION
===================================== */

membershipForm.addEventListener(

  "submit",

  function (event) {

    /*
    Prevent the page from
    refreshing immediately.
    */

    event.preventDefault();


    /*
    Remove the saved draft
    after successful submission.
    */

    localStorage.removeItem(
      storageKey
    );


    /*
    Clear all form fields.
    */

    membershipForm.reset();


    /*
    Show a success message.
    */

    successMessage.textContent =
      "✓ Application submitted successfully!";


    /*
    Remove the success message
    after 4 seconds.
    */

    setTimeout(

      function () {

        successMessage.textContent =
          "";

      },

      4000

    );

  }

);