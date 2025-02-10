import { STORAGE_KEY } from "../constants/constants"

export const setToLocalStorage = (pokemons) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemons))
}

export const getFromLocalStorage = () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
}