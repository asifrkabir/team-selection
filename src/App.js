import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import Team from './components/Team/Team';
import playerData from './playerData.json';

function App() {

  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
  }, [])

  const handleAddPlayer = (player) => {
    if (team.indexOf(player) === -1) {
      const newTeam = [...team, player];
      setTeam(newTeam);
    }
    else {
      alert('Player already added!');
    }
  }

  return (
    <div className="App">
      <Header></Header>

      <div className="container">
        <Container>
          <Row className="d-flex justify-content-center align-items-center text-center my-5">
            <Team team={team}></Team>
          </Row>

          <Row className="d-flex justify-content-center align-items-center">
            {
              players.map((player) => <Player key={player.id} player={player} handleAddPlayer={handleAddPlayer}></Player>)
            }
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;