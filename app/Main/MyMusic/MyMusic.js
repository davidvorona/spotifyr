/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions/musicActions";
import TabBody from "../components/TabBody";
import ActiveTab from "../components/ActiveTab";
import SongsList from "./components/SongsList";
import Playlists from "./components/Playlists";
import BaseComponent from "../components/BaseComponent";

class MyMusic extends Component {
    componentDidMount() {
        const { fetchSpotifyMusic } = this.props;
        fetchSpotifyMusic();
    }

    chooseFetch(activeTab) {
        const { addToQueue, fetchPlaylist, removeFromQueue } = this.props;
        switch (activeTab) {
        case "songs":
            return addToQueue;
        case "playlists":
            return fetchPlaylist;
        case "queue":
            return removeFromQueue;
        default:
            return fetchPlaylist;
        }
    }

    render() {
        const { music, displayMusicTab } = this.props;
        return (
            <div className="container-fluid widget-container">
              <h3>My Music</h3>
              <div className="row center-block">
                <ActiveTab
                  name="Songs"
                  type={["songs", "list", false]}
                  isActive={music.activeTab[0] === "songs"}
                  display={displayMusicTab}
                />
                <ActiveTab
                  name="Playlists"
                  type={["playlists", "list", false]}
                  isActive={music.activeTab[0] === "playlists"}
                  display={displayMusicTab}
                />
                <ActiveTab
                  name="Queue"
                  type={["queue", "list", false]}
                  isActive={music.activeTab[0] === "queue"}
                  display={displayMusicTab}
                />
              </div>
              <TabBody
                  props={music}
                  ListComponent={music.activeTab[0] === "playlists" ? Playlists : SongsList}
                  fetch={this.chooseFetch(music.activeTab[0])}
              />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        music: state.music
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);

if (module.hot) module.hot.accept();
