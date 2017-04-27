/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/communitiesActions";

const dispatchSubmit = (dispatch) => {
    const handleSubmit = (event, formData) => {
        event.preventDefault();
        dispatch(actions.createCommunity(formData));
    };

    return handleSubmit;
};

class CommunityForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            community_name: "",
            access: ""
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSubmit = dispatchSubmit(this.props.dispatch);
    }

    handleTextChange(event) {
        this.setState({ community_name: event.target.value });
    }

    handleRadioChange(event) {
        this.setState({ access: event.target.value });
    }

    render() {
        return (
            <div>
              <div className="modal-body container-fluid">
                <form onSubmit={(event) => { this.handleSubmit(event, this.state); }}>
                  <div className="form-group">
                      Name: <input type="text"
                      value={this.state.community_name}
                      onChange={this.handleTextChange}
                      placeholder="Name your community...">
                  </input>
                  </div>
                  <div className="form-group">
                    Public: <input type="radio"
                    value="public"
                    checked={this.state.access === "public"}
                    onChange={this.handleRadioChange}
                    />&nbsp;
                    Private: <input type="radio"
                    value="private"
                    checked={this.state.access === "private"}
                    onChange={this.handleRadioChange}
                    />
                  </div>
                  <input className="pull-right submit-form" type="submit" value="Submit" />
                </form>
            </div>
          </div>
        );
    }
}

export default connect()(CommunityForm);

if (module.hot) module.hot.accept();
