import { createContext } from 'react';  // bien


export const ResultsContext = createContext();


export function ResultsProvider ({ children }) {

    return (
        <ResultsContext.Provider value={{ }}>
            {children}
        </ResultsContext.Provider>
    )
}
