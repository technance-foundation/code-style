/**
 * This file should fail ESLint checks.
 * It intentionally violates React and Next.js rules.
 */

import React from "react";

// Violation: Missing key prop in array map
export function BadList() {
	const items = ["a", "b", "c"];
	return (
		<ul>
			{items.map((item) => (
				<li>{item}</li>
			))}
		</ul>
	);
}

// Violation: anchor tag without href
export function BadLink() {
	return <a>Click me</a>;
}

// Violation: Unused variable
const unusedComponent = () => <div>Never used</div>;

// Violation: Missing alt attribute on img
export function BadImage() {
	return <img src="/test.jpg" />;
}
