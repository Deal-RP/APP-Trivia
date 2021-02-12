export interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface Triviacategory {
    id: number;
    name: string;
}

export interface persons{
    minutos: number,
    segundos: number,
    points: number,
    total: number,
    name: string
}
