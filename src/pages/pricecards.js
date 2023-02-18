
import React,{ Component } from "react" 
import doubleArrow from '../icons/double-arrow.svg'
export default class PriceCards extends Component {
    render() {
        return (
            <div className="pricing-wrap section-gap container d-flex">
              <div className="pricing-item mb-30 regular">
                  <div className="pricing__box pricing__box__free text-center">
                      <div className="pricing-hade">
                          <span>Starter</span>
                          <h3 className="title">Free trial</h3>
                          <p>After 5 days trial $29 per month</p>
                      </div>
                      <div className="pricing-desc">
                        <ul>                          
                        <li>
                            <p>
                            <img className="icon" src={doubleArrow} />
                              300 API Requests/day</p>
                          </li><li>
                            <p>
                              <img className="icon" src={doubleArrow} />
                                300 API Requests/day
                            </p>
                          </li><li>
                            <p>
                            <img className="icon" src={doubleArrow} />
                              300 API Requests/day</p>
                          </li><li>
                            <p>
                            <img className="icon" src={doubleArrow} />
                              300 API Requests/day</p>
                          </li><li>
                            <p>
                            <img className="icon" src={doubleArrow} />
                              300 API Requests/day</p>
                          </li>
                        </ul>
                      </div>
                  </div>
              </div>
              <div className="pricing-item mb-30 regular">
                  <div className="pricing__box pricing__box__pro text-center">
                      <div className="pricing-hade">
                          <span className="pro">Pro</span>
                          <h3 className="title">$79 <span className="date">/Monthly</span></h3>
                          <p>Less limits, more professional</p>
                      </div>
                      <div className="pricing-desc">
                        <ul>
                          <li>
                            <p>
                            <img className="icon" src={doubleArrow} />
                              300 API Requests/day</p>
                          </li>
                          <li>
                            <p>
                            <img className="icon" src={doubleArrow} />
                              300 API Requests/day</p>
                          </li>
                          <li>
                            <p>
                            <img className="icon" src={doubleArrow} />
                              300 API Requests/day</p>
                          </li>
                          <li>
                            <p>
                            <img className="icon" src={doubleArrow} />
                              300 API Requests/day</p>
                          </li>
                          <li>
                            <p>
                            <img className="icon" src={doubleArrow} />
                              300 API Requests/day</p>
                          </li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>
        )
      }
}