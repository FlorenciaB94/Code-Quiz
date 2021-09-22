// Array for Quiz Questions
var questions = [{
question: "Which brand does Mario belong to?",
choices: ["PlayStation", "Nintendo", "Xbox", "Sega"],
answer: "Nintendo"
},
{
    question: "Which brand does Sonic belong to?",
    choices: ["PlayStation", "Nintendo", "Xbox", "Sega"],
    answer: "Sega"
},
{
    question: "Which brand does Halo belong to?",
    choices: ["PlayStation", "Nintendo", "Xbox", "Sega"],
    answer: "Xbox"
},
{
    question: "Which brand does Ratchet and Clank belong to?",
    choices:["PlayStation", "Nintendo", "Xbox", "Sega"],
    answer: "PlayStation"
},
{
    question: "What developer made the game series Grand Theft Auto?",
    choices: ["Bethesda", "Rockstar", "Activision", "Suckerpunch"],
    answer: "Rockstar"
},
{
    question: "What is the name of the main female character in The Last Of Us?",
    choices: ["Samus","Lara", "Aloy", "Ellie"],
    answer: "Ellie"
},
{
    question: "What is the name of the main character in God of War?",
    choices: ["Bower", "Agent 47", "Kratos", "Master Chief"],
    answer: "Kratos"
},
{
    question: "Uncharted is a video game series of what genre?",
    choices: ["Action/Adventure", "Horror", "RPG", "FPS"],
    answer: "Action/Adventure"
}
]
// All my variables
var score = 0;
var timeLeft = 10;
var qindex = 0;
var countdown = document.querySelector("#start");
var actualTime = document.querySelector("#timer");
var showQuestions = document.querySelector("#questions");

// Click event & timer countdown function
countdown.addEventListener("click", function() {
    console.log("button is clicking");
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeLeft--;
      actualTime.textContent = "Seconds Left: " + timeLeft;
  
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  });