
const main = document.getElementById('main')

main.addEventListener('submit', (e) => {
    e.preventDefault()
});

function showAnswers() {
  const answers = document.getElementsByClassName('show-answers');
  for (let answer of answers) {
    answer.style.display = "block";
  }
}


function checkboxValidate() {
  var checkBoxes = document.getElementsByClassName( 'q3' );
  var isChecked = false;
      for (var i = 0; i < checkBoxes.length; i++) {
          if ( checkBoxes[i].checked ) {
              isChecked = true;
          };
      };
      if ( !isChecked ) {   
        alert( 'Please, check at least one checkbox!' );  
  }
}
function countScore() {
  let score = 0;
  if (document.getElementById("right1").checked){
    score += 1
  }
  if (document.getElementById("right2").checked){
    score += 1
  }
  if (document.getElementById("right3").checked){
    score += .5
  }
  if (document.getElementById("right4").checked){
    score += .5
  }
  const input = document.getElementById("alohomora").value.toUpperCase();
  if (input === ""){
    alert("Please enter an answer to question 4.")
  }else if (input === "ALOHOMORA"){
    score += 1;
  }
  document.getElementById("score").innerHTML = score;

  let scoreComment;
  if (score === 0 || score === 0.5) {scoreComment = "Are you a muggle?"};
  if (score === 1) {scoreComment = "Hey Neville, chill."};
  if (score >= 1.5 || score > 3) {scoreComment = "Hufflepuff?"};
  if (score === 3) {scoreComment = "Ravenclaw, is that you?"};
  if (score >= 4) {scoreComment = "OK Hermione, calm down."};
  document.getElementById("scoreComment").innerHTML = scoreComment;
}


document.getElementById("form1").onsubmit=function() {
  countScore()
  checkboxValidate()
  showAnswers()
}
