import { useEffect, useState } from "react";

const useLocalStorage = (key, initialState) => {
    const [state, setState] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialState;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
};

export default useLocalStorage;