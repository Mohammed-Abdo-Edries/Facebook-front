"use client"
import {IoChatbubbleEllipsesSharp} from "react-icons/io5"
import {MdOndemandVideo} from "react-icons/md"
import {MdGroups} from "react-icons/md"
import {FaBookmark} from "react-icons/fa"
import {BsFillQuestionCircleFill} from "react-icons/bs"
import {FaBriefcase} from "react-icons/fa"
import {MdEvent} from "react-icons/md"
import {RiGraduationCapFill} from "react-icons/ri"

export default function sideBar() {
  return (
    <div className="h-screen p-4">
      <ul>
      <li className="mb-4 flex">
        <IoChatbubbleEllipsesSharp />
        <span>Chats</span>
        </li>
      <li className="mb-4 flex">
        <MdOndemandVideo/>
        <span>
        Videos
        </span>
        </li>
      <li className="mb-4 flex">
        <MdGroups/>
        <span>
        Groups
        </span>
        </li>
      <li className="mb-4 flex">
        <FaBookmark/>
        <span>
        Bookmarks
        </span>
        </li>
      <li className="mb-4 flex">
        <BsFillQuestionCircleFill/>
        <span>
        Questions
        </span>
        </li>
      <li className="mb-4 flex">
        <FaBriefcase/>
        <span>
        Jobs
        </span>
        </li>
      <li className="mb-4 flex">
        <MdEvent/>
        <span>
        Events
        </span>
        </li>
      <li className="mb-4 flex">
        <RiGraduationCapFill/>
        <span>
        Courses
        </span>
        </li>
      </ul>
    </div>
  )
}
