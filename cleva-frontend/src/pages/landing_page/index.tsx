import React, { useLayoutEffect, useRef } from 'react'
import Navbar from './Navbar'
import Info from './Info'
import StopStressing from './StopStressing';
import PaymentInfo from './PaymentInfo';
import Convert from './Convert';
import SendMoney from './SendMoney';
import CreateVirtual from './CreateVirtual';
import TrackAll from './TrackAll';
import Footer from './Footer';

export default function LandingPage() {
 const footerRef = useRef<HTMLDivElement>(null);
 function handleLinkClick() {
  if (footerRef.current) {
   footerRef.current.scrollIntoView({ behavior: 'smooth' })

  }
 }

 useLayoutEffect(() => {
  if (footerRef.current) {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, []);

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
