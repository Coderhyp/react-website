import React, { Component } from "react";
import menuLogo from '../picture/menuLogo.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div id="sticky-header" className="menu-area">
          <div className="custom-container container">
            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="menu-logo">
                  <a href="logo">
                    <img src={menuLogo} alt="Logo" />
                  </a>
                </div>
                <div className="navbar-wrap">
                  <ul className="navigation">
                    <li>
                      <a href="#Work" className="section-link">
                        Work
                      </a>
                    </li>
                    <li>
                      <a href="#Service" className="section-link">
                      Service
                      </a>
                    </li>
                    <li>
                      <a href="#About Us" className="section-link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#Insight" className="section-link">
                        Insight
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-btn primary-btn">Contact Us</div>
              </nav>
            </div>
            <div className="header-line"></div>
          </div>
        </div>
      </div>
    );
  }
}
