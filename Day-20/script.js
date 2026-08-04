/* =====================================
DAY 20
STATEFUL UI & CRUD TASK TRACKER
===================================== */

/* =====================================
SELECT DOM ELEMENTS
===================================== */

const taskInput =
document.getElementById(
"task-input"
);

const addTaskButton =
document.getElementById(
"add-task-btn"
);

const taskList =
document.getElementById(
"task-list"
);

const emptyState =
document.getElementById(
"empty-state"
);

const totalTasks =
document.getElementById(
"total-tasks"
);

const completedTasks =
document.getElementById(
"completed-tasks"
);

const remainingTasks =
document.getElementById(
"remaining-tasks"
);

/* =====================================
APPLICATION STATE
===================================== */

/*
Load tasks from LocalStorage.

If there are no saved tasks,
use an empty array.
*/

let taskState =

JSON.parse(
localStorage.getItem(
"taskState"
)
)

||

[];

/* =====================================
SAVE STATE
===================================== */

function saveTasks() {

localStorage.setItem(

```
"taskState",

JSON.stringify(
  taskState
)
```

);

}

/* =====================================
RENDER TASKS
===================================== */

function renderTasks() {

/*
Clear the existing UI.
*/

taskList.innerHTML =
"";

/*
Create task items
from the state array.
*/

taskState.forEach(
function(task) {

```
  const taskItem =
    document.createElement(
      "li"
    );


  taskItem.classList.add(
    "task-item"
  );


  /*
    Add completed class.
  */


  if (
    task.completed
  ) {

    taskItem.classList.add(
      "completed"
    );

  }


  /*
    Render task.
  */


  taskItem.innerHTML = `

    <input

      type="checkbox"

      class="task-checkbox"

      data-id="${task.id}"

      ${
        task.completed
          ? "checked"
          : ""
      }

    >


    <span
      class="task-text"
    >

      ${task.text}

    </span>


    <button

      class="delete-btn"

      data-id="${task.id}"

      aria-label="Delete task"

    >

      &times;

    </button>

  `;


  taskList.appendChild(
    taskItem
  );

}
```

);

/*
Update statistics.
*/

const completedCount =

```
taskState.filter(
  function(task) {

    return task.completed;

  }
).length;
```

totalTasks.textContent =

```
taskState.length;
```

completedTasks.textContent =

```
completedCount;
```

remainingTasks.textContent =

```
taskState.length

-

completedCount;
```

/*
Show or hide empty state.
*/

if (
taskState.length === 0
) {

```
emptyState.style.display =
  "block";
```

}

else {

```
emptyState.style.display =
  "none";
```

}

/*
Save the latest state.
*/

saveTasks();

}

/* =====================================
CREATE TASK
===================================== */

function addTask() {

/*
Get input value.
*/

const taskText =

```
taskInput.value.trim();
```

/*
Prevent empty tasks.
*/

if (
taskText === ""
) {

```
alert(
  "Please enter a task!"
);

taskInput.focus();

return;
```

}

/*
Create a task object.
*/

const newTask = {

```
id:
  Date.now(),

text:
  taskText,

completed:
  false
```

};

/*
Add task to state.
*/

taskState.push(
newTask
);

/*
Clear input.
*/

taskInput.value =
"";

/*
Re-render UI.
*/

renderTasks();

/*
Return focus.
*/

taskInput.focus();

}

/* =====================================
ADD BUTTON
===================================== */

addTaskButton.addEventListener(

"click",

addTask

);

/* =====================================
ADD USING ENTER
===================================== */

taskInput.addEventListener(

"keydown",

function(event) {

```
if (
  event.key ===
  "Enter"
) {

  addTask();

}
```

}

);

/* =====================================
EVENT DELEGATION
===================================== */

taskList.addEventListener(

"click",

function(event) {

```
/*
  Find delete button.
*/


const deleteButton =

  event.target.closest(
    ".delete-btn"
  );


/*
  DELETE TASK
*/


if (
  deleteButton
) {


  /*
    Convert string ID
    to number.
  */


  const targetId =

    Number(

      deleteButton.getAttribute(
        "data-id"
      )

    );


  /*
    Create a new array
    without the task.
  */


  taskState =

    taskState.filter(

      function(task) {

        return (

          task.id
          !==
          targetId

        );

      }

    );


  /*
    Sync UI.
  */


  renderTasks();

}
```

}

);

/* =====================================
UPDATE TASK
===================================== */

/*
The change event is used
for checkboxes.
*/

taskList.addEventListener(

"change",

function(event) {

```
/*
  Check if a checkbox
  was changed.
*/


if (

  event.target.classList.contains(

    "task-checkbox"

  )

) {


  /*
    Convert ID to number.
  */


  const targetId =

    Number(

      event.target.getAttribute(
        "data-id"
      )

    );


  /*
    Find task in state.
  */


  const selectedTask =

    taskState.find(

      function(task) {

        return (

          task.id
          ===
          targetId

        );

      }

    );


  /*
    Toggle completed state.
  */


  if (
    selectedTask
  ) {

    selectedTask.completed =

      !selectedTask.completed;

  }


  /*
    Sync UI.
  */


  renderTasks();

}
```

}

);

/* =====================================
INITIAL RENDER
===================================== */

renderTasks();
