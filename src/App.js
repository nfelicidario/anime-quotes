import React from "react";
import backgroundImage from "./1.jpeg";

const NUMBER_OF_ASSETS_FOLDERS = 5

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  let randomAnimeNumber = Math.floor(Math.random() * NUMBER_OF_ASSETS_FOLDERS +1)


  // Get Random Quote
  fetch(`./assets/`./quotes.json')
  .then(response => response.json())
  .then(data => {
    let randomImageNumber = Math.floor(Math.random() * Object.keys(data).length)
    quote = data[randomNumber].quote;
    reference = data[randomNumber].book +  " " + data[randomNumber].reference;
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("reference").innerHTML = reference;
  })
  .catch(error => console.error('Error fetching JSON:', error));

  // Get Random Image


  return (
    <div style={backgroundStyle} className="bg-blue-500 text-white h-screen">
      <h1>hello</h1>
      <h1>{randomAnimeNumber}</h1>
    </div>
  );
}

export default App;
