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
        <HiArrowLeft className="ml-2 mt-2 h-10 w-10 text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" alt="icone fleche retour" />
      </NavLink>
      <div className="mt-10 flex w-full flex-col items-center justify-center">
        <h1 className="my-6 text-lg font-semibold text-white ">{vengaGames[gameTo]?.name}</h1>
        <form onSubmit={handlesubmit} className="flex flex-col rounded-xl bg-[#1e1f29]">
          <input
            placeholder="Nom de la room"
            autoComplete="off"
            className="shadow-[rgba(0, 0, 0, 0.25)] ml-6 mr-6 mt-6 rounded-lg bg-[#494B5A] p-6 py-3 font-semibold text-white shadow-md !outline-none !ring-0  "
            required
            type="text"
            name="room"
            maxLength={15}
            onInvalid={(e) => e.target.setCustomValidity("Choisis un nom de salle !")}
          />
          <input
            placeholder="Ton Pseudo"
            autoComplete="off"
            className="shadow-[rgba(0, 0, 0, 0.25)] ml-6 mr-6 mt-2 rounded-lg bg-[#494B5A] p-6 py-3 font-semibold text-white shadow-md !outline-none !ring-0 "
            required
            name="name"
            type="text"
            maxLength={15}
            onInvalid={(e) => e.target.setCustomValidity("Choisis un pseudo !")}
          />
          <div className="flex justify-center">
            <button className="my-4 flex flex-row items-center justify-center rounded-3xl bg-[#FDFDFD] p-2 text-center font-semibold" type="submit">
              Rejoindre
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
