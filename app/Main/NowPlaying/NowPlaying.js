/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions/playingActions";
import * as utils from "../actions/utilsActions";
import TabBody from "../components/TabBody";
import AlbumArt from "./components/AlbumArt";
import LoadingComponent from "../components/LoadingComponent";

class NowPlaying extends Component {
    componentDidMount() {
        const { fetchNowPlaying, isLoading } = this.props;
        isLoading();
        fetchNowPlaying();
    }

    render() {
        const { utils, nowPlaying } = this.props;
        const { currentSong } = nowPlaying;
        return (
            <div className="container-fluid widget-container">
              { utils.isLoading ? (<LoadingComponent isLoading={utils.isLoading} />)
              : (<div>
                  <h3>Now Playing</h3>
                  <AlbumArt image={currentSong[3]} />
                  <hr></hr>
                  <div>Song: {currentSong[0]}</div>
                  <div>Artist: {currentSong[1]}</div>
                  <div>Album: {currentSong[2]}</div>
                </div>)
              }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nowPlaying: state.nowPlaying,
        utils: state.utils
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, ...utils }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);

if (module.hot) module.hot.accept();
