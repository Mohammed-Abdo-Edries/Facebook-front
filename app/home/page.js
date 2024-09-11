"use client"
import SideBar from "../components/sideBar";
import Feed from "../components/feed";
import Rightbar from "../components/rightBar";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { redirect } from "next/navigation";
export default function Home() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
  redirect("/")
    }
}, [])
  return (
    <div>
    <Navbar />
    <main className="flex min-h-full flex-row justify-between">
        <SideBar className=""/>
        <Feed className=""/>
        <Rightbar className=""/>
    </main>
    </div>
  );
}
