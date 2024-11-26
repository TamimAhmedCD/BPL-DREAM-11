import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import { toast } from "react-toastify";
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter/Newsletter';

const App = () => {
  const [money, setMoney] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addCoins = () => setMoney(money + 1000000, toast.success('Successfully Claimed') );

  const selectPlayer = (player) => {
    if (selectedPlayers.find(p => p.plyer_id === player.plyer_id)) {
      toast.error("Player already selected.");
    } else if (selectedPlayers.length >= 6) {
      toast.error("You can only select up to 6 players.");
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      setMoney(money - player.player_rate);
      toast.success(`Congrats !! ${player.player_name} is now in your squad`)
    }
  };

  const removePlayer = (plyer_id) => {
    const player = selectedPlayers.find(p => p.plyer_id === plyer_id);
    setSelectedPlayers(selectedPlayers.filter(p => p.plyer_id !== plyer_id));
    setMoney(money + player.player_rate);
    toast.warning('Plyer Removed')
  };

  return (
    <div className="App">
      <Navbar money={money} />
      <Banner addCoins={addCoins} />
      <MainSection 
        money={money} 
        selectPlayer={selectPlayer} 
        selectedPlayers={selectedPlayers} 
        removePlayer={removePlayer} 
      />
      <div className='py-20'><Newsletter></Newsletter></div>
      <Footer></Footer>
    </div>
  );
};

export default App;
