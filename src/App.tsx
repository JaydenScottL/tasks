import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>

            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>

            <h1>This is a header</h1>

            <img src="https://i.imgur.com/q07Jibp.jpeg" alt="Orange cat"></img>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            id="red"
                            style={{ backgroundColor: "red" }}
                            color="red"
                        ></div>
                    </Col>
                </Row>
            </Container>

            <b>Jayden LeCorps</b>
            <p>COS 420 test</p>
            <p>Hello World!</p>

            <ol>
                <li>Apple</li>
                <li>Orange</li>
                <li>Pear</li>
                <li>Lemon</li>
            </ol>
        </div>
    );
}

export default App;
