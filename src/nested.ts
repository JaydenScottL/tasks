import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions
        .map(
            (question: Question): Question => ({
                ...question,
                options: [...question.options],
            }),
        )
        .filter((question) => question.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions
        .map(
            (question: Question): Question => ({
                ...question,
                options: [...question.options],
            }),
        )
        .filter(function (question: Question) {
            if (
                question.body.length > 0 ||
                question.expected.length > 0 ||
                question.options.length > 0
            ) {
                return true;
            }
        });
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    return (
        questions[
            questions.findIndex(function (question: Question) {
                if (question.id === id) {
                    return true;
                }
            })
        ] || null
    );
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions
        .map(
            (question: Question): Question => ({
                ...question,
                options: [...question.options],
            }),
        )
        .filter(function (question: Question) {
            if (question.id != id) {
                return true;
            }
        });
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    let arr: string[] = [];

    questions.forEach(function (question: Question) {
        arr.push(question.name);
    });

    return arr;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let answer: Answer[] = [];

    questions.forEach(function (question: Question) {
        let temp: Answer = {
            questionId: question.id,
            submitted: false,
            text: "",
            correct: false,
        };

        answer.push(temp);
    });

    return answer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (question: Question): Question => ({
            ...question,
            published: true,
        }),
    );
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let temp = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );

    temp.push(makeBlankQuestion(id, name, type));

    return temp;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map(function (question: Question) {
        let temp = question.name;

        if (targetId == question.id) {
            temp = newName;
        }

        return {
            ...question,
            name: temp,
            options: [...question.options],
        };
    });
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let temp = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options],
        }),
    );

    temp.forEach(function (question: Question) {
        if (targetId === question.id) {
            if (targetOptionIndex === -1) {
                question.options.push(newOption);
            } else {
                question.options[targetOptionIndex] = newOption;
            }
        }

        return question;
    });

    return temp;
}
