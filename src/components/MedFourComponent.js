import React from 'react';
import '../style/Medecin4.scss';

const MedFourComponent = () => {

    return <div>
        <div className="med-four-header" >
            {/* <div className="logo">Dr Aloulou <span style={{color: "black"}}> Smith</span></div>
            
            <div className="nav">
                <ul>
                    <li > <a href="#" style={{color: "#08B7B5"}} >HOME</a> </li>
                    <li >  <a href="#">PRENDRE RDV</a> </li>
                    <li >  <a href="#">SERVICES</a> </li>
                    <li >  <a href="#">ARTICLES</a> </li>
                    <li >  <a href="#"> QUESTIONS RÉPENSES</a></li>
                </ul>
            </div> */}

        </div>

        <div className="app-wrapper">
            <div className="med-four-profile">
                <div className="med-four-presentation">
                  <div className="med-four-presentation-title"></div>
                    <div className="med-four-presentation-p"></div>
                    <div className="med-four-presentation-btn"></div> 
                </div>
                <div className="med-four-image"></div>
            </div>

            <div className="med-four-calendar">
                <div className="med-four-calendar-left">
                     <div className="med-four-calendar-left-title"></div>
                    <div className="med-four-calendar-left-time"></div> 
                </div>
                <div className="med-four-calendar-right">
                    <div className="med-four-calendar-right-btn">
                        {/* <button className="med-four-calendar-right-btn-horaire"></button>
                        <button className="med-four-calendar-right-btn-location"></button> */}
                    </div>
                    <div className="med-four-calendar-right-table">
                        {/* <div className="med-four-calendar-right-table-head"></div>
                        <div className="med-four-calendar-right-table-monday"></div>
                        <div className="med-four-calendar-right-table-tuesday"></div>
                        <div className="med-four-calendar-right-table-wednsday"></div>
                        <div className="med-four-calendar-right-table-thursday"></div>
                        <div className="med-four-calendar-right-table-friday"></div>
                        <div className="med-four-calendar-right-table-saturday"></div> */}
                    </div>  

                </div>


            </div>
            <div className="med-four-services"></div>
            <div className="med-four-articles"></div>
            <div className="med-four-questions"></div>
        </div>

        <footer className="app-footer">
            {/* <div className="copyright">
            </div> */}
        </footer>

    </div>
}

export default MedFourComponent;