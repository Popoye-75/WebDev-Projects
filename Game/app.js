const loginButton = document.getElementById("loginInterface");
const signUpButton = document.getElementById("signInterface");

// Show login interface and hide signup
const showLogin = () => {
    loginButton.style.display = "flex";
    signUpButton.style.display = "none";
};

// Show signup interface and hide login
const showSignUp = () => {
    signUpButton.style.display = "flex";
    loginButton.style.display = "none";
};


// const timerButton = document.querySelector(".timerBtn");
// const chanceButton = document.querySelector(".chanceBtn");
// const timeChoice = document.getElementById("setTime");
// const chanceChoice = document.getElementById("setChance");
// let statusBar = document.querySelector(".score-update");

// timerButton.addEventListener("click", (e) => {
//     e.stopPropagation();
//     timeChoice.style.display = "block";
//     chanceChoice.style.display = "none";
// });

// chanceButton.addEventListener("click", (e) => {
//     e.stopPropagation();
//     chanceChoice.style.display = "block";
//     timeChoice.style.display = "none";
// });

// document.addEventListener("click", () => {
//     timeChoice.style.display = "none";
//     chanceChoice.style.display = "none";
// });
// // Game setup
// let setTime = document.querySelectorAll("#setTime span");
// let setChance = document.querySelectorAll("#setChance span");
// let timeScreen = document.getElementById("remainingTime");
// let chanceScreen = document.getElementById("remainingChance");
// let timeLeft = 30;
// let chanceLeft = 15;
// let countDown = null;
// let hiddenNumber = null;
// let hiddenBox = document.getElementById('hidden');
// setTime.forEach(btn => {
//     btn.addEventListener("click", () => {
//         timeLeft = parseInt(btn.innerText.trim());
//         timeScreen.innerText = timeLeft;
//     });
// });

// setChance.forEach(btn => {
//     btn.addEventListener("click", () => {
//         chanceLeft = parseInt(btn.innerText.trim());
//         chanceScreen.innerText = chanceLeft;
//     });
// });

// const generateRandom = () => Math.floor(Math.random() * 105) + 1;

// const startGame = () => {
//     if (countDown) clearInterval(countDown);
//     hiddenNumber = generateRandom();
//     // console.log("Hidden Number:", hiddenNumber);
//     timeScreen.innerText = timeLeft;

//     countDown = setInterval(() => {
//         timeLeft--;
//         timeScreen.innerText = timeLeft;
//         if (timeLeft <= 0) {
//             clearInterval(countDown);
//             timeScreen.innerText = "Time UP!";
//             statusBar.innerText = "⏰ Game Over!";
//         }
//     }, 1000);

//     let cells = document.querySelectorAll(".game-console-input-keyboard td");
//     cells.forEach(cell => {
//         cell.onclick = () => {
//             if (chanceLeft <= 0) return;

//             const num = parseInt(cell.innerText);
//             if (num === hiddenNumber) {
//                 hiddenBox.innerText = num;
//                 statusBar.innerText = "🎉 You Found It!";
//                 cell.style.background = "green";
//                 clearInterval(countDown);
//             } else if (num < hiddenNumber) {
//                 statusBar.innerText = "Try Higher!";
//                 cell.style.background = "orange";
//             } else {
//                 statusBar.innerText = "Try Lower!";
//                 cell.style.background = "blue";
//             }

//             chanceLeft--;
//             chanceScreen.innerText = chanceLeft;

//             if (chanceLeft <= 0) {
//                 statusBar.innerText = "Game Over";
//                 clearInterval(countDown);
//             }
//         };
//     });
// };

// const resetGame = () => {
//     clearInterval(countDown);
//     timeLeft = 30;
//     chanceLeft = 15;
//     hiddenNumber = null;
//     hiddenBox.innerText = "?";
//     timeScreen.innerText = "--:--";
//     chanceScreen.innerText = "--";
//     statusBar.innerText = "Try numbers";
//     document.querySelectorAll(".game-console-input-keyboard td").forEach(td => {
//         td.style.background = "";
//     });
// };




// Selection dom element of html



const millionGame = () => {
    // const questionEl = document.getElementById('question');
    // const optionEl = document.querySelectorAll(".choiceOption li");
    // optionEl.forEach(btn => {
    //     btn.onclick = () => {
    //         console.log(btn.textContent);
    //     }
    // })
    // fetch("https://opentdb.com/api.php?amount=1&type=multiple")
    //     .then(res => res.json())
    //     .then(data => {
    //         // Check if result exists
    //         if (data.results && data.results.length > 0) {
    //             const q = data.results[0];
    //             const questionText = q.question;
    //             const correctAnswer = q.correct_answer;
    //             const options = [...q.incorrect_answers, correctAnswer];
    //         } else {
    //             console.error("No questions received from API:", data);
    //         }
    //     })
    //     .catch(err => console.error("Fetch error:", err));
    // const questionEl = document.getElementById('question');
    // const optionEls = document.querySelectorAll(".choiceOption li");

    // Function to load question
    const questionEl = document.getElementById('question');
    const optionEls = document.querySelectorAll(".choiceOption li");
    // const nextBtn = document.getElementById("nextBtn");

    // Decode HTML entities from API
    function decodeHTML(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    // Load question function
    function loadQuestion() {
        fetch("https://opentdb.com/api.php?amount=1&type=multiple")
            .then(res => res.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const q = data.results[0];
                    const correctAnswer = q.correct_answer;
                    const options = [...q.incorrect_answers, correctAnswer];

                    // Shuffle options
                    options.sort(() => Math.random() - 0.5);

                    // Show question
                    questionEl.textContent = decodeHTML(q.question);

                    // Show options
                    optionEls.forEach((li, index) => {
                        li.textContent = decodeHTML(options[index]);
                        li.style.backgroundColor = "white"; // reset color
                        li.onclick = () => {
                            if (options[index] === correctAnswer) {
                                li.style.backgroundColor= "salmon";
                                const countDown = setTimeout(()=>{
                                    li.style.backgroundColor = "lightgreen";
                                },2000);
                            } else {
                                li.style.backgroundColor = "salmon";
                            }
                            console.log("Selected:", options[index]);
                        }
                    });
                } else {
                    questionEl.textContent = "No question found!";
                }
            })
            .catch(err => {
                questionEl.textContent = "Error fetching question.";
                console.error("Fetch error:", err);
            });
    }

    // Initial question load
    loadQuestion();

    // Next Question button
    // nextBtn.addEventListener("click", loadQuestion);

    // let timeLeft = 30;
    // console.log(question.textContent);

}
millionGame();