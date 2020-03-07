/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./App.css";
import helados1 from "./helados/helados1.wav";
import helados2 from "./helados/helados2.wav";
import helados3 from "./helados/helados3.wav";
import helados4 from "./helados/helados4.wav";
import helados5 from "./helados/helados5.wav";

let scSrc =
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4819303&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
let twSrc =
  "https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjimmyspacev%2Fstatus%2F1224812067200303112";
let ytSrc = "https://www.youtube.com/embed/sroQRLtiyVU";
let bcSrc = "https://accel.bigcartel.com/";
let bccSrc = "https://jimmyvee.bandcamp.com/";
let igSrc = "https://www.instagram.com/jimmyspacev/";

let ytStyle = "width:100%;height:100%;";
let twStyle =
  "width:100%;height:110%;transform:scale(1.1)translate(0px,-15px);";
let bcStyle =
  "width:300%;height:300%;transform:scale(0.38)translate(-745px,-565px);";

class App extends React.Component {
  state = {
    iframe: ytSrc
  };

  currentFrame = () => {
    return (
      twSrc +
      scSrc +
      ytSrc +
      bcSrc +
      igSrc +
      bccSrc +
      bcStyle +
      ytStyle +
      twStyle
    );
  };

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
            <a href={twSrc}>twitter</a>
            <br></br>
            <a href={ytSrc}>youtube</a>
            <br></br>
            <a href={bcSrc}>big cartel</a>
            <br></br>
            <a href={bccSrc}>bandcamp</a>
            <br></br>
            <a href="https://soundcloud.com/cats-kill">soundcloud</a>
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
}

export default App;
