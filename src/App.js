import Animes from "./AnimeIndex";

function App() {
  const narutoContext = require.context('./assets/naruto/backgrounds', false, /\.(jpg|jpeg|png)$/);
  const narutoBackgroundImages = narutoContext.keys().map(narutoContext);

  const haikyuContext = require.context('./assets/haikyu/backgrounds', false, /\.(jpg|jpeg|png)$/);
  const haikyuBackgroundImages = haikyuContext.keys().map(haikyuContext);

  const attackOnTitanContext = require.context('./assets/attackOnTitan/backgrounds', false, /\.(jpg|jpeg|png)$/);
  const attackOnTitanBackgroundImages = attackOnTitanContext.keys().map(attackOnTitanContext);


  const animeMap = {
    1: { name: "naruto", quotes: Animes.quotes["naruto"], backgrounds: Animes.backgrounds["naruto"], backgroundImages: narutoBackgroundImages },
    2: { name: "haikyu", quotes: Animes.quotes["haikyu"], backgrounds: Animes.backgrounds["haikyu"], backgroundImages: haikyuBackgroundImages },
    3: { name: "attackOnTitan", quotes: Animes.quotes["attackOnTitan"], backgrounds: Animes.backgrounds["attackOnTitan"], backgroundImages: attackOnTitanBackgroundImages }
  };

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
    backgroundImage: `url(${animeInfo.backgroundImages[randomBackgroundNumber]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={backgroundStyle} className="bg-blue-500 text-black h-screen">
      <h1>Quote: {quote}</h1>
      <h1>Speaker: {speaker}</h1>
      <h1>Anime: {anime}</h1>
      <h1>Attribution: {attribution}</h1>
      <h1>{backgroundStyle.backgroundImage}</h1>
      <h1>URL: {url}</h1>
      <h1>{fileName}</h1>
      <h1>{randomBackgroundNumber}</h1>
      <h1>{animeInfo.backgroundImages[randomBackgroundNumber]}</h1>
    </div>
  );
}

export default App;
