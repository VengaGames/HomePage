import { NavLink } from "react-router-dom";
import manette from "/assets/manette.svg";
import { vengaGames } from "../../constants";

const Home = () => {
  return (
    <div className="flex flex-row flex-wrap pt-10 gap-10 justify-center items-center mb-10">
      {Object.values(vengaGames).map((game, i) => (
        <div key={i} className="flex flex-col justify-center items-center">
          <div className="justify-center bg-[#1e1f29] rounded-lg p-5">
            <img className="object-cover w-56 h-56 rounded-lg" src={game.img} alt="jeu de la playlist" />
            <p className="pt-5 text-center font-semibold whitespace-nowrap dark:text-white">{game.name}</p>
          </div>
          <NavLink
            className="mt-10 bg-[#FDFDFD] rounded-3xl text-center w-56 flex flex-row justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            to={`/login?game=${game.to}`}
            end>
            <p className="p-3 font-semibold">Jouer</p>
            <img className="w-5 h-4" src={manette} alt="manette logo" />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Home;
