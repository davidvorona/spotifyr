/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

// make this a stateful component so I can use handleChange and handleSubmit?
class CommunityForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            community_name: "",
            access: ""
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event) {
        this.setState({ community_name: event.target.value });
    }

    handleRadioChange(event) {
        console.log(event.target.value);
        this.setState({ access: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // dispatch action here
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <div className="modal-body">
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
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </form>
        );
    }
}

export default CommunityForm;

if (module.hot) module.hot.accept();
