import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { url } from "../http-common"

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()
  const login = async (email, password) => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch(`${url}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    console.log("Login response:", response.status, json);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error || "Login failed");
      return null;
    }

    localStorage.setItem("user", JSON.stringify(json));
    dispatch({ type: "LOGIN", payload: json });
    setIsLoading(false);
    return json;
  } catch (err) {
    console.error("Login failed:", err);
    setIsLoading(false);
    setError(err.message || "Unexpected error");
    return null;
  }
};


  return { login, isLoading, error }
}
