import React, { Component } from "react";
import "./App.css";
import * as icons from "./icons/animals";
import canvg from "canvg";
import { svgAsPngUri } from "save-svg-as-png";

// Components
import ClipBoard from "./components/ClipBoard";
import ShareIcon from "./components/ShareIcon";
import ShareMenu from "./components/ShareMenu";
import CloseShareMenuIcon from "./components/CloseShareMenuIcon";

const LargeImage = props => {
  return Object.keys(icons).map((icon, i) => {
    const Icon = icons[icon];
    const iconic =
      props.icon === icon ? (
        <Icon
          key={i}
          name={icon}
          value={`icon-${1}`}
          index={i}
          size="250"
          houseText={props.houseText}
          fontClassName={props.fontClassName}
          sloganText={props.sloganText}
          foregroundColor={props.foregroundColor}
          stroke={props.stroke}
          textColor={props.textColor}
          backgroundColor={props.backgroundColor}
          fillOpacity={props.fillOpacity}
        />
      ) : null;
    return iconic;
  });
};

const Header = props => {
  return <div className="App-header"> SIGILS </div>;
};

class App extends Component {
  constructor() {
    super();
    window.colors = {
      red: "#FF4136",
      coral: "#ff7675",
      orange: "#FF851B",
      lightYellow: "#ffeaa7",
      yellow: "#FFDC00",
      lime: "#01FF70",
      green: "#2ECC40",
      olive: "#3D9970",
      aqua: "#7FDBFF",
      lightBlue: "#74b9ff",
      teal: "#39CCCC",
      blue: "#0074D9",
      navy: "#001f3f",
      fuschia: "#F012BE",
      mediumPurple: "#6c5ce7",
      lightPurple: "#a29bfe",
      purple: "#B10DC9",
      black: "#111111",
      maroon: "#85144b",
      gray: "#AAAAAA",
      silver: "#b2bec3",
      white: "white"
    };
    this.state = {
      icon: "Bat",
      text: "Coolio",
      shareMenu: false,
      sigilPng: null,
      color: "red",
      fontClassName: null,
      stroke: null,
      houseText: "HOUSE RUDASHEVSKI",
      textColor: null,
      backgroundColor: "white",
      backgroundOpacity: 0
    };
  }

  componentDidMount() {
    this.loadFacebookApi();
  }

  loadFacebookApi = () => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: "528392401010453",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v3.2"
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  onClick = event => {
    this.setState({
      [event.currentTarget.attributes[1].value]:
        event.currentTarget.attributes[0].value
    });
  };

  onOutlineClick = event => {
    this.setState({ stroke: event.currentTarget.attributes[0].value });
  };

  onBackgroundClick = event => {
    this.setState({
      backgroundColor: event.currentTarget.attributes[0].value,
      backgroundOpacity: "1"
    });
  };

  convertToPng = () => {
    const that = this;
    const svg = document.querySelector("svg");
    svgAsPngUri(svg, {}, function(uri) {
      that.setState({ sigilPng: uri, shareMenu: true });
    });
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  onHouseTextChange = event => {
    this.setState({ houseText: event.target.value });
  };

  onFontSelect = event => {
    this.setState({ fontClassName: event.target.className });
  };

  onFontColorClick = event => {
    this.setState({ textColor: event.currentTarget.attributes[0].value });
  };

  render() {
    const {
      text,
      icon,
      color,
      fontClassName,
      stroke,
      houseText,
      textColor,
      backgroundColor,
      backgroundOpacity
    } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div
          className="App"
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            margin: "0",
            overflowY: "hidden"
          }}
        >
          <div style={{ marginTop: 20 }}>
            <LargeImage
              fontClassName={fontClassName}
              foregroundColor={color}
              sloganText={text}
              icon={icon}
              stroke={stroke}
              houseText={houseText}
              textColor={textColor}
              backgroundColor={backgroundColor}
              backgroundOpacity={backgroundOpacity}
            />
          </div>
          <ClipBoard
            onFontSelect={this.onFontSelect}
            onChange={this.onChange}
            onClick={this.onClick}
            onOutlineClick={this.onOutlineClick}
            onHouseTextChange={this.onHouseTextChange}
            onFontColorClick={this.onFontColorClick}
            onBackgroundClick={this.onBackgroundClick}
          />
          <ShareIcon onClick={this.convertToPng} />
        </div>
        <ShareMenu
          onClick={() => this.setState({ shareMenu: false })}
          isOpen={this.state.shareMenu}
          convertToPng={this.convertToPng}
          src={this.state.sigilPng}
          quote={this.state.text}
          house={this.state.houseText}
        />
      </React.Fragment>
    );
  }
}

export default App;
