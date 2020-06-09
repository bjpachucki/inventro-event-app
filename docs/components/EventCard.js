import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBRating, MDBIcon, MDBView, MDBMask } from 'mdbreact';
import TimerCountDown from './CountDownTimer';
import accounts from '../assets/accounts.json'

const EventCard = () => {
  const IconOverlayText = (e) => {
    if (e.PasswordProtected && e.EventRequirementsEstablished) {
      return 'This event is password protected and has specific requirements to enter.'
    } else if (e.PasswordProtected) {
      return 'This event is password protected.'
    } else if (e.EventRequirementsEstablished) {
      return 'This event has specific requirements to enter.'
    }
  }

  return (
    accounts.map((e) => {
      return (<MDBCol md="4" key={e.UID}>
      <MDBCard className="mb-2" >
        <MDBCardBody>
          <MDBView hover>
            <MDBRow>
              <MDBCol md="2" >
                {e.PasswordProtected ? <MDBIcon icon='lock'/> : null}
                {e.EventRequirementsEstablished ? <MDBIcon icon='certificate' />: null}
              </MDBCol>
              <MDBCol md="10" style={{textAlign: 'center'}}>
                <MDBCardTitle>{e.EventGame}</MDBCardTitle>
                <TimerCountDown />
                <hr />
                <MDBCardTitle>{e.EventTitle}</MDBCardTitle>
              </MDBCol>
            </MDBRow>            
            <MDBMask className="flex-center" overlay="black-strong">
            <p className="white-text">{IconOverlayText(e)}</p>
          </MDBMask>
          </MDBView>
          <MDBRow>
            <MDBCol md='6'>
              <MDBCardImage className="img-fluid" src={e.ImageSource} />
              <MDBRow middle>
                <MDBCardText>{e.EventOrganizer}</MDBCardText>
                <MDBRating iconRegular />
                <MDBCardText>({e.EventOrganizerReviews})</MDBCardText>
              </MDBRow>
            </MDBCol>
    <MDBCol md="6">
      <MDBCardText>{e.EventDescription} </MDBCardText>
      <MDBCardText>Entry Cost = {e.EventEntryCost} bits</MDBCardText>
      <MDBCardText>Prize Pool = {e.EventPrizePool} bits</MDBCardText>
    </MDBCol>
  </MDBRow>
  <MDBBtn color="primary" style={{width: '100%'}}>Enter</MDBBtn>
  <MDBCardTitle style={{textAlign: 'center' }}>-- Participants {e.NumberofParticipants} --</MDBCardTitle>
  </MDBCardBody>
  </MDBCard>
  </MDBCol>
    )} )
  )
}

export default EventCard;