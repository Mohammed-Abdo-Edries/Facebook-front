import {IoMdThumbsUp} from "react-icons/io"
import {FaHeart} from "react-icons/fa"
import Image from "next/image"

export default function post() {
  return (
    <div className="post border-x-2 border-y-2 border-gray-200 py-2 rounded-md">
        <span className="px-2">Hey! its my first post :)</span>
        <Image className="rounded-md my-4" src={"/ad.jpg"} width={700} height={50} alt="ads" />
        <div className="flex justify-between">
          <div className="flex px-2">
          <IoMdThumbsUp className="text-2xl text-blue-800 mr-2" />
          <FaHeart className="text-2xl text-red-800 mr-2"/>
          <span>30 people liked it</span>
          </div>
          <div>
            <span>9 comments</span>
          </div>
        </div>
    </div>
  )
}
