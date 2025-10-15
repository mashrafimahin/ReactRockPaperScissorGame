// Styles
import Global from "./Style/Global.Style";
import {
  Container,
  GameContainer,
  SubDiv,
  Img,
  Button,
} from "./Style/Component.Style";

// Components
import Title from "./Component/Title";

// Assets
import DisplayImage from "./assets/hands.png";
import Rock from "./assets/rock.png";
import Paper from "./assets/paper.png";
import Scissor from "./assets/scissor.png";

// Audio
import WinSound from "./assets/win.wav";
import DrawSound from "./assets/draw.wav";
import LoseSound from "./assets/lose.wav";

// Hooks
import { useState } from "react";

function App() {
  // states for display items
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);

  // states for logic
  const [playerSrc, setPlayerSrc] = useState(null);
  const [playerMove, setPlayerMove] = useState("");
  const [computerSrc, setComputerSrc] = useState(null);
  const [computerMove, setComputerMove] = useState("");
  const [result, setResult] = useState("");

  // Default Move Array
  const moves = [
    { name: "rock", src: Rock },
    { name: "paper", src: Paper },
    { name: "scissor", src: Scissor },
  ];

  // Extract Move Name
  const getMoveName = (src) => {
    // validation
    if (!src) return "";

    // match name and print from array
    const match = src.match(/(rock|paper|scissor)/i);
    return match ? match[0].toLowerCase() : "";
  };

  // Preload Sounds
  const winAudio = new Audio(WinSound);
  const drawAudio = new Audio(DrawSound);
  const loseAudio = new Audio(LoseSound);

  // Play Sound
  const playSound = (audio) => {
    audio.currentTime = 0;
    audio.play();
  };

  // Determine The Winner
  const computeResult = (player, computer) => {
    // validation
    if (!player || !computer) return "";

    // draw
    if (player === computer) {
      playSound(drawAudio);
      return "It's a Draw 🤝";
    }

    // win
    if (
      (player === "rock" && computer === "scissor") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissor" && computer === "paper")
    ) {
      playSound(winAudio);
      return "You Won 🎉";
    }

    // lose
    playSound(loseAudio);
    return "You Lost 😢";
  };

  // Click Handler
  const handleClick = (e) => {
    // Player info
    const playerImgSrc = e.target.src;
    const playerName = getMoveName(playerImgSrc);

    // Computer info
    const rndIndex = Math.floor(Math.random() * moves.length);
    const computer = moves[rndIndex];
    const computerName = computer.name;

    // Change State
    setPlayerSrc(playerImgSrc);
    setComputerSrc(computer.src);
    setPlayerMove(playerName);
    setComputerMove(computerName);

    // Set Result
    const outcome = computeResult(playerName, computerName);
    setResult(outcome);
  };

  return (
    <>
      <Global />
      <Container>
        {btn && <Title>Rock, Paper, Scissor Game</Title>}

        <GameContainer style={{ gap: "40px" }}>
          {btn && <Img src={DisplayImage} />}
          {show && (
            <>
              <SubDiv>
                <Img
                  src={playerSrc || DisplayImage}
                  style={{ transform: "scaleX(-1)" }}
                  alt="player"
                />
                <Title style={{ fontSize: "20px", marginTop: "10px" }}>
                  {playerMove}
                </Title>
              </SubDiv>
              <SubDiv>
                <Img src={computerSrc || DisplayImage} alt="computer" />
                <Title style={{ fontSize: "20px", marginTop: "10px" }}>
                  {computerMove}
                </Title>
              </SubDiv>
            </>
          )}
        </GameContainer>

        {result && (
          <h2 style={{ color: "#222", marginTop: "20px" }}>{result}</h2>
        )}

        {show && (
          <GameContainer style={{ gap: "40px" }}>
            {moves.map((move) => (
              <Img
                key={move.name}
                title={move.name}
                src={move.src}
                style={{
                  cursor: "pointer",
                  height: "80px",
                  width: "80px",
                }}
                onClick={handleClick}
              />
            ))}
          </GameContainer>
        )}

        {btn && (
          <Button
            onClick={() => {
              setShow(true);
              setBtn(false);
            }}
          >
            Start
          </Button>
        )}
      </Container>
    </>
  );
}

export default App;
