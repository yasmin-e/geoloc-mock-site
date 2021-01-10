import React from 'react';
import HeadlineImg from '../../assets/graphic-main-fmaily-location@3x.png';
import FrenchFlag from '../../assets/france-flag.png';
import Arrow from '../../assets/ic-flag-arrow-down@3x.png';
import Edit from '../../assets/ic-pink-edit@3x.png';
import Tick from '../../assets/ic-black-tick@3x.png';
import './Headline.scss';

function Headline() {
  return (
    <div className="headline">
      <img
        src={HeadlineImg}
        className="headline-img"
        alt="iPhone with Geoloc app"
      />
      <div className="main-content">
        <h1 className="headline-title">
          HEY!
          <br />
          <span>Tracking someone you care</span>
          <br />
          <span>anywhere without worrying</span>
        </h1>
        <h2 className="headline-subtitle">Enter the phone number to track</h2>
        <div className="form">
          <img
            src={FrenchFlag}
            alt="French flag"
            id="form-flag"
          />
          <img
            src={Arrow}
            alt="Downward arrow symbol"
            id="form-arrow"
          />
          <input
            id="phone-number"
            type="number"
            placeholder="00-63-02-1234567"
          />
          <img
            src={Tick}
            alt="Black tick icon"
            id="form-tick"
          />
          <img
            src={Edit}
            alt="Pink pencil icon"
            id="form-pen"
          />
        </div>
        <button
          type="button"
        >
          Track
        </button>
      </div>
    </div>
  );
}

export default Headline;
