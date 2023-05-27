


const $ = selector => document.querySelector(selector);

const names = new Array();
const scores = new Array();

document.addEventListener("DOMContentLoaded", () => {
  $("#addToArray").addEventListener("click", () => {
    let name = $("#namesInput").value;
    let score = parseInt($("#scoresInput").value);
    addScore(name, score);
  });

  $("#displayResults").addEventListener("click", displayResults);
  $("#displayScores").addEventListener("click", displayScores);
});

function displayResults() {
  let sum = 0;
  let highestScore = scores[0];
  let highestScorer = names[0];

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
    if (scores[i] > highestScore) {
    highestScore = scores[i];
    highestScorer = names[i];
  }
}

  let scoresAverage = sum / scores.length;

  var resultsDiv = document.getElementById("results");

  while (resultsDiv.firstChild) {
    resultsDiv.firstChild.remove();
  }

  let headElement = document.createElement("h2");
  headElement.textContent = "Results";
  headElement.style.color = "blue";
  resultsDiv.appendChild(headElement);

  let averageScoreNode = document.createElement("p");
  averageScoreNode.textContent = "Average Score = " + scoresAverage.toFixed(2);
  resultsDiv.appendChild(averageScoreNode);

  let highestScoreNode = document.createElement("p");
  highestScoreNode.textContent = "Highest Score = "+highestScorer +" with a score of " + highestScore;
  resultsDiv.appendChild(highestScoreNode);
}

function displayScores() {
  var scoresDiv = document.getElementById("scores");
  scoresDiv.textContent = "";

  for (let i = 0; i < names.length; i++) {

  let containerNode = document.createElement("div");

  let namesLabelNode = document.createElement("span");
  namesLabelNode.innerHTML = names[i]+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  containerNode.appendChild(namesLabelNode);

  let scoresLabelNode = document.createElement("span");
  scoresLabelNode.textContent = scores[i];
  containerNode.appendChild(scoresLabelNode);

scoresDiv.appendChild(containerNode);

    

  scoresDiv.appendChild(document.createElement("br"));
  }
}

function addScore(name, score) {
  //get error span content and clear contents first
  let nameErrorSpan = document.getElementById('nameError');
  let scoreErrorSpan = document.getElementById('scoreError'); 
  nameErrorSpan.textContent = "";
  scoreErrorSpan.textContent= "";
  
  //get name and score input elements to focus 
  let nameInput = document.getElementById('namesInput');
  let scoreInput = document.getElementById('scoresInput');

  //fill error span contents if needed
  if(name==""||name==null||score<0||score>100||isNaN(score)){
    nameErrorSpan.textContent = "Please enter a name";
    scoreErrorSpan.textContent = "Score must be between 0 and 100";
    nameInput.value ="";
    scoreInput.value="";
    nameInput.focus();
  } 
  else{
  names.push(name);
  scores.push(score);
  nameInput.value ="";
  scoreInput.value="";
  nameInput.focus();
  }
}
