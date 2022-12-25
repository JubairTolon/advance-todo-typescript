import { useState, useEffect } from 'react';


export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonvalue = localStorage.getItem(key)
        if (jsonvalue == null) {
            if (typeof initialValue === 'function') {
                return (initialValue as () => T)()
            } else {
                initialValue
            }
        } else {
            return JSON.parse(jsonvalue)
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue] as [T, typeof setValue]
}