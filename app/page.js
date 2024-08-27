"use client"
import SideBar from "./components/sideBar";
import Feed from "./components/feed";
import Navbar from "./components/navbar";
import Rightbar from "./components/rightBar";

export default function Home() {
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
