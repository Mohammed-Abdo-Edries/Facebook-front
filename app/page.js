"use client"
import { useState } from 'react'
import { useLogin } from './hooks/useLogin'
import Link from "next/link";
import { motion } from "framer-motion"
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function loginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
  redirect("/home")
    }
}, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }
  return (
    <div className='flex justify-between px-4 bg-orange-200 h-screen'>
      <div className='mt-60 ml-32 w-2/5'>
      <div className='mb-4 text-4xl text-blue-500'>Welcome to facebook</div>
      <div className='text-3xl'>Connect with friends and the world around you on Facebook.</div>
      </div>
    <motion.div className="myform rounded-lg mr-48 flex items-center"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }} exit={{ opacity: 0, y: 20 }}>
      <form className='login bg-white rounded-md h-60 w-96 py-3 px-6' 
      onSubmit={handleSubmit}
      > 
        {/* <h3 className="pb-5 text-4xl">Log in</h3> */}
        <div className="formdiv pt-2 h-12 mb-4 relative">
          <input type="email" placeholder=' ' className="forminput w-full h-full text-lg absolute p-4 bg-none rounded-lg border-2 border-gray-800 outline-none focus:border-blue-500 transition duration-200" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          />
          <label className="formlable absolute rounded-xl text-gray-700 text-base top-2 left-4 p-1">Email</label>
        </div>
        <div className="formdiv h-12 mb-2 relative">
          <input type="password" placeholder=' ' className="forminput w-full h-full absolute text-lg p-4 bg-none rounded-lg  outline-none focus:border-blue-500 transition duration-200" 
          onChange={(e) => setPassword(e.target.value)} value={password} 
          />
          <label className="formlable absolute text-gray-700 text-base top-2 left-4 p-1">Password</label>
        </div>
        <button initial={{ x: -250 }} animate={{ x: -10 }} transition={{ delay: .5, type: 'spring', stiffness: 500 }}
          className='py-2 px-2 bg-purple-700 ml-auto w-20 block cursor-pointer text-white rounded-lg' 
          disabled={isLoading}
          type="submit" >Log in</button>
        {error && <div className='error'>{error}</div>}
        <div className=''>dont have an account? <Link href="/signup" className='text-blue-700'>Signup</Link></div>
      </form>
    </motion.div>
    </div>
  )
}

