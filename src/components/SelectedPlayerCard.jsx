import { MdDeleteForever } from "react-icons/md";
import { PropTypes } from "prop-types";

const SelectedPlayerCard = ({ player, removePlayer}) => {
  return (
    <div>
      <div key={player.plyer_id} className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="flex items-center justify-between">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={player.profile_image}
                        alt={player.player_name}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{player.player_name}</div>
                    <div className="text-sm opacity-50">
                      {player.batting_style}
                    </div>
                  </div>
                </div>
              </td>
              <th>
                <button
                  onClick={() => removePlayer(player.plyer_id)}
                  className="btn"
                >
                  <MdDeleteForever className="text-xl text-rose-600"></MdDeleteForever>
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

SelectedPlayerCard.propTypes = {
  player: PropTypes.any,
  removePlayer: PropTypes.any,
};

export default SelectedPlayerCard;
