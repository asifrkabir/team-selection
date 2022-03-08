import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import './Team.css';

const Team = ({ team }) => {

    const totalCost = team.reduce((sum, player) => sum + player.salary, 0);

    return (
        <div className="team-card p-5">
            <h1 className="text-primary">DREAM TEAM</h1>
            <Row className="mt-5">
                <Col md="4" className="text-start">
                    <h4>Team Members: {team.length}</h4>
                    <h4>Total Team Salary: <span>$</span>{totalCost}</h4>
                </Col>
                <Col md="8">
                    <Row>
                        {
                            team.map((player) => <SelectedPlayer player={player} key={player.id}></SelectedPlayer>)
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Team;