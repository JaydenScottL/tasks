import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question_type, setType] = useState<QuestionType>(
        "short_answer_question",
    );

    function toggleType(): void {
        if (question_type === "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }

    return (
        <div>
            Change Type
            <Button onClick={toggleType}>Change Type</Button>
            {question_type === "short_answer_question" && (
                <div>Short Answer</div>
            )}
            {question_type === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
