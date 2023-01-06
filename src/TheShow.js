import "./App.css";
import Snowfall from "react-snowfall";
import ImageReveal from "./ImageReveal.js";
import Notes from "./Notes.js";
import React, { useState } from "react";
import TreeDay from "./TreeDay.gif";
//import Spotify from "./spotify.png";
import SwitchDay from "./btnDay.gif";
import SwitchNight from "./btnNight.gif";
import Moon from "./moon.png";
let beep = new Audio("https://holidaynft.s3.amazonaws.com/beep.mp3");

function TheShow({ selectedImage }) {
  const [isShown, setIsShown] = useState(false);
  const [isGiftShown, setGiftIsShown] = useState(false);
  const [IsNotesShown, setShowNotes] = useState(false);
  const showSun = () => {
    setIsShown(isShown ? false : true);
  };
  const playBeep = () => {
    beep.play();
    setGiftIsShown(true);
  };
  const closeModal = () => {
    setGiftIsShown(false);
  };

  const showNotes = () => {
    if (IsNotesShown) {
      setShowNotes(false);
    } else {
      setShowNotes(true);
    }
  };
  return (
    <div className="container">
      {isGiftShown && (
        <ImageReveal selectedImage={selectedImage} closeModal={closeModal} />
      )}
      {/*
        This is the library, code and integration suggested by ChatGPT!
      */}
      <Snowfall />
      <div className="hhTitle">
        <h1>
          <span>
            Happy
            <img src="holly.png" alt="holly" className="holly" />
          </span>{" "}
          <span>Holidays</span>
        </h1>
      </div>
      <img
        src="/info-icon.png"
        alt="What is this?"
        rel="noreferrer"
        className="btnNotes"
        onClick={showNotes}
      />
      {IsNotesShown && <Notes showNotes={showNotes} />}

      <img
        className="daySwitch"
        src={isShown ? SwitchDay : SwitchNight}
        alt="Carpe Diem!"
        onClick={showSun}
      />
      <div className={`skyBg ${isShown ? "showDay" : "showNight"}`}></div>
      <div className={`sun ${isShown ? "showSun" : ""}`}></div>
      <div className={`spotify ${isShown ? "showSpotify" : ""}`}>
        <h4>Enjoy a Happy Holiday Spotify Playlist!</h4>
        <a
          href="https://open.spotify.com/playlist/64Hc0KPuqrLwmErNH23O3F?si=aefbb204753e406a"
          target="_blank"
          rel="noreferrer"
        >
          <img src="spot.png" alt="Holiday Spotify Playlist" />
        </a>
        <div className="modal-text-sm">
          (scan with your spotify app or click from your computer)
        </div>
      </div>
      <div className={`moon ${!isShown ? "showMoon" : ""}`}>
        <img src={Moon} alt="Good Night!" className="img-moon" />
      </div>
      <div className="animateIt">
        <div
          className={isShown ? "griswold-lights-off" : "griswold-lights-on"}
        ></div>
        <img
          className="griswold"
          src="griswold.png"
          alt="Holiday Road"
          onClick={playBeep}
        />
      </div>
      <div>
        <div className="ground"></div>

        <div className="snowScape">
          <div className="tree-canvas-fore">
            <div
              className={isShown ? "tree-lights-off" : "tree-lights-on"}
            ></div>
            <img
              src={isShown ? TreeDay : TreeDay}
              alt="tree"
              className="tree"
            />
          </div>
          <div className="tree-canvas">
            <div
              className={isShown ? "tree-lights-off" : "tree-lights-on"}
            ></div>
            <img
              src={isShown ? TreeDay : TreeDay}
              alt="tree"
              className="tree"
            />
          </div>
        </div>
        <div className="snowScapeTwo">
          <div className="tree-canvas-sm tree-bg-pos-one">
            <div
              className={isShown ? "tree-lights-off" : "tree-lights-on"}
            ></div>
            <img
              src={isShown ? TreeDay : TreeDay}
              alt="tree"
              className="tree"
            />
          </div>
          <div className="tree-canvas-med tree-bg-pos-two">
            <div
              className={isShown ? "tree-lights-off" : "tree-lights-on"}
            ></div>
            <img
              src={isShown ? TreeDay : TreeDay}
              alt="tree"
              className="tree"
            />
          </div>
          <div className="tree-canvas-sm tree-bg-pos-three">
            <div
              className={isShown ? "tree-lights-off" : "tree-lights-on"}
            ></div>
            <img
              src={isShown ? TreeDay : TreeDay}
              alt="tree"
              className="tree"
            />
          </div>
          <div className="tree-canvas-med tree-bg-pos-four">
            <div
              className={isShown ? "tree-lights-off" : "tree-lights-on"}
            ></div>
            <img
              src={isShown ? TreeDay : TreeDay}
              alt="tree"
              className="tree"
            />
          </div>
          <div className="tree-canvas-sm tree-bg-pos-five">
            <div
              className={isShown ? "tree-lights-off" : "tree-lights-on"}
            ></div>
            <img
              src={isShown ? TreeDay : TreeDay}
              alt="tree"
              className="tree"
            />
          </div>
          <div className="tree-canvas-sm tree-bg-pos-six">
            <div
              className={isShown ? "tree-lights-off" : "tree-lights-on"}
            ></div>
            <img
              src={isShown ? TreeDay : TreeDay}
              alt="tree"
              className="tree"
            />
          </div>
        </div>
        <ul
          className="christmas-lights"
          data-position={`${isShown ? "top-off" : "top"}`}
        >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul
          className="christmas-lights"
          data-position={`${isShown ? "bottom-off" : "bottom"}`}
        >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul
          className="christmas-lights"
          data-position={`${isShown ? "left-off" : "left"}`}
        >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul
          className="christmas-lights"
          data-position={`${isShown ? "right-off" : "right"}`}
        >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default TheShow;
