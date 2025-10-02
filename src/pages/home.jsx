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
    <div className="w-screen">
      <Navbar />
      <div className="flex justify-between">
        <SideBar className="p-4" />
        <Feed className="p-4" />
        <Rightbar className="p-4" />
      </div>
    </div>
  );
}
