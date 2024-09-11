"use client"
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { url } from "../http-common"
import { redirect } from 'next/navigation'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
 
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${url}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // local storage
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
            redirect("/home")
        }
    }
    return { login, isLoading, error }
}