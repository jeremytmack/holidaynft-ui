import "./App.css";
import TheShow from "./TheShow.js";
import React, { useState } from "react";
import Axios from "axios";
let audio = new Audio("https://holidaynft.s3.amazonaws.com/alliwant.mp3");
const API_BASE_URL =
  "https://cug34wa55qbaae4zpgcchq7wbq0odurt.lambda-url.us-east-1.on.aws";

function App() {
  const [isShown, setIsShown] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedImage, setNftImage] = useState();
  const start = () => {
    setIsStarted(true);
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

          {!isStarted && <button onClick={start}>START</button>}
          {isStarted && (
            <div class="ring">
              <div class="preloader">
                <div class="preloader__stripe"></div>
                <div class="preloader__stripe"></div>
                <div class="preloader__stripe"></div>
                <div class="preloader__stripe"></div>
                <div class="preloader__stripe"></div>
                <div class="preloader__stripe"></div>
                <div class="preloader__stripe"></div>
                <div class="preloader__stripe"></div>
              </div>
              <h3>Loading...</h3>
            </div>
          )}
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
