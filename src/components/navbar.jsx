import {FaSearch, FaUserCircle} from "react-icons/fa"
import {IoMdNotifications} from "react-icons/io"
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from 'react'
import {BsSunFill, BsFillMoonStarsFill} from "react-icons/bs"
import Popup from "reactjs-popup";
import { useLogout } from "../hooks/useLogout";
import { AnimatePresence,motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import Chats from "../popups/Chats";
export default function Navbar () {
  const { user } = useAuthContext()
  const [theme, setTheme] = useState("light")
  const { logout } = useLogout()
  const navigate = useNavigate()
  // console.log("conversations in navbar:", conversations)
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
    <div className="z-10 flex justify-between rounded-b-md h-12 w-full  sticky top-0 px-2 py-2 sm:px-12 text-lg">
        <div className="pr-2">
        <a className="pr-2 cursor-pointer" href="/">
          <span>Facebook</span>
        </a>
        </div>
        <div className="search flex relative bg-white rounded-md">
          <FaSearch className="absolute top-2 left-2"/>
          <input className="rounded sm:w-96 px-8" type="text" placeholder="Search..." />
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
          Notifications list
          </Popup>
          <Popup trigger={<button className="ml-2"><FaUserCircle /></button>} position="bottom right" closeOnDocumentClick>
            <div className='bg-white w-60 h-60 py-2 px-4 rounded'>
                <div className='text-lg '>
                  {user ?
                <>
                  <div>{user.firstname + " " + user.lastname}</div>
                  <div>{user.email}</div>
                </>  
                  : null
                }
                  <div><button className='pr-4 pl-4 pb-1' onClick={handelClick}>
                    Log Out</button></div>
                </div>
            </div>
            </Popup>   
      </div>
    </div>
  );
};

