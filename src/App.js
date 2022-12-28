import "./App.css";
import TheShow from "./TheShow.js";
import React, { useState } from "react";
import Axios from "axios";
let audio = new Audio("/alliwant.mp3");
//const API_BASE_URL = "http://localhost:8080";
const API_BASE_URL = "http://jeremymack.com";

function App() {
  const [isShown, setIsShown] = useState(false);
  const [selectedImage, setNftImage] = useState();
  const start = () => {
    Axios.get(`${API_BASE_URL}/api/getimages`).then((res) => {
      let images = res.data;
      let randomImage = images[Math.floor(Math.random() * images.length)];
      setNftImage(randomImage);

      audio.play();
      setIsShown(true);
    });
  };
  return (
    <div className="App">
      {!isShown && (
        <div className="startShow">
          <h3>
            <span>Check your volume ;)</span>
          </h3>
          <button onClick={start}>START</button>
          <div className="modal-txt-sm">
            Please view this app on desktop for the best experience. I did not
            optimize for any mobile or table AT ALL ;){" "}
          </div>
        </div>
      )}
      {isShown && <TheShow selectedImage={selectedImage} />}
    </div>
  );
}

export default App;
