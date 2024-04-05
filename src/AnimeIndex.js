let Animes = {};

// Import quotes
Animes.quotes = {
  naruto: require("./assets/naruto/quotes.json"),
  haikyu: require("./assets/haikyu/quotes.json"),
  attackOnTitan: require("./assets/attackOnTitan/quotes.json"),
};

// Import backgrounds
Animes.backgrounds = {
  naruto: require("./assets/naruto/backgrounds.json"),
  haikyu: require("./assets/haikyu/backgrounds.json"),
  attackOnTitan: require("./assets/attackOnTitan/backgrounds.json"),
};

export default Animes;
