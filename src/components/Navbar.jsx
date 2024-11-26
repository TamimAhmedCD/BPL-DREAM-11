import logo from '../assets/images/logo.png';
import coin from '../assets/images/coin.png';
import { PropTypes } from 'prop-types';

const Navbar = ({money}) => {
    return (
        <div className="py-5 md:py-8 sticky top-0 backdrop-blur-2xl px-6 lg:px-14">
            <div className='flex justify-between items-center'>
                <img src={logo} alt="" />
                <div className='flex items-center gap-6'>
                    <a href="#" className='font-medium hidden md:block text-gray-500'>Home</a>
                    <a href="#" className='font-medium hidden md:block text-gray-500'>Fixture</a>
                    <a href="#" className='font-medium hidden md:block text-gray-500'>Teams</a>
                    <a href="#" className='font-medium hidden md:block text-gray-500'>Schedules</a>
                    <button className='btn bg-transparent border-2 hover:bg-transparent flex items-center'>{money} Coin <img width={'20px'} src={coin} alt="" /> </button>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    money: PropTypes.any
}

export default Navbar;