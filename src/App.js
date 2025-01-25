import React from 'react';
import Globe from './components/Globe';
import MusicNotes from './components/MusicNotes';
import GoldenMusicNote from './components/GoldenMusicNote';
import UnlockingValueText from './components/UnlockingValueText';
import MobileScreen from './components/MobileScreen';
import GoldenNote from './components/GoldenNote';
import LaptopScreen from './components/LaptopScreen';
import LionPaws from './components/LionPaws';
import LogoSlider from './components/LogoSlider';

const App = () => {
  return (
    <div>
      <Globe />
      <GoldenMusicNote />
      <GoldenNote />
      <MobileScreen />
      <MusicNotes />
      <UnlockingValueText />
      <LaptopScreen />
      <LionPaws />
      <LogoSlider />
    </div>
  );
};

export default App;
