import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { motion } from "framer-motion"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()
  const navigate = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      navigate("/")
    }
}, [])
 const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await login(email, password)
    if (success) {
      navigate("/")
    }
  }
  
  return (
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 h-screen">
    
    {/* Welcome text section */}
    <div className="mt-10 md:mt-10 md:ml-32 md:w-2/5 text-center md:text-left px-4">
      <div className="mb-4 text-3xl md:text-4xl text-blue-500 font-bold">
        Welcome to Facebook
      </div>
      <div className="text-xl md:text-3xl">
        Connect with friends and the world around you on Facebook.
      </div>
    </div>

    {/* Form section */}
    <motion.div
      className="mt-10 sm:mt-8 md:mr-48 flex justify-center md:justify-end w-full md:w-auto"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <form className="bg-white rounded-md shadow-xl h-auto md:w-96 max-w-md py-6 px-6" onSubmit={handleSubmit}>
        
        {/* Email */}
        <div className="formdiv mb-4 relative">
          <div className="relative w-full">
  <div className="relative w-full">
  <input
    type="email"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder=" "
    className="peer block w-full rounded-md border-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-0 focus:outline-none"
  />
  <label
    htmlFor="email"
    className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent
      peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
  >
    Email
  </label>
</div>

</div>

        </div>

        {/* Password */}
        <div className="formdiv mb-4 relative">
          <div className="relative w-full mt-4">
  <div className="relative w-full">
  <input
    type="password"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder=" "
    className="peer block w-full rounded-md border-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-0 focus:outline-none"
  />
  <label
    htmlFor="password"
    className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent
      peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white"
  >
    Password
  </label>
</div>

</div>

        </div>

        {/* Button */}
        <button
          disabled={isLoading}
          type="submit"
          className="w-full py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
        >
          Log in
        </button>

        {/* Error */}
        {error && <div className="error text-red-600 mt-2">{error}</div>}

        {/* Signup link */}
        <div className="mt-4 text-center md:text-left">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-700 hover:underline">
            Signup
          </a>
        </div>
      </form>
    </motion.div>
  </div>
)

}

