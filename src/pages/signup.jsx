import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { motion } from "framer-motion"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const { signup, error, isLoading } = useSignup()
  const Navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(firstname, lastname, email, password)
    Navigate("/")
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      Navigate("/")
    }
}, [])
  return (
    <motion.div className="h-[calc(100vh-120px)] flex justify-center items-center"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }} exit={{ opacity: 0, y: 20 }}>
      <form className='bg-white rounded-md shadow-xl h-auto w-96 max-w-md py-6 px-6' onSubmit={handleSubmit}>
        <h3 className='pb-5 text-4xl font-light'>Sign up</h3>
        <div className='formdiv h-12 mb-4 relative'>
          <input type="name" placeholder=' '
            className='peer block w-full rounded-md border-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-0 focus:outline-none'
            onChange={(e) => setFirstname(e.target.value)} value={firstname} />
          <label className='absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent
      peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white'>firstname</label>
        </div>
        <div className='formdiv h-12 mb-4 relative'>
          <input type="name" placeholder=' '
            className='peer block w-full rounded-md border-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-0 focus:outline-none'
            onChange={(e) => setLastname(e.target.value)} value={lastname} />
          <label className='absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent
      peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white'>lastname</label>
        </div>
        <div className='formdiv h-12 mb-4 relative'>
          <input type="email" placeholder=' '
            className='peer block w-full rounded-md border-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-0 focus:outline-none'
            onChange={(e) => setEmail(e.target.value)} value={email} />
          <label className='absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent
      peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white'>Email</label>
        </div>
        <div className='formdiv h-12 mb-2 relative'>
          <input type="password" placeholder=' '
            className='peer block w-full rounded-md border-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-0 focus:outline-none'
            onChange={(e) => setPassword(e.target.value)} value={password} />
          <label className='absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-500 transition-all
      peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent
      peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:bg-white'>Password</label>
        </div>
        <motion.button initial={{ x: -250 }} animate={{ x: -10 }} transition={{ delay: .5, type: 'spring', stiffness: 500 }}
          className='py-2 px-2 bg-purple-700 ml-auto mt-4 w-20 block cursor-pointer text-white rounded-lg' disabled={isLoading}>Sign up</motion.button>
        {error && <div className='error'>{error}</div>}
      </form>
      {/* <div>you dont have an account?<Link className='ml-4 text-lg' to="/signup">Signup</Link></div> */}
    </motion.div>
  )
}

export default Signup