import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { vengaGames } from "../../constants";

const Login = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const gameTo = query.get("game");

  useEffect(() => {
    if (!gameTo) return navigate("/");
    if (!vengaGames[gameTo]) return navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameTo]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const room = e.target.elements.room.value;
    const name = e.target.elements.name.value;
    const siteLink = `${vengaGames[gameTo]?.url}/game?room=${room}&name=${name}`;
    window.location.href = siteLink;
  };

  return (
    <>
      <NavLink to="/" end className="absolute">
        <HiArrowLeft className="text-white ml-2 mt-2 w-10 h-10 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" alt="icone fleche retour" />
      </NavLink>
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h1 className="text-lg my-6 text-white font-semibold ">{vengaGames[gameTo]?.name}</h1>
        <form onSubmit={handlesubmit} className="flex flex-col bg-[#1e1f29] rounded-xl">
          <input
            placeholder="Nom de la room"
            autoComplete="off"
            className="mt-6 bg-[#494B5A] !ring-0 !outline-none rounded-lg text-white shadow-md shadow-[rgba(0, 0, 0, 0.25)] p-6 py-3 font-semibold mr-6 ml-6  "
            required
            type="text"
            name="room"
            maxLength={15}
            onInvalid={(e) => e.target.setCustomValidity("Choisis un nom de salle !")}
          />
          <input
            placeholder="Ton Pseudo"
            autoComplete="off"
            className="bg-[#494B5A] !ring-0 !outline-none rounded-lg text-white shadow-md shadow-[rgba(0, 0, 0, 0.25)] p-6 py-3 font-semibold mt-2 mr-6 ml-6 "
            required
            name="name"
            type="text"
            maxLength={15}
            onInvalid={(e) => e.target.setCustomValidity("Choisis un pseudo !")}
          />
          <div className="flex justify-center">
            <button className="bg-[#FDFDFD] rounded-3xl text-center flex flex-row justify-center items-center my-4 p-2 font-semibold" type="submit">
              Rejoindre
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
