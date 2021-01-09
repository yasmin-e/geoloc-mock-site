import React from 'react';
import Devices from '../../assets/ic-2-devices@3x.png';
import CellTower from '../../assets/group-24@3x.png';
import Anonymous from '../../assets/ic-100-anonyme@3x.png';
import './Features.scss';

function Features() {
 return (
  <div className="features">
   <div className="feat-container">
    <img
    className="feat-img"
    src={Devices}
    alt="Phone icon"
    />
    <h3 className="feat-title">
     Localisez autant de personne que vous souhaitez
    </h3>
    <p className="feat-text">
     Obtenez la localisation de vos amis, de vos enfants ou de vos parents
    </p>
   </div>
   <div className="feat-container">
    <img
     className="feat-img"
     src={CellTower}
     alt="Cell tower icon"
    />
    <h3 className="feat-title">
     Compatible with all mobile operators
    </h3>
    <p className="feat-text">
     Geolocation works with all telephone operators around the world
    </p>
   </div>
   <div className="feat-container">
    <img
     className="feat-img"
     src={Anonymous}
     alt="Crossed eye icon"
    />
    <h3 className="feat-title">
     Géolocalisation garantie 100% anonyme
    </h3>
    <p className="feat-text">
     Aucune information vous concernant ne sera communiquée
    </p>
   </div>
  </div>
 );
}

export default Features;
