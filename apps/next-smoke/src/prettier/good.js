/**
 * This file should pass Prettier checks.
 * It follows the formatting rules: 4 spaces, double quotes, 130 line width.
 */

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

export const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
};

export function processData(data) {
    return data.map((item) => ({
        id: item.id,
        name: item.name,
        processed: true,
    }));
}
