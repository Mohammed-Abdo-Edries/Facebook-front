"use client"
import SideBar from "./components/sideBar";
import Feed from "./components/feed";
import Rightbar from "./components/rightBar";

export default function Home() {
  return (
    <div>
    <main className="flex min-h-full flex-row justify-between">
        <SideBar className=""/>
        <Feed className=""/>
        <Rightbar className=""/>
    </main>
    </div>
  );
}
