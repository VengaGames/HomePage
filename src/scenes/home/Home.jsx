import { NavLink } from "react-router-dom";
import manette from "/assets/manette.svg";
import { vengaGames } from "../../constants";

const Home = () => {
  return (
    <div className="mb-10 flex flex-row flex-wrap items-center justify-center gap-10 pt-10">
      {Object.values(vengaGames).map((game, i) => (
        <div key={i} className="flex flex-col items-center justify-center">
          <div className="justify-center rounded-lg bg-[#1e1f29] p-5">
            <img className="h-56 w-56 rounded-lg object-cover" src={game.img} alt="jeu de la playlist" />
            <p className="whitespace-nowrap pt-5 text-center font-semibold dark:text-white">{game.name}</p>
          </div>
          <NavLink
            className="mt-10 flex w-56 flex-row items-center justify-center rounded-3xl bg-[#FDFDFD] text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            to={`/login?game=${game.to}`}
            end
          >
            <p className="p-3 font-semibold">Jouer</p>
            <img className="h-4 w-5" src={manette} alt="manette logo" />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Home;
