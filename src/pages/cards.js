
import React,{ Component } from "react" 
import arrow from '../icons/iconArrowBlack.svg'
import lock from '../icons/lock.svg'
import statics from '../icons/statics.svg'
import instrument from '../icons/instrument.svg'
export default class Cards extends Component {
    render() {
        return (
          <div className="container">
            <div className="row card-inner justify-content-between">
              <div className="card-box bg-color-ly">       
                  <div className="icon-card">
                    <img src={lock} />
                  </div>
                  <h4 className="text-left">total projects</h4>                  
                  <div className="counter text-left">
                    <span>Assumptions about a product, an audience, and what is possible.</span>
                  </div>
                  <h6 className="text-left">
                   <a href="#"> Visit Gallery</a>
                    <img className="icon started-icon ver-mid" src={arrow}/>
                  </h6>
              </div>
              <div className="card-box bg-color-lb">                                
                <div className="icon-card">
                  <img src={statics} />
                  </div>
                  <h4 className="text-left">total projects</h4>
                  <div className="counter text-left">
                    <span>Assumptions about a product, an audience, and what is possible.</span>
                  </div>
                  <h6 className="text-left">
                    <a href="#"> Visit Gallery</a>
                    <img className="icon started-icon ver-mid" src={arrow}/>
                  </h6>
                </div>
              <div className="card-box bg-color-lp">
                  <div className="icon-card">
                    <img src={instrument} />
                  </div>
                  <h4 className="text-left">total projects</h4>
                  <div className="counter text-left">
                    <span>Assumptions about a product, an audience, and what is possible.</span>
                  </div>
                  <h6 className="text-left">
                    <a href="#"> Visit Gallery</a>
                    <img className="icon started-icon ver-mid" src={arrow}/>
                  </h6>
                </div>
            </div>
          </div>
        )
      }
}