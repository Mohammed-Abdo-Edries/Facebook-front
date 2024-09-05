"use client"
import {FaGift} from "react-icons/fa"
import Image from "next/image"

export default function rightBar() {
  return (
    <div className="h-screen z-9 p-4 sm:w-3/12 overflow-y-scroll">
      <div className="mb-4 flex">
        <FaGift className="w-10 h-10 mr-2"/>
        <span className="cursor-pointer">
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
        </span>
      </div>
      <Image className="rounded-md" src={"/ad.jpg"} width={300} height={50} alt="ads"/>
      <h2 className="cursor-pointer my-2"><b>Online Friends</b></h2>
      <div className="relative mb-2">
        <span className="absolute bg-green-500 w-3 h-3 rounded-xl"></span>
      <span className="cursor-pointer mb-2"><Image className="rounded-3xl mb-2" src={"/user.jpg"} width={50} height={90} alt="user"/></span>
        Jhon Carter
      </div>
    </div>
  )
}
