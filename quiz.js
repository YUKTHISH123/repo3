const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [

    {
        question: "What is the capital of India?",
        options: ["1. Mumbai", "2. Chennai", "3. New Delhi", "4. Kolkata"],
        answer: 3
    },

    {
        question: "Which planet is called the Red Planet?",
        options: ["1. Earth", "2. Mars", "3. Venus", "4. Jupiter"],
        answer: 2
    },

    {
        question: "Who wrote the National Anthem of India?",
        options: ["1. Gandhi", "2. Tagore", "3. Nehru", "4. Vivekananda"],
        answer: 2
    },

    {
        question: "How many continents are there?",
        options: ["1. 5", "2. 6", "3. 7", "4. 8"],
        answer: 3
    },

    {
        question: "Which is the largest ocean?",
        options: ["1. Atlantic", "2. Pacific", "3. Indian", "4. Arctic"],
        answer: 2
    },

    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["1. Tiger", "2. Elephant", "3. Lion", "4. Leopard"],
        answer: 3
    },

    {
        question: "What is the national bird of India?",
        options: ["1. Sparrow", "2. Peacock", "3. Parrot", "4. Eagle"],
    3    answer: 2
    },

    {
        question: "Which gas do plants absorb?",
        options: ["1. Oxygen", "2. Nitrogen", "3. Carbon Dioxide", "4. Helium"],
        answer: 3
    },

    {
        question: "How many days are there in a leap year?",
        options: ["1. 364", "2. 365", "3. 366", "4. 367"],
        answer: 3
    },

    {
        question: "Which is the smallest prime number?",
        options: ["1. 0", "2. 1", "3. 2", "4. 3"],
        answer: 3
    }

];

let currentQuestion = 0;
let score = 0;

function askQuestion() {

    if (currentQuestion < questions.length) {

        const q = questions[currentQuestion];

        console.log("\n" + q.question);

        q.options.forEach(option => {
            console.log(option);
        });

        rl.question("\nEnter option number: ", function(userAnswer) {

            if (parseInt(userAnswer) === q.answer) {

                console.log("Correct Answer");
                score++;

            } else {

                console.log("Wrong Answer");

                console.log(
                    "Correct Answer:",
                    q.options[q.answer - 1]
                );
            }

            currentQuestion++;
            askQuestion();
        });

    } else {

        console.log("\nQuiz Completed");
        console.log("Your Score:", score + "/" + questions.length);

        rl.close();
    }
}

askQuestion();