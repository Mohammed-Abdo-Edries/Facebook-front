"use client"
import {MdOndemandVideo} from "react-icons/md"
import {MdGroups} from "react-icons/md"
import {FaBookmark} from "react-icons/fa"
import {BsFillQuestionCircleFill} from "react-icons/bs"
import {FaBriefcase} from "react-icons/fa"
import {MdEvent} from "react-icons/md"
import {RiGraduationCapFill} from "react-icons/ri"

export default function sideBar() {
  return (
    <div className="h-screen z-8 overflow-y-scroll sm:w-3/12">
      <ul className="relative">
      <li className="cursor-pointer flex pl-8 pr-6 py-2 border-b-2">
        <span className="flex hover:translate-x-2">
        <MdOndemandVideo className="mt-1 mr-1 "/>
        Videos
        </span>
        </li>
      <li className="cursor-pointer flex pl-8 pr-6 py-2 border-b-2">
      <span className="flex hover:translate-x-2">
        <MdGroups className="mt-1 mr-1"/>
        <span>
        Groups
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-8 pr-6 py-2 border-b-2">
      <span className="flex hover:translate-x-2">
        <FaBookmark className="mt-1 mr-1"/>
        <span>
        Bookmarks
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-8 pr-6 py-2 border-b-2">
      <span className="flex hover:translate-x-2">
        <BsFillQuestionCircleFill className="mt-1 mr-1"/>
        <span>
        Questions
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-8 pr-6 py-2 border-b-2">
      <span className="flex hover:translate-x-2">
        <FaBriefcase className="mt-1 mr-1"/>
        <span>
        Jobs
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-8 pr-6 py-2 border-b-2">
      <span className="flex hover:translate-x-2">
        <MdEvent className="mt-1 mr-1"/>
        <span>
        Events
        </span>
      </span>
        </li>
      <li className="cursor-pointer flex pl-8 pr-6 py-2 border-b-2">
      <span className="flex hover:translate-x-2">
        <RiGraduationCapFill className="mt-1 mr-1"/>
        <span>
        Courses
        </span>
      </span>
        </li>
      </ul>
    </div>
  )
}
