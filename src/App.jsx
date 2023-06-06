import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./scenes/login/Login";
import Home from "./scenes/home/Home";
import vengaicon from "/assets/vengaicon.jpeg";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className={`flex cursor-pointer flex-row items-center justify-center bg-[#1e1f29] py-3`} onClick={() => navigate("/")}>
        <img src={vengaicon} className="mr-3 h-6 sm:h-10 " alt="Venga Logo" />
        <span className="text-xl font-semibold text-white">VengaGAMES</span>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="fixed bottom-0 flex w-full justify-center bg-[#1e1f29]">
        <h3 className="text-white">Vengaboys © - {new Date().getFullYear()} </h3>
      </div>
    </>
  );
}

export default App;
