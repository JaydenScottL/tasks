import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    value,
    access,
}: {
    value: number;
    access: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                access((1 + value) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ value }: { value: number }): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[value],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor
                    value={colorIndex}
                    access={setColorIndex}
                ></ChangeColor>
                <ColorPreview value={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
