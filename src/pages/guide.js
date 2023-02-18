
import React,{ Component } from "react" 
// 图片 
import guideLeft from '../picture/guideLeft.png';
import startIcon from '../icons/started.svg';
import fire from '../icons/fire.svg';
import arrow from '../icons/iconArrow.svg'

export default class Guide extends Component {
    render() {
        return (
          <div>
            <section className="home-banner-area">
              <div className="container">
                <div className="row fullscreen d-flex align-items-center justify-content-between">
                  <div className="banner-content col-lg-6 col-md-12 justify-content-center">
                    <div>
                     <img className="action-icon m-r-10" src={fire}/>
                      HUMAN CENTRIC EXPERIENCE
                    </div>
                    <h1
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="1.7s"
                    >
                      Startups makes<br/> the world go<br/> round!
                    </h1>                    
                    <a href="#" className="primary-btn transition" data-text="Get Started">
                      Get Started
                      <img className="icon started-icon ver-mid" src={arrow}/>
                    </a>
                    <a href="#" className="primary-btn simplicity-btn m-l-20" data-text="Get Started">
                      See Reviews
                      <img className="icon icon-posi ver-mid " src={startIcon}/>
                    </a>
                  </div>
                  <div className="banner-img ">
                    <img
                      className=""
                      src={guideLeft}
                      alt="personal pic"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      }
}