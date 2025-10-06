import {MdOndemandVideo} from "react-icons/md"
import {MdGroups} from "react-icons/md"
import {FaBookmark, FaRegCircle, FaUserCircle, FaUserFriends} from "react-icons/fa"
import {MdEvent} from "react-icons/md"
import {RiMemoriesFill} from "react-icons/ri"
import useAuthContext from "../hooks/useAuthContext"
// import {RiGraduationCapFill} from "react-icons/ri"

export default function sideBar() {
    const { user } = useAuthContext()
  return (
    <div className="h-screen z-8 overflow-y-hidden sm:w-3/12">
      <ul className="relative">
      <li className="cursor-pointer flex pl-4 pr-6 py-4">
        <span className="flex hover:translate-x-2">
        <FaUserCircle className="mt-1 mr-2 text-2xl"/>
        <div>{user.firstname + " " + user.lastname}</div>
        </span>
        </li>
      <li className="cursor-pointer flex pl-4 pr-6 py-4">
      <span className="flex hover:translate-x-2">
        <FaRegCircle className="mt-1 mr-2 text-2xl font-bold text-blue-800"/>
        <span>
        Meta AI
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-4 pr-6 py-4">
      <span className="flex hover:translate-x-2">
        <FaUserFriends className="mt-1 mr-2 text-2xl font-bold text-blue-800"/>
        <span>
        Friends
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-4 pr-6 py-4">
      <span className="flex hover:translate-x-2">
        <RiMemoriesFill className="mt-1 mr-2 text-2xl font-bold text-blue-800"/>
        <span>
        Memories
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-4 pr-6 py-4">
      <span className="flex hover:translate-x-2">
        <FaBookmark className="mt-1 mr-2 text-xl font-bold text-blue-800"/>
        <span>
        Saved
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-4 pr-6 py-4">
      <span className="flex hover:translate-x-2">
        <MdGroups className="mt-1 mr-2 text-2xl font-bold text-blue-800"/>
        <span>
        Groups
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-4 pr-6 py-4">
        <span className="flex hover:translate-x-2">
        <MdOndemandVideo className="mt-1 mr-2 text-2xl font-bold text-blue-800"/>
        Videos
        </span>
        </li>
      <li className="cursor-pointer flex pl-4 pr-6 py-4">
      <span className="flex hover:translate-x-2">
        <MdEvent className="mt-1 mr-2 text-2xl font-bold text-blue-800"/>
        <span>
        Events
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-4 pr-6 py-4">
      <span className="flex hover:translate-x-2">
        &#8964;
        <span className="pl-2">
        See More
        </span>
      </span>
        </li>
      </ul>
    </div>
  )
}
