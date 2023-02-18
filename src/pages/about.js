import React, { Component } from "react";

import pen from '../icons/pen.svg'
import arrow from '../icons/iconArrowBlack.svg'

export default class About extends Component {
  render() {
    return (
      <div className="container section-gap">
        <div className="row d-flex">
          <div className="col-lg-12 m-b-50">
              <div>
                <img className="d-flex icon" src={pen} />
              </div>
              <h5 className="text-left">ABOUT US</h5>
              <div className="d-flex justify-content-between">                
                <span className="text-left introduce">
                  we're proud to say our clients come to <br/>us from all around the world.
                </span>
                <div className="about-arrow">
                <img  className="started-icon" src={arrow}/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
