import React from 'react';
import Headline from '../../components/Headline/Headline';
import Features from '../../components/KeyFeatures/Features';
import Demo from '../../components/Demo/Demo';

function LandingPage() {
 return (
   <div className="landing-page">
     <Headline />
     <Features />
     <Demo />
   </div>
 );
}

export default LandingPage;
