import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Player.css';

const Player = ({player}) => {

    const {name, image, team, salary} = player;

    return (
        <Col md="5" m="5" className="playerCard m-4">
            <Row className="d-flex justify-content-center align-items-center p-3">
                <Col md="5" className="d-flex justify-content-center align-items-center">
                    <img src={image} alt="" />
                </Col>
                <Col className="text-center">
                    <h4>{name}</h4>
                    <h6>Team: {team.name}</h6>
                    <p>Salary: <span>$</span>{salary}</p>
                    <Button>Add Player</Button>
                </Col>
            </Row>
        </Col>
    );
};

export default Player;