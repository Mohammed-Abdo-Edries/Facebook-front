"use client"
import {FaImage} from "react-icons/fa"
import {FaTag} from "react-icons/fa"
import {MdLocationPin} from "react-icons/md"
import {MdEmojiEmotions} from "react-icons/md"
import Image from "next/image"
import Post from "./post"
export default function feed() {
  return (
    <div className="feed h-screen overflow-scroll p-2 sm:w-6/12">
      <div className="firstpost flex flex-col w-full h-24 rounded-md mb-4">
        <Image/>
        <input className="h-fit w-full my-2 pl-2 focus:outline-none" placeholder="Whats's in your mind?"/>
        <hr className="bg-black h-1 mx-1 w-[calc(100%-8px)]"/>
        <div className="px-4 py-4 flex justify-between">
          <div className="flex cursor-pointer">
            <span  className="mt-1 pr-1"><FaImage/></span>
          Photo or Video
          </div>
          <div className="flex cursor-pointer">
            <span className="mt-1 pr-1"><FaTag/></span>
            <span>Tag</span>
          </div>
          <div className="flex cursor-pointer">
            <span className="mt-1 pr-1">
            <MdLocationPin/>
            </span>
            <span>Location</span>
          </div>
          <div className="flex cursor-pointer">
            <span  className="mt-1 pr-1">
            <MdEmojiEmotions/>
            </span>
            <span>Feelings</span>
          </div>
        </div>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
