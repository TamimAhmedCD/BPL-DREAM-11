import logoFooter from '../assets/images/banner-main.png';
import { PropTypes } from "prop-types";

const Banner = ({ addCoins }) => {
  return (
<div className="px-6 lg:px-14">
<div className="bg flex flex-col justify-center items-center text-center gap-6">
      <div>
        <img src={logoFooter} alt="" />
      </div>
      <h1 className="text-3xl font-bold text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-gray-400">Beyond Boundaries Beyond Limits</p>
      <span className="p-1 border-2 border-lime-400 rounded-xl">
        <button
          onClick={addCoins}
          className="btn font-bold bg-lime-400 border-none hover:bg-lime-300"
        >
          Claim Free Credit
        </button>
      </span>
    </div>
</div>
  );
};

Banner.propTypes = {
  addCoins: PropTypes.any
};

export default Banner;
