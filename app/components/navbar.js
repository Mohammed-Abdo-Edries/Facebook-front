"use client";
import Link from "next/link";
import {FaSearch} from "react-icons/fa"
import {IoMdNotifications} from "react-icons/io"
import {FaUser} from "react-icons/fa"
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar () {
  const { user } = useAuthContext();

  return (
    <div className="navbar z-10 justify-between flex rounded-b-md h-12 w-full bg-blue-500 sticky top-0 max-w-full px-2 py-2 sm:px-12 text-lg">
        <div className="pr-2">
        <Link className="pr-2 text-white cursor-pointer" href="/">
          <span>Facebook</span>
        </Link>
        <Link href="/login">login</Link>
        <Link href="/signup">signup</Link>
        </div>
        {/* {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )} */}
        <div className="search flex relative bg-white rounded-md">
          <FaSearch className="absolute top-2 left-2"/>
          <input className="rounded sm:w-96 px-8" type="text" placeholder="Search..." />
        </div>
      <div className="flex justify-between relative">
        {user ?
        <div className="mr-8">{user.firstname + " " + user.lastname}</div>
        : null
      }
        <div className="">
        <IoMdNotifications className="absolute top-2 right-2"/>
        <FaUser className="absolute top-2"/>      
        </div>
          {/* <img
            src={user.profilePic || null} 
            alt=""
          /> */}
      </div>
    </div>
  );
};

