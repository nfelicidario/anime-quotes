let Animes = {};

// Import quotes
Animes.quotes = {
  naruto: require("./assets/naruto/quotes.json"),
  haikyu: require("./assets/haikyu/quotes.json"),
  attackOnTitan: require("./assets/attackOnTitan/quotes.json"),
  demonSlayer: require("./assets/demonSlayer/quotes.json"),
  onePiece: require("./assets/onePiece/quotes.json"),
};

// Import background info
Animes.backgroundInfo = {
  naruto: require("./assets/naruto/backgrounds.json"),
  haikyu: require("./assets/haikyu/backgrounds.json"),
  attackOnTitan: require("./assets/attackOnTitan/backgrounds.json"),
  demonSlayer: require("./assets/demonSlayer/backgrounds.json"),
  onePiece: require("./assets/onePiece/backgrounds.json"),
};

export default Animes;
