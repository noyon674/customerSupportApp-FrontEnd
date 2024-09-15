import React from 'react';
import './chatheader.scss';
import { Col, Row } from 'react-bootstrap';
import img from '../../../assets/img/ticketPage.png';

import {FaArrowLeft} from 'react-icons/fa'

function ChatHeader() {
  return (
    <Row className='chat-header fixed-top'>
        <Col className='back-arrow'>
          <FaArrowLeft />
        </Col>
        <Col className='img'>
          <img src={img} alt="" />
        </Col>
        <Col className='name'>
          <h6>Jonh</h6>
          <p>Live Chat</p>
        </Col>
    </Row>
  )
}

export default ChatHeader