import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        const response = await fetch('https://my-vault-secure-app-api.vercel.app/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsLoading(false)
            console.log(json.error)
            setTimeout(() => { setError('') }, 2000)
        }

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
            setError('')
        }
    }

    return {signup, error, isLoading}
}


