/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "./actions/musicActions";
import * as utils from "../actions/utilsActions";
import TabBody from "../components/TabBody";
import ActiveTab from "../components/ActiveTab";
import SongsList from "./components/SongsList";
import Playlists from "./components/Playlists";
import BaseComponent from "../components/BaseComponent";
import LoadingComponent from "../components/LoadingComponent";

class MyMusic extends Component {
    componentDidMount() {
        const { fetchSpotifyMusic, isLoading } = this.props;
        isLoading();
        fetchSpotifyMusic();
    }

    chooseAction(activeTab) {
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
        const { music, utils, displayMusicTab } = this.props;
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
              { utils.isLoading ? (<LoadingComponent isLoading={utils.isLoading} />)
              : (<TabBody
                  props={music}
                  ListComponent={music.activeTab[0] === "playlists" ? Playlists : SongsList}
                  action={this.chooseAction(music.activeTab[0])}
                />)
              }
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        music: state.music,
        utils: state.utils
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, ...utils }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyMusic);

if (module.hot) module.hot.accept();
