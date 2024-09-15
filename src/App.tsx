import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>

            <h1>This is a header</h1>

            <img src="https://i.imgur.com/v32GLZQ.jpeg" alt="Cat attack"></img>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <b>Jayden LeCorps</b>
            <ul>COS 420 test</ul>
            <p>Hello World!</p>
        </div>
    );
}

export default App;
