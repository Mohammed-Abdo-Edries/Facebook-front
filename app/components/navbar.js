"use client";
import Link from "next/link";
import {FaSearch} from "react-icons/fa"
import {IoMdNotifications} from "react-icons/io"
import {IoChatbubbleEllipsesSharp} from "react-icons/io5"
import {FaUser} from "react-icons/fa"
import { useAuthContext } from "../hooks/useAuthContext";
import Popup from "reactjs-popup";
import { useLogout } from "../hooks/useLogout";
import Conversation from "./Conversation";
import { useGetConversations } from "../hooks/useGetConversations"
import { redirect } from "next/navigation";

export default function Navbar () {
  const { user } = useAuthContext()
  const { loading, conversations, error } = useGetConversations();
  const { logout } = useLogout()
  const handelClick = () => {
    logout()
        redirect("/")
  }
  
  return (
    <div className="navbar z-10 justify-between flex rounded-b-md h-12 w-full bg-blue-500 sticky top-0 max-w-full px-2 py-2 sm:px-12 text-lg">
        <div className="pr-2">
        <Link className="pr-2 text-white cursor-pointer" href="/">
          <span>Facebook</span>
        </Link>
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
        <div className="">
          <Popup trigger={<button><IoChatbubbleEllipsesSharp className="absolute top-2 right-8" /></button>} position={"bottom right"} closeOnDocumentClick>
          <div className='bg-white w-60 h-60 py-2 px-4 rounded'>
          <div className='py-2 flex flex-col overflow-auto'>
			{/* {conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					lastIdx={idx === conversations.length - 1}
				/>
			))} */}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
			{error ? <span className=' mx-auto'>{error}</span> : null}
		</div>
          </div>
          </Popup>
          <Popup trigger={<button><IoMdNotifications className="absolute top-2 right-2"/></button>} position="bottom right" closeOnDocumentClick>
          chat list
          </Popup>
          {/* <button><IoMdNotifications className="absolute top-2 right-2"/></button> */}
        <Popup trigger={<button className="absolute top-2"><FaUser /></button>} position="bottom right" closeOnDocumentClick>
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
    </div>
  );
};

