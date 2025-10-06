import {IoMdShareAlt, IoMdThumbsUp} from "react-icons/io"
import {FaCommentDots, FaHeart, FaUserCircle} from "react-icons/fa"
import { BsThreeDots } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"
// import Image from "next/image"

export default function post() {
  return (
    <div className="post border-x-2 border-y-2 border-gray-200 py-2 rounded-md">
      <div className="flex mx-4 my-4 relative">
        <FaUserCircle className="mt-1 mr-2 text-3xl"/>
        <div className="">
        <div className="text-xl font-bold">Jhon Doe</div>
        <span className="text-xs">just now</span>
        </div>
        <div className="flex absolute right-0">
          <BsThreeDots className="text-2xl font-bold mr-2" />
          <RxCross2 className="text-2xl font-bold" />
        </div>
      </div>
        <div className="px-4 mb-4 border-b-2 border-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam pariatur 
          minus consectetur! Fugiat libero aperiam ducimus delectus facere eligendi id aspernatur quisquam
           repudiandae minima? Fugit provident doloremque porro maiores et.</div>
        <div className="flex justify-between">
          <div className="flex mx-2">
          <IoMdThumbsUp className="text-2xl text-blue-800 mr-2" />
          <FaHeart className="text-2xl text-red-800 mr-2"/>
          <span>30 people liked it</span>
          </div>
          <div>
            <div className="flex">
            <FaCommentDots className="text-xl font-bold mr-2" />
              <span>
              9 comments
              </span>
              </div>
          </div>
          <div className="flex mr-2" > 
            <IoMdShareAlt className="text-xl font-bold mr-2" />
            <span>Share</span>
          </div>
        </div>
    </div>
  )
}
