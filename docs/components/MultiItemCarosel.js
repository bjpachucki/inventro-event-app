import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBContainer, MDBRow } from 'mdbreact';
import accounts from '../assets/accounts.json';
import EventCard from './EventCard'




const MultiCarouselPage = () => {
  return (
    <MDBContainer fluid={true}  style={{padding: 0}}>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={false} multiItem style={{display: 'flex', flexDirection: 'row'}}>
        <MDBCarouselInner>
          <MDBRow>
            <EventCard key={accounts.key}/>              
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default MultiCarouselPage;

