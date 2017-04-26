/* eslint-disable no-unused-vars, arrow-body-style */
import React, { Component } from "react";

const AppModal = ({ title, ContentComponent }) => {
    return (
        <div className="modal app-modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">{title}</h4>
              </div>
              <ContentComponent />
            </div>
          </div>
        </div>
    );
};

export default AppModal;

if (module.hot) module.hot.accept();
