"use client";
import { createContext, useContext } from "react";
import type { ReactNode } from "react";

interface SymbolContextValue {
    symbol: string;
}

export const SymbolContext = createContext<SymbolContextValue>({ symbol: "" });

/** Hook — use inside any Client Component to read the active stock symbol */
export function useSymbol(): string {
    return useContext(SymbolContext).symbol;
}

/** Client wrapper used by Server Component pages to pass the symbol into the tree */
export function SymbolProvider({
    symbol,
    children,
}: {
    symbol: string;
    children: ReactNode;
}) {
    return (
        <SymbolContext.Provider value={{ symbol }}>
            {children}
        </SymbolContext.Provider>
    );
}
