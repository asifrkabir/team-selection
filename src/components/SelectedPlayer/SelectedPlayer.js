import React from 'react';
import { Col } from 'react-bootstrap';
import './SelectedPlayer.css';

const SelectedPlayer = ({ player }) => {

    const { name, image } = player;

    return (
        <Col md="3" className="d-flex justify-content-start align-items-center m-2">
            <img className="selected-player-img" src={image} alt="" />
            <p className="mb-0 mx-2">{name}</p>
        </Col>
    );
};

export default SelectedPlayer;