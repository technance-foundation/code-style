/**
 * This file should pass Biome checks.
 * It follows all the rules defined in the Biome configuration.
 */

export interface User {
	id: number;
	name: string;
	email: string;
}

export function greetUser(user: User): string {
	return `Hello, ${user.name}!`;
}

export function getUserById(users: Array<User>, id: number): User | undefined {
	return users.find((user) => user.id === id);
}
