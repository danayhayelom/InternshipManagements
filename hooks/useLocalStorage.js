import { useState, useEffect } from 'react';

    function useLocalState(defaultValue, key) {
        const [value, setValue] = useState(() => {
            const localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                try {
                    return JSON.parse(localStorageValue);
                } catch (error) {
                    console.error("Error parsing localStorage value:", error);
                    return defaultValue;
                }
            }
            return defaultValue;
        });
    
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        }, [key, value]);
    
        return [value, setValue];
    }
    
export { useLocalState };
