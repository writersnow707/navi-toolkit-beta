import React from "react";
import mp3 from "../../Main-BGM.mp3"
import "./MusicPlayer.css"

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.audioRef = React.createRef();
  }

  togglePlay = () => {
    const audio = this.audioRef.current;
    if (this.state.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  render() {
    return (
      <div>
        <audio ref={this.audioRef} src={mp3} controls autoplay />
        <button onClick={this.togglePlay}>
          {this.state.isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default MusicPlayer;
