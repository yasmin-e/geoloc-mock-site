import React from 'react';
import DemoImg from '../../assets/graphic-how-does-it-work@3x.png';
import StepOneImg from '../../assets/ic-step-1@3x.png';
import StepTwoImg from '../../assets/ic-step-2@3x.png';
import StepThreeImg from '../../assets/ic-step-3@3x.png';
import './Demo.scss';

function Demo() {
 return (
  <div className="demo">
    <img
     src={DemoImg}
     id="demo-img"
     alt="iPhone with Geoloc demo"
    />
    <div className="demo-content">
     <h1 id="demo-title">
      How does it work
     </h1>
    <div className="content-step">
     <img
      src={StepOneImg}
      className="content-img"
      alt="Phone dialer icon"
     />
     <div className="content-info">
      <h4 className="content-title">
       01 Location request
      </h4>
      <p className="content-text">
       Fill in the phone number you want to track
      </p>
     </div>
    </div>
    <div className="content-step">
     <img
      src={StepTwoImg}
      className="content-img"
      alt="Phone icon"
     />
     <div className="content-info">
     <h4 className="content-title">
      02 Geolocation
     </h4>
     <p className="content-text">
      The recipient receives a tracking link that allows to precisely find its location
     </p>
     </div>
    </div>
    <div className="content-step">
     <img
      src={StepThreeImg}
      className="content-img"
      alt="Location pin icon"
     />
     <div className="content-info">
     <h4 className="content-title">
      03 Showing the location
     </h4>
     <p className="content-text">
      You receive the exact location of the desired phone displayed on a map and can track its movements
     </p>
     </div>
    </div>
    </div>
  </div>
 );
}

export default Demo;