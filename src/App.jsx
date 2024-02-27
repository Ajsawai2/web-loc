import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <div className="top">
          <div className="user"></div>
          <div className="history">History</div>
          <div className="search">
            <input type="name" placeholder="      search" className="searchw" />
          </div>
        </div>
        <div className="main">
          <div className="row1">
            <div className="s">
              Social Media
              <div className="sr1">
                <img src="/src/assets/logod/instaic.png"></img>
                <img src="/src/assets/logod/fb.png"></img>
              </div>
              <div className="sr2">
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
            </div>
            <div className="m">
              Music
              <div className="sr1">
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
              <div className="sr2">
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
            </div>
            <div className="d">
              Download
              <div className="sr1">
                {" "}
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
              <div className="sr2">
                {" "}
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="s">
              Movies{" "}
              <div className="sr1">
                {" "}
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
              <div className="sr2">
                {" "}
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
            </div>
            <div className="m">
              games{" "}
              <div className="sr1">
                {" "}
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
              <div className="sr2">
                {" "}
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
            </div>
            <div className="d">
              ai tools{" "}
              <div className="sr1">
                {" "}
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
              <div className="sr2">
                {" "}
                <img src="/src/assets/logod/x.png"></img>
                <img src="/src/assets/logod/youtube.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="fot">fot</div>
      </div>
    </div>
  );
}

export default App;
