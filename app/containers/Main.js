import React, { Component } from "react"; // eslint-disable-line no-unused-vars

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as communityActions from "../actions/communityActions";

class Main extends Component {
    render() {
        return (
            <div>{this.props.community}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        community: state.community
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(communityActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
