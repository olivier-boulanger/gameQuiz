const quiz = [
    {
        topic: "sports",
        name: "Coupe du monde 1962 ?",
        answers: [
            {
                answer: "brésil",
                isAnswer: true
            },
            {
                answer: "Uruguay",
            }
        ]
    }
]

for (let i = 0; i < quiz.length; i++) {
const question = quiz[i]

display(question.topic)
topic.addEventListener("click", () => {
    displayQuestion(question.name)

    const shuffledAnswers = shuffle(question.answers)
    shuffledAnswers.forEach(answer => {
        answer.addEventListener("click", () => {
            if (answer.isAnswer) {
                alert("Correct !")
            } else {
                alert("Faux")
            }
        })
    })

    displayAnswers(shuffledAnswers)
})
}