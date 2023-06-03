import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./scenes/login/Login";
import Home from "./scenes/home/Home";
import vengaicon from "/assets/vengaicon.jpeg";

function App() {
  const bannerHeight = window.innerHeight > 600 ? "h-[7vh]" : "h-[10vh]";
  const navigate = useNavigate();
  return (
    <>
      <div className={`flex flex-row justify-center items-center py-3 cursor-pointer bg-[#242531] ${bannerHeight}`} onClick={() => navigate("/")}>
        <img src={vengaicon} className="h-6 mr-3 sm:h-10 " alt="Venga Logo" />
        <span className="text-xl font-semibold text-white">VengaGAMES</span>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="fixed bottom-0 flex justify-center w-full bg-[#1e1f29]">
        <h3 className="text-white"> Vengaboys © - 2023</h3>
      </div>
    </>
  );
}

export default App;
