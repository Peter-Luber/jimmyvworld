/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./App.css";
import helados1 from "./helados/helados1.wav";
import helados2 from "./helados/helados2.wav";
import helados3 from "./helados/helados3.wav";
import helados4 from "./helados/helados4.wav";
import helados5 from "./helados/helados5.wav";

let scFrame =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4819303&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

let twFrame =
  "https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjimmyspacev%2Fstatus%2F1224812067200303112";

let ytFrame = "https://www.youtube.com/embed/sroQRLtiyVU";

class App extends React.Component {
  state = {
    iframe: ytFrame
  };

  currentFrame = () => {
    return twFrame;
  };

  render() {
    console.log(this.currentFrame());
    return (
      <div
        autofocus="true"
        tabIndex="1"
        className="AppX"
        onKeyDown={this.keypressApp}
      >
        <div id="header">
          <span id="headerSpan">jimmy v</span>
        </div>
        <div id="frameContainer">
          <div id="iFrame">
            <iframe
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              width="100%"
              height="100%"
              scrolling="yes"
              frameBorder="no"
              src={this.state.iframe}
            ></iframe>
          </div>
        </div>
        <div id="bioBox">
          <span id="bioSpan">
            <a href="https://www.twitter.com/jimmyspacev">twitter</a>
            <br></br>
            <a href="http://soundcloud.com/cats-kill">soundcloud</a>
            <br></br>
            <a href="https://www.youtube.com/watch?v=sroQRLtiyVU">youtube</a>
            <br></br>
            shizuka world
            <br></br>
            yang metal
          </span>
        </div>
        <div id="foot">
          <span>
            powered by <a href="http://peter.technology">svengali</a>
            <br></br>
            (p.s. try typing "jimmy" on your keyboard)
            <br></br>
          </span>
        </div>
      </div>
    );
  }

  h1 = new Audio(helados1);
  h2 = new Audio(helados2);
  h3 = new Audio(helados3);
  h4 = new Audio(helados4);
  h5 = new Audio(helados5);

  keypressApp = event => {
    if (event.key === "j") {
      this.h1.play();
    } else if (event.key === "i") {
      this.h2.play();
    } else if (event.key === "m") {
      this.h3.play();
    } else if (event.key === "m") {
      this.h4.play();
    } else if (event.key === "y") {
      this.h5.play();
    }
  };
}

export default App;
