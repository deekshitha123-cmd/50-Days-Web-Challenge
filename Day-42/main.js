import "./components/UserCard.js";

console.log(
    "Web Components loaded successfully!"
);


// Change the first card after 3 seconds

setTimeout(() => {

    const firstCard =
        document.querySelector("user-card");

    firstCard.setAttribute(
        "name",
        "Deekshitha"
    );

    firstCard.setAttribute(
        "role",
        "Full Stack Developer"
    );

}, 3000);