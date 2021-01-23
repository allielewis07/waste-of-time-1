import React from "react";
import headerVid from "./assets/header_video_portrait.mp4";
import "./pages.css";

function Home() {
  return (
    <div className="header-wrap">
      <video loop muted autoPlay className="split left">
        <source src={headerVid} type="video/mp4" />
      </video>

      <div className="split right">
        <div className="centered">
          <div className="split-title">WASTE OF TIME</div>

          <button className="cta">
            <a href="/TheChallenge"  style={{color:"white"}}> Enter to Play </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
