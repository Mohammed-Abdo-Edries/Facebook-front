import {FaSearch, FaUserCircle, FaFacebook} from "react-icons/fa"
import {IoMdHome, IoMdNotifications} from "react-icons/io"
import {IoFlagOutline} from "react-icons/io5"
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from 'react'
import {BsSunFill, BsFillMoonStarsFill} from "react-icons/bs"
import Popup from "reactjs-popup";
import { useLogout } from "../hooks/useLogout";
import { AnimatePresence,motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import Chats from "../popups/Chats";
import { MdGroups, MdOndemandVideo } from "react-icons/md";
export default function Navbar () {
  const { user } = useAuthContext()
  const [theme, setTheme] = useState("light")
  const { logout } = useLogout()
  const navigate = useNavigate()
  const variants = {
    hidden: { y: -20, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: { y: 25, opacity: 0 }
  }
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])
useEffect(() => {
  if (user === null) {
    console.log("user is null -> redirecting to /")
    navigate("/", { replace: true })
  }
}, [user, navigate])

const handelClick = async () => {
  await logout()
}

  
  return (
    <div className="fixed top-0 z-50 flex justify-between items-center rounded-b-md h-12 w-full bg-white dark:bg-gray-900 px-2 py-2 sm:px-4 text-lg">
        <div className="pr-2 flex">
        <a className="mr-4 cursor-pointer" href="/">
          <div>
            <FaFacebook className="text-blue-800 text-3xl" />
          </div>
        </a>
        <div className="hidden sm:flex relative bg-white rounded-md">
          <FaSearch className="absolute top-2 left-2"/>
          <input className="rounded sm:w-64 px-8 dark:text-black" type="text" placeholder="Search on facebook" />
        </div>
        </div>
        <div className="hidden sm:flex flex-1 justify-between max-w-xl mx-auto h-full">
    <div className="flex items-center justify-start flex-start h-full px-12 cursor-pointer 
                border-b-4 border-blue-600">
    <IoMdHome className="text-2xl text-blue-800" />
    </div>
    <div className="flex items-center justify-center flex-1 h-full px-12 cursor-pointer 
                hover:bg-gray-100 rounded-lg">
    <IoFlagOutline className="text-2xl text-gray-600" />
    </div>
    <div className=" items-center justify-center flex-1 h-full px-12 cursor-pointer rounded-lg">
    <MdOndemandVideo className="text-2xl text-gray-600" />
    </div>
    <div className="items-center justify-center flex-1 h-full px-12 cursor-pointer rounded-lg">
    <MdGroups className="text-2xl text-gray-600" />
    </div>
    </div>
      <div className="flex justify-end">
          {theme === 'dark' ?
            <AnimatePresence mode='wait' >
              {theme === "dark" && (
                <motion.button key='sun' variants={variants} initial='hidden'
                  animate="enter"
                  exit='exit'
                  transition={{ duration: 0.3 }}
                  className='w-9 h-8 px-4 rounded text-orange-200'
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark")
                  }}>
                  <BsSunFill className='' />
                </motion.button>
              )}
            </AnimatePresence>
            :
            <AnimatePresence mode='wait' >
              {theme === "light" && (
                <motion.button key='moon' initial="hidden"
                  animate="enter" variants={variants}
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className='px-4 w-9 h-8 rounded text-purple-700'
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light")
                  }}>
                  <BsFillMoonStarsFill className='' />
                </motion.button>
              )}
            </AnimatePresence> }
          <Chats />
          <Popup trigger={<button><IoMdNotifications className="ml-2"/></button>} position="bottom right" closeOnDocumentClick>
          <div className="bg-white rounded h-60 w-64 px-4 py-4">
         You have no new Notifications
          </div>
          </Popup>
          <Popup trigger={<button className="ml-2"><FaUserCircle /></button>} position="bottom right" closeOnDocumentClick>
            <div className='text-lg items-center border-2 border-black bg-white w-60 h-60 py-2 px-4 rounded'>
                  {user ?
                  <div className="">
                  <div>
                    <FaUserCircle className="text-9xl" />
                  </div>
                    <div>{user.firstname + " " + user.lastname}</div>
                    <div>{user.email}</div>
                    <div><button className='text-blue-800' onClick={handelClick}>
                    Log Out</button></div>
                  </div>  
                    : 
                    <div>
                      You must login
                    </div>
                  }
            </div>
            </Popup>   
      </div>
      <div className="fixed top-12 z-40 w-full bg-white flex items-center h-11 border-b border-gray-200 sm:hidden dark:bg-gray-800">
    <div className="flex flex-1 items-center justify-center h-full text-blue-600 border-b-4 border-blue-600 text-2xl">
    <IoMdHome className="" />
    </div>
    <div className="flex flex-1 items-center justify-center h-full text-gray-500 dark:hover:bg-gray-700 text-2xl">
    <IoFlagOutline className="text-2xl text-gray-600" />
    </div>
    <div className="flex flex-1 items-center justify-center h-full text-gray-500 dark:hover:bg-gray-700 text-2xl">
    <MdOndemandVideo className="" />
    </div>
    <div className="flex flex-1 items-center justify-center h-full text-gray-500 dark:hover:bg-gray-700 text-2xl">
    <MdGroups className="" />
    </div>
    </div>
    </div>
  );
};

