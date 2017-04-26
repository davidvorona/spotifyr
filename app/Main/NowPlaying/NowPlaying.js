/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions/playingActions";
import TabBody from "../components/TabBody";
import AlbumArt from "./components/AlbumArt";

class NowPlaying extends Component {
    render() {
        const { song, artist, album, image } = this.props.nowPlaying;
        return (
            <div className="container-fluid widget-container">
              <h3>Now Playing</h3>
              <AlbumArt image={image} />
              <hr></hr>
              <div>Song: {song}</div>
              <div>Artist: {artist}</div>
              <div>Album: {album}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nowPlaying: state.nowPlaying
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);

if (module.hot) module.hot.accept();
