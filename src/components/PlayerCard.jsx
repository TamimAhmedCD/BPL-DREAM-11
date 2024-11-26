import { IoFlagSharp } from "react-icons/io5";
import { PropTypes } from "prop-types";
import { toast } from "react-toastify";

const PlayerCard = ({ player, money, selectPlayer }) => {
  const handleSelect = () => {
    if (money < player.player_rate) {
      toast.warning("Not enough coins.");
    } else {
      selectPlayer(player);
    }
  };

  return (
    <div>
      <div className="">
        <div className="p-4 border-2 rounded-lg">
          <img
            src={player.cover_image}
            alt={player.player_name}
            className="h-60 w-full object-cover rounded-lg"
          />
          <div className="py-6 flex items-center gap-5">
            <img
              src={player.profile_image}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
            <h5 className="text-xl font-bold">{player.player_name}</h5>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <span>
                <IoFlagSharp />
              </span>
              <p className="text-base">{player.player_country}</p>
            </div>
            <p className="text-sm text-gray-500 px-3 py-2 bg-gray-100 rounded-md">
              {player.player_position}
            </p>
          </div>
          <span className="divider"></span>
          <h5 className="font-bold py-2">
            Rating:{" "}
            <span className="text-gray-500">{player.player_rating}</span>
          </h5>
          <div className="flex justify-between items-center pb-2">
            <h4 className="font-bold">Batting Style:</h4>
            <h4 className="text-gray-500">{player.batting_style}</h4>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-bold">Price: ${player.player_rate}</h4>
            <button
              onClick={handleSelect}
              className="bg-transparent btn rounded-md hover:bg-lime-400 border-2 hover:border-lime-500"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.any,
  money: PropTypes.any,
  selectPlayer: PropTypes.any
};

export default PlayerCard;
