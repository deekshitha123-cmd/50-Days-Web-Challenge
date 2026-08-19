// utils.js

export async function fetchWithRetry(
    url,
    options = {},
    retries = 3,
    backoff = 500
) {
    // Check internet connection
    if (!navigator.onLine) {
        throw new Error("No internet connection detected");
    }

    for (let i = 0; i < retries; i++) {
        try {
            console.log(`Attempt ${i + 1} of ${retries}`);

            const response = await fetch(url, options);

            // Do not retry 400-level errors
            if (response.status >= 400 && response.status < 500) {
                throw new Error(
                    `Client Error: ${response.status} ${response.statusText}`
                );
            }

            // Retry 500-level server errors
            if (!response.ok) {
                throw new Error(
                    `Server Error: ${response.status} ${response.statusText}`
                );
            }

            // Successful response
            return response;

        } catch (error) {
            console.error(`Attempt ${i + 1} failed:`, error.message);

            // Last attempt
            if (i === retries - 1) {
                throw error;
            }

            console.log(`Retrying in ${backoff}ms...`);

            // Delay before retry
            await new Promise(resolve => {
                setTimeout(resolve, backoff);
            });

            // Exponential backoff
            backoff *= 2;
        }
    }
}