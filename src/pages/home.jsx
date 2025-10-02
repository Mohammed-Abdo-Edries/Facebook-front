import SideBar from "../components/sideBar";
import Feed from "../components/feed";
import Rightbar from "../components/rightBar";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="min-h-screen min-w-full flex">
      <Navbar />
      <div className=" justify-between mt-16">
        <SideBar className="w-1/4 p-4" />
        <Feed className="w-1/2 p-4" />
        <Rightbar className="w-1/4 p-4" />
      </div>
    </div>
  );
}
