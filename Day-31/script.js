// ==========================================
// DAY 31 - DATA SCALING
// PAGINATION + INFINITE SCROLL
// ==========================================


// ==========================================
// STATE VARIABLES
// ==========================================

// Current page number
let currentPage = 1;

// Number of posts to load per request
const limit = 10;

// Loading lock
// false = not loading
// true = currently loading
let isLoading = false;

// Used to stop fetching when all data is loaded
let hasMoreData = true;


// ==========================================
// DOM ELEMENTS
// ==========================================

const dataFeed = document.getElementById("data-feed");

const scrollSentinel =
    document.getElementById("scroll-sentinel");


// ==========================================
// FETCH NEXT PAGE
// ==========================================

async function fetchNextPage() {

    // --------------------------------------
    // LOCK
    // --------------------------------------

    // If data is already being loaded,
    // don't make another request.
    if (isLoading || !hasMoreData) {
        return;
    }

    // Lock the function
    isLoading = true;


    // Show loading message
    scrollSentinel.textContent = "Loading more...";


    try {

        // --------------------------------------
        // API REQUEST
        // --------------------------------------

        const url =
            `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`;

        const response = await fetch(url);


        // Check whether request was successful
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }


        // Convert response into JSON
        const data = await response.json();


        // --------------------------------------
        // CHECK FOR END OF DATA
        // --------------------------------------

        if (data.length === 0) {

            hasMoreData = false;

            scrollSentinel.textContent =
                "You've reached the end!";

            observer.disconnect();

            return;
        }


        // --------------------------------------
        // RENDER DATA
        // --------------------------------------

        data.forEach(post => {

            dataFeed.innerHTML += `

                <article class="post-card">

                    <h2>
                        ${post.id}. ${post.title}
                    </h2>

                    <p>
                        ${post.body}
                    </p>

                </article>

            `;

        });


    } catch (error) {

        // --------------------------------------
        // ERROR HANDLING
        // --------------------------------------

        console.error("Error:", error);

        scrollSentinel.textContent =
            "Something went wrong. Please try again.";

    } finally {

        // --------------------------------------
        // UNLOCK
        // --------------------------------------

        isLoading = false;

    }
}


// ==========================================
// INTERSECTION OBSERVER
// ==========================================

const observer = new IntersectionObserver(

    (entries) => {

        const entry = entries[0];


        // Check whether sentinel is visible
        if (entry.isIntersecting) {

            // Move to next page
            currentPage++;

            // Fetch next page
            fetchNextPage();

        }

    },

    {
        // Start loading slightly before
        // the user reaches the exact bottom.
        rootMargin: "200px"
    }

);


// ==========================================
// START OBSERVING SENTINEL
// ==========================================

observer.observe(scrollSentinel);


// ==========================================
// LOAD FIRST PAGE
// ==========================================

fetchNextPage();