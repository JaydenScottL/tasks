import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler({
    value,
    access,
}: {
    value: number;
    access: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                access(2 * value);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    value,
    access,
}: {
    value: number;
    access: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                access(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} access={setDhValue}></Doubler>
            <Halver value={dhValue} access={setDhValue}></Halver>
        </div>
    );
}
