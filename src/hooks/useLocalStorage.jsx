import { useEffect, useState } from "react"

const useLocalStorage = (key, initialState) => {
    const [state, setState] = useState(() => {
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) : JSON.parse(initialState)
    })

    // useEffect 내부에 key를 사용했는데 의존성 배열에 추가하지 않을 경우 주의문구가 나온다.
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}

export default useLocalStorage