import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import playerData from './playerData.json';

function App() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playerData);
  }, [])

  return (
    <div className="App">
      <Header></Header>

      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          {
            players.map((player) => <Player key={player.id} player={player}></Player>)
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
