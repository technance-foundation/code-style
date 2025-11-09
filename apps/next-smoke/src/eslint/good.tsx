/**
 * This file should pass ESLint checks for Next.js + React.
 * It follows all the rules from the Next.js ESLint config.
 */

import React from "react";

export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
}

export function Button({ onClick, children, disabled = false }: ButtonProps): React.ReactElement {
    return (
        <button disabled={disabled} onClick={onClick} type="button">
            {children}
        </button>
    );
}

export function Greeting({ name }: { name: string }): React.ReactElement {
    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    );
}
