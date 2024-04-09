import React, { useEffect, useState } from 'react';
import Animes from "./AnimeIndex";

function App() {
  const animeMap = {
    1: { name: "naruto", quotes: Animes.quotes["naruto"], backgrounds: Animes.backgroundInfo["naruto"] },
    2: { name: "haikyu", quotes: Animes.quotes["haikyu"], backgrounds: Animes.backgroundInfo["haikyu"] },
    3: { name: "attackOnTitan", quotes: Animes.quotes["attackOnTitan"], backgrounds: Animes.backgroundInfo["attackOnTitan"] },
    4: { name: "demonSlayer", quotes: Animes.quotes["demonSlayer"], backgrounds: Animes.backgroundInfo["demonSlayer"] },
    5: { name: "onePiece", quotes: Animes.quotes["onePiece"], backgrounds: Animes.backgroundInfo["onePiece"] }
  };

  const [currentTime, setCurrentTime] = useState('');

  const randomAnimeNumber = Math.floor(Math.random() * Object.keys(animeMap).length) + 1;
  const animeInfo = animeMap[randomAnimeNumber];
  const randomBackgroundNumber = Math.floor(Math.random() * animeInfo.backgrounds.length);

  const getRandomAnimeQuote = () => {
    const randomQuoteNumber = Math.floor(Math.random() * animeInfo.quotes.length);
    
    return {
      quote: animeInfo.quotes[randomQuoteNumber].quote,
      speaker: animeInfo.quotes[randomQuoteNumber].speaker,
      anime: animeInfo.quotes[randomQuoteNumber].anime
    };
  };
  
  const getRandomAnimeBackground = () => {
    return {
      url: animeInfo.backgrounds[randomBackgroundNumber].url,
      attribution: animeInfo.backgrounds[randomBackgroundNumber].attribution,
      attributionUrl: animeInfo.backgrounds[randomBackgroundNumber].attributionUrl,
      fileName: animeInfo.backgrounds[randomBackgroundNumber].fileName,
    };
  };

  const { quote, speaker, anime } = getRandomAnimeQuote();
  const { url, attribution, attributionUrl, fileName } = getRandomAnimeBackground();

  const backgroundStyle = {
    backgroundImage: `url(backgrounds/${animeInfo.name}/${fileName})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = now.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    setCurrentTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <div style={backgroundStyle} className="bg-black text-white h-screen flex flex-col align-middle justify-center items-center relative overflow-hidden">
      <div className='text-white text-center h-screen'>

        {/* Middle Content */}
        <div className='absolute flex flex-col inset-0 items-center justify-center xl:px-64 lg:px-48 md:px-32 sm:px-20'>
          <div className='font-rubik font-medium text-9xl' style={{ textShadow: '0px 0px 25px rgba(0, 0, 0, 0.8), 0px 0px 25px rgba(0, 0, 0, 0.8), 0px 0px 25px rgba(0, 0, 0, 0.8)' }}>
            <p>{currentTime}</p>
          </div>
          <div className='font-oswald text-6xl mt-10 mb-10 leading-18' style={{ textShadow: '0px 0px 25px rgba(0, 0, 0, 0.8), 0px 0px 25px rgba(0, 0, 0, 0.8), 0px 0px 25px rgba(0, 0, 0, 0.8)' }}>
            <p>{quote}</p>
          </div>
          <div className='font-rubik text-2xl' style={{ textShadow: '0px 0px 15px rgba(0, 0, 0, 0.8), 0px 0px 15px rgba(0, 0, 0, 0.8), 0px 0px 15px rgba(0, 0, 0, 0.8)' }}>
            <p>{speaker}</p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute flex flex-col inset-0 items-center justify-end px-64 text-xs text-white text-opacity-50 mb-2" style={{ textShadow: '0px 0px 7px rgba(0, 0, 0, 0.8), 0px 0px 7px rgba(0, 0, 0, 0.8)'}}>
          <p className='mb-1'>Quote From: {anime}</p>
          <p><a href={attributionUrl} target="_blank">Background {attribution}</a></p>
        </div>

      </div>
    </div>
  );
}

export default App;
