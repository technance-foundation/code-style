/**
 * This file should fail Prettier checks.
 * It has incorrect formatting: wrong indentation, single quotes, etc.
 */

export function add(a, b) {
	return a + b;
}

export function multiply(a, b) {
	return a * b; // 2 spaces instead of 4
}

export const config = { apiUrl: 'https://api.example.com', timeout: 5000, retries: 3 }; // Single quotes, no formatting

export function processData(data) {
	return data.map((item) => ({ id: item.id, name: item.name, processed: true, another: 'foo', bar: 'baz', baz: Math.random() }));
}
