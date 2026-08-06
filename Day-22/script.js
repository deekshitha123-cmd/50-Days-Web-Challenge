// ==========================================
// DAY 22
// INTERSECTION OBSERVER
// ==========================================

// Select all hidden elements

const hiddenElements = document.querySelectorAll(".hidden");

// Create Observer

const observer = new IntersectionObserver(

(entries, observer)=>{

    entries.forEach((entry)=>{

        // If element enters viewport

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            // Animate only once

            observer.unobserve(entry.target);

        }

    });

},

{
    threshold:0.2
}

);

// Observe every hidden element

hiddenElements.forEach((element)=>{

    observer.observe(element);

});