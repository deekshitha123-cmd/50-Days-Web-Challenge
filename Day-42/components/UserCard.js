class UserCard extends HTMLElement {

    constructor() {
        super();

        // Create Shadow DOM
        this.attachShadow({
            mode: "open"
        });
    }

    // Attributes to watch
    static get observedAttributes() {
        return ["name", "role"];
    }

    // Runs when element is added to the page
    connectedCallback() {
        this.render();
    }

    // Runs when an attribute changes
    attributeChangedCallback(
        name,
        oldValue,
        newValue
    ) {

        if (oldValue !== newValue) {
            this.render();
        }
    }

    // Create the card
    render() {

        const name =
            this.getAttribute("name") || "Unknown User";

        const role =
            this.getAttribute("role") || "Unknown Role";

        const initial =
            name.charAt(0).toUpperCase();

        this.shadowRoot.innerHTML = `

            <style>

                .card {
                    width: 280px;
                    padding: 30px 25px;

                    background: white;

                    border-radius: 18px;

                    text-align: center;

                    box-shadow:
                        0 10px 30px
                        rgba(0, 0, 0, 0.10);

                    transition:
                        transform 0.3s ease,
                        box-shadow 0.3s ease;
                }

                .card:hover {
                    transform: translateY(-10px);

                    box-shadow:
                        0 18px 40px
                        rgba(0, 0, 0, 0.15);
                }

                .avatar {
                    width: 90px;
                    height: 90px;

                    margin: 0 auto 20px;

                    border-radius: 50%;

                    background: linear-gradient(
                        135deg,
                        #4f46e5,
                        #7c3aed
                    );

                    color: white;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    font-size: 32px;
                    font-weight: bold;

                    box-shadow:
                        0 8px 20px
                        rgba(79, 70, 229, 0.3);
                }

                h2 {
                    margin-bottom: 8px;

                    font-size: 22px;

                    color: #1e293b;
                }

                .role {
                    margin-bottom: 18px;

                    font-size: 15px;

                    color: #64748b;
                }

                .status {
                    display: inline-block;

                    padding: 7px 15px;

                    border-radius: 20px;

                    background: #dcfce7;

                    color: #166534;

                    font-size: 13px;

                    font-weight: 600;
                }

            </style>

            <div class="card">

                <div class="avatar">
                    ${initial}
                </div>

                <h2>
                    ${name}
                </h2>

                <p class="role">
                    ${role}
                </p>

                <span class="status">
                    ● Active
                </span>

            </div>
        `;
    }
}


// Register the custom element

customElements.define(
    "user-card",
    UserCard
);