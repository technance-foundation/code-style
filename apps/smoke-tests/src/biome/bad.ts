/**
 * This file should fail Biome checks.
 * It intentionally violates rules like useExportType.
 */

// Violation: Should use "export type" instead of "export" for type-only exports
export type { User } from "./good";

// Violation: Unused variable
const unusedVariable = "I am not used anywhere";

// Violation: debugger statement
function problematicFunction() {
	debugger;
	return "This has issues";
}

// Violation: Empty block statement
if (true) {
}
