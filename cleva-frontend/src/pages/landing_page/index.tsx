import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Navbar from './Navbar'
import Info from './Info'
import StopStressing from './StopStressing';
import PaymentInfo from './PaymentInfo';
import Convert from './Convert';
import SendMoney from './SendMoney';
import CreateVirtual from './CreateVirtual';
import TrackAll from './TrackAll';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function LandingPage() {
 const footerRef = useRef<HTMLDivElement>(null);
 function handleLinkClick() {
  if (footerRef.current) {
   footerRef.current.scrollIntoView({ behavior: 'smooth' })

  }
 }

 const location = useLocation();
 useEffect(() => {
  const url = new URL(window.location.href);
  if (url.hash === '#waitlist' && footerRef.current) {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [location]);

  return (
    <div>
    <Navbar onLinkClick={handleLinkClick} />
     <Info />
     <StopStressing />
     <PaymentInfo />
     <Convert />
     <SendMoney />
     <CreateVirtual />
     <TrackAll />
     <Footer innerRef={footerRef} />
    </div>
  )
}
