import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
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
                        <div id="red"></div>
                    </Col>
                    <Col>
                        <div id="red"></div>
                    </Col>
                </Row>
            </Container>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <b>Jayden LeCorps</b>
            <h3>COS 420 test</h3>
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
