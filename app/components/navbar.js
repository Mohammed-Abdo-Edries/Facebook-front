"use client";
import Link from "next/link";
import {FaSearch} from "react-icons/fa"
// import {IoChatbubbleEllipsesSharp} from "react-icons/io5"
import {IoMdNotifications} from "react-icons/io"
import {FaUser} from "react-icons/fa"
// import { useContext } from "react";
// import { useDarkmodeContext } from "../context/darkModeContext";
// import { useAuthContext } from "../context/AuthContext";

export default function Navbar () {
  // const { toggle, darkMode } = useDarkmodeContext();
  // const { user } = useAuthContext();

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
      <div className="right flex relative">
        {/* <Link href="/">Homepage</Link> */}
        {/* <IoChatbubbleEllipsesSharp className="absolute top-2 right-8"/> */}
        <IoMdNotifications className="absolute top-2 right-2"/>
        <FaUser className="absolute top-2"/>
        {/* <PersonOutlinedIcon /> */}
        {/* <EmailOutlinedIcon /> */}
        {/* <NotificationsOutlinedIcon /> */}
        <div className="user">
          
          <img
            // src={user.profilePic}
            alt=""
          />
          {/* <span>{user.name}</span> */}
        </div>
      </div>
    </div>
  );
};

// export default Navbar;
