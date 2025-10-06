import {FaGift,FaUserCircle} from "react-icons/fa"
// import Image from "next/image"

export default function rightBar() {
  return (
    <div className="hidden sm:block h-screen z-9 p-4 mt-12 sm:w-3/12 overflow-y-hidden">
      <div className="mb-4 pb-4 pr-8 border-b-2 border-gray-200">
        <div className="flex justify-between">
          Friend requests
          <div className="text-blue-700">See All</div>
        </div>
        <div className="flex relative mt-4">
          <div>
          <FaUserCircle className="text-4xl mx-2" />
          </div>
          <div>
          <div className="flex justify-between">
            mohamed ali
            <div className="text-gray-500 text-xs absolute right-0">4d</div>
          </div>
            <div className="text-gray-500 text-xs mb-2">
              3 mutual friends
            </div>
            <div className="flex">
              <button className="px-4 py-2 bg-blue-700 text-white rounded-md">Confirm</button>
              <button className="px-4 py-2 bg-gray-500 text-black rounded-md ml-2">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 border-b-2 border-gray-200 pb-4">
        <div>
        BirthDays
        </div>
        <div className="flex justify-between cursor-pointer pr-4">
        <FaGift className="text-5xl mr-2"/>
        <div>
          <span>Pola Foster</span> and <span>3 other friends</span> have a birthday today.
        </div>
        </div>
      </div>
      <h2 className="cursor-pointer my-2"><b>Online Friends</b></h2>
      <div className="flex mb-2">
        <div className="relative w-3 h-3 rounded-xl">
          <span className="absolute w-3 h-3 left-9 rounded-xl bg-green-500"></span>
          <FaUserCircle className="text-4xl mx-2" />
        </div>
        <div className="cursor-pointer mt-1 mb-2 ml-10">
          Jhon Carter
        </div>
      </div>
    </div>
  )
}
