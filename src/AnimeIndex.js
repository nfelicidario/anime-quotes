let Animes = {};

// Import quotes
Animes.quotes = {
  naruto: require("./assets/naruto/quotes.json"),
  haikyu: require("./assets/haikyu/quotes.json"),
  attackOnTitan: require("./assets/attackOnTitan/quotes.json"),
};

// Import background info
Animes.backgroundInfo = {
  naruto: require("./assets/naruto/backgrounds.json"),
  haikyu: require("./assets/haikyu/backgrounds.json"),
  attackOnTitan: require("./assets/attackOnTitan/backgrounds.json"),
};

// Import background images
Animes.backgroundImages = {
    naruto: require("./assets/naruto/backgrounds"),
    haikyu: require("./assets/haikyu/backgrounds"),
    attackOnTitan: require("./assets/attackOnTitan/backgrounds"),
}

export default Animes;
