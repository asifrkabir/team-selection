import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Player = ({player, handleAddPlayer}) => {

    const {name, image, team, salary} = player;

    return (
        <Col md="5" m="5" className="playerCard m-4">
            <Row className="d-flex justify-content-center align-items-center p-3">
                <Col md="5" className="d-flex justify-content-center align-items-center">
                    <img className="player-img" src={image} alt="" />
                </Col>
                <Col className="text-center">
                    <h4 className="text-primary">{name} <img className="flag-img" src={team.flag} alt="" /></h4>
                    <h6>Team: {team.name}</h6>
                    <p>Salary: <span>$</span>{salary}</p>
                    <Button onClick={() => handleAddPlayer(player)} variant="outline-primary"><FontAwesomeIcon icon={faUserPlus} /> Add Player</Button>
                </Col>
            </Row>
        </Col>
    );
};

export default Player;