import React from 'react';
import '../style/Medecin2.scss';

const MedTwoComponent = () => {
   
    return <div>
       <div className="med-header" >
        {/* <div className="logo"></div>

        <div className="nav">
          <ul>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
            <li ></li>
          </ul>
        </div> */}

      </div>

      <div className="app-wrapper">
        <div className="med-profile">
          <div className="med-presentation"></div>
          <div className="med-image"></div>
        </div>

        <div className="med-video"></div>

        <div className="med-featured-services"></div>

        <div className="med-appointment">
          <div className="med-appointment-wrapper">
            <div className="med-appointment-top"></div>
            <div className="med-appointment-left"></div>
            <div className="med-appointment-right"></div>
          </div>

          <div className="med-appointment-content"></div>
        </div>

        <div className="med-galerie"></div>

        <div className="med-question"></div>

        <div className="med-articles"></div>

        <div className="med-contact"></div>

      </div>

      <footer className="app-footer">
        <div className="copyright">
        </div>
      </footer>

    </div>
}

export default MedTwoComponent;