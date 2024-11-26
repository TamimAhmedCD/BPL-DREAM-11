import { useState } from "react";
import PlayerCard from "./PlayerCard";
import SelectedPlayerCard from "./SelectedPlayerCard";
import playersData from "../../public/plyer.json";
import { PropTypes } from "prop-types";

const MainSection = ({
  money,
  selectPlayer,
  selectedPlayers,
  removePlayer,
}) => {
  const [showSelected, setShowSelected] = useState(false);

  return (
    <div className="main-section">
      <div className="pt-10 px-6 lg:px-14">
        <div className="flex justify-end">
          <div className="flex">
            <button
              onClick={() => setShowSelected(false)}
              className={`${
                setShowSelected.false
                  ? "btn rounded-none rounded-l-md"
                  : "btn rounded-none rounded-l-md bg-lime-400 border-2 border-lime-500"
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setShowSelected(true)}
              className={`${
                setShowSelected.false
                  ? "btn rounded-none rounded-r-md"
                  : "btn rounded-none rounded-r-md bg-lime-400 border-2 border-lime-500"
              }`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>
      </div>

      {!showSelected ? (
        <div>
          <h1 className="font-bold text-2xl px-6 lg:px-14 pb-5">Available Players</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-14">
          {playersData.map((player) => (
            <PlayerCard
              key={player.plyer_id}
              player={player}
              money={money}
              selectPlayer={selectPlayer}
            />
          ))}
          </div>
        </div>
      ) : (
        <div className="px-6 lg:px-14">
          <h1 className="font-bold text-2xl pb-5">Selected Players ({selectedPlayers.length}/6)</h1>
          {selectedPlayers.map((player) => (<SelectedPlayerCard setShowSelected={setShowSelected} key={player.plyer_id} player={player} removePlayer={removePlayer} /> ))}
          <div className="py-8">
        <span className="px-2 py-5 border-2 border-lime-400 rounded-xl">
          <button
            onClick={() => setShowSelected()}
            className="btn font-bold bg-lime-400 border-none hover:bg-lime-300"
          >
            Add More Player
          </button>
        </span>
      </div>
        </div>
      )}
    </div>
  );
};

MainSection.propTypes = {
  money: PropTypes.any,
  selectPlayer: PropTypes.any,
  selectedPlayers: PropTypes.any,
  removePlayer: PropTypes.any,
};

export default MainSection;
