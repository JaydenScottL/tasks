import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);

    function increment(): void {
        setValue(1 + value);
    }

    return (
        <span>
            <Button onClick={increment}>Add One</Button>
            to {value}.
        </span>
    );
}
