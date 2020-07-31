//variable storing the player name
var playername;
//array of all options of whose images have been taken
const options = ["Tom Cruise", "Dennis Ritchie", "Bill Gates", "Jack Ma", "Larry Page", "Marques Brownlee", "Elon Musk", "Narendra Modi", "Robert Downey jr.", "Steve Jobs", "Benedict Cumberbatch", "Thomas Middleditch", "Jim Parsons", "TJ Miller", "Ryan Reynolds", "Scarlett Johanson", "Leonardo Dicaprio", "Emilia Clarke", "Emma Stone", "Emma Watson"];
//variable for selecting the question
var qno = Math.floor((Math.random() * 20));
//variable storing the current score
var myscore = 0;
//variable storing the number of questions asked, game stops after 10 questions
var count = 0;
//array for checking if a certain question has been asked already
//corresponding array element is set to 1, if a question is asked
var done = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//checking global best- if null(the very first time game is played), set to 0
if (window.localStorage.getItem("global best") == null) {
  window.localStorage.setItem("global best", 0);
}

document.addEventListener("DOMContentLoaded", function init() {
  //function for initializing html contents of page onload of DOM

  //header
  var dv = document.createElement("div");
  var head1 = document.createElement("h1");
  head1.innerHTML = "Homework 2: Guess the Celebrity!";
  dv.appendChild(head1);
  var head2 = document.createElement("h3")
  head2.innerHTML = "Github: tejas0809"
  dv.appendChild(head2)
  dv.setAttribute("class", "header");
  document.body.appendChild(dv);

  // main division with label, input field and button
  var dv_main = document.createElement("div");
  dv_main.setAttribute("class", "main");
  dv_main.setAttribute("id", "maindiv");

  var dv1 = document.createElement("div");
  dv1.setAttribute("id", "namediv");

  var lbl = document.createElement("label");
  lbl.setAttribute("id", "namelabel");
  lbl.innerHTML = "Name";
  dv1.appendChild(lbl);

  var inpt = document.createElement("input");
  inpt.setAttribute("type", "text");
  inpt.setAttribute("id", "namebox");

  dv1.appendChild(inpt);
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.id = "gobutton";
  btn.innerHTML = "Let's Go!";

  //call Validation function on click of button
  btn.addEventListener("click", validateAlphanumeric);
  dv1.appendChild(btn);
  dv_main.appendChild(dv1);
  document.body.appendChild(dv_main);


  //footer
  let dvfoot = document.createElement("div");
  dvfoot.setAttribute("class", "footer");
  let p1 = document.createElement("p");
  p1.innerHTML = "Created by Tejas Srivastava for CIS 557"
  dvfoot.appendChild(p1);
  document.body.appendChild(dvfoot);

});

//validate function
function validateAlphanumeric() {
  var name = document.getElementById("namebox");
  var reg = /^[0-9a-zA-Z]+$/;
  if (!(name.value.match(reg))) {
    alert('Please enter alphanumeric values ony!')
    name.value = "";
  } else {
    playername = name.value;
    if (window.localStorage.getItem(playername) == null) {
      window.localStorage.setItem(playername, 0);
    }
    //initializing the image question, options and score board
    initMainPage();
  }
}

function initMainPage() {

  document.getElementById("namediv").style.display = "none";
  var divnm = document.createElement("div");
  divnm.setAttribute("id", "greeting");
  var divtext = document.createElement("p");
  divtext.innerHTML = "All the best, " + playername + "!";
  divnm.appendChild(divtext);
  var qno = document.createElement("p");
  qno.setAttribute("id", "qno");
  qno.innerHTML = "#1";
  divnm.appendChild(qno);
  var maindiv = document.getElementById("maindiv");
  maindiv.appendChild(divnm);
  //container for storing question image and options
  var containerdiv = document.createElement("div");
  containerdiv.setAttribute("class", "container");
  maindiv.appendChild(containerdiv);
  //imagediv for image of the question
  var imagediv = document.createElement("div");
  imagediv.setAttribute("class", "imbox");
  imagediv.setAttribute("id", "pic");
  var image = document.createElement("img");
  image.setAttribute("src", "img/1.png");
  image.setAttribute("id", "qpic")
  image.setAttribute("alt", "random celeb");
  imagediv.appendChild(image);
  containerdiv.appendChild(imagediv);

  //first option
  var option0 = document.createElement("div");
  option0.setAttribute("class", "tbox");
  option0.setAttribute("id", "op0");
  var op0text = document.createElement("input");
  op0text.setAttribute("type", "radio");
  op0text.setAttribute("name", "options");
  op0text.setAttribute("value", "radio0");
  op0text.setAttribute("id", "radio0");
  var op0label = document.createElement("label");
  op0label.setAttribute("for", "radio0");
  op0label.setAttribute("id", "OP0");
  op0label.innerHTML = "radio0";
  option0.appendChild(op0text);
  option0.appendChild(op0label);
  containerdiv.appendChild(option0);

  //second option
  var option1 = document.createElement("div");
  option1.setAttribute("class", "tbox");
  option1.setAttribute("id", "op1");
  var op1text = document.createElement("input");
  op1text.setAttribute("type", "radio");
  op1text.setAttribute("name", "options");
  op1text.setAttribute("value", "radio1");
  op1text.setAttribute("id", "radio1");
  var op1label = document.createElement("label");
  op1label.setAttribute("for", "radio1");
  op1label.setAttribute("id", "OP1");
  op1label.innerHTML = "radio1";
  option1.appendChild(op1text);
  option1.appendChild(op1label);
  containerdiv.appendChild(option1);

  //third option
  var option2 = document.createElement("div");
  option2.setAttribute("class", "tbox");
  option2.setAttribute("id", "op2");
  var op2text = document.createElement("input");
  op2text.setAttribute("type", "radio");
  op2text.setAttribute("name", "options");
  op2text.setAttribute("value", "radio2");
  op2text.setAttribute("id", "radio2");
  var op2label = document.createElement("label");
  op2label.setAttribute("for", "radio2");
  op2label.setAttribute("id", "OP2");
  op2label.innerHTML = "radio2";
  option2.appendChild(op2text);
  option2.appendChild(op2label);
  containerdiv.appendChild(option2);

  // fourth option
  var option3 = document.createElement("div");
  option3.setAttribute("class", "tbox");
  option3.setAttribute("id", "op3");
  var op3text = document.createElement("input");
  op3text.setAttribute("type", "radio");
  op3text.setAttribute("name", "options");
  op3text.setAttribute("value", "radio3");
  op3text.setAttribute("id", "radio3");
  var op3label = document.createElement("label");
  op3label.setAttribute("for", "radio3");
  op3label.setAttribute("id", "OP3");
  op3label.innerHTML = "radio3";
  option3.appendChild(op3text);
  option3.appendChild(op3label);
  containerdiv.appendChild(option3);

  //scoreboard with current score, personal best, global best and
  // submit button
  var scorebox = document.createElement("div");
  scorebox.setAttribute("class", "sbox");
  scorebox.setAttribute("id", "scorebox");
  var sboxtext_0 = document.createElement("p");
  sboxtext_0.innerHTML = "SCORES";
  var sboxtext_prev = document.createElement("p");
  sboxtext_prev.setAttribute("id", "prevStatus");
  sboxtext_prev.innerHTML = "Previous Answer: -"
  var sboxtext_1 = document.createElement("p");
  sboxtext_1.innerHTML = "Your current score: 10";
  sboxtext_1.setAttribute("id", "curScore");
  var sboxtext_2 = document.createElement("p");
  sboxtext_2.setAttribute("id", "personalBest");
  sboxtext_2.innerHTML = "Your best score: 10";
  var sboxtext_3 = document.createElement("p");
  sboxtext_3.innerHTML = "Global best score: 10";
  sboxtext_3.setAttribute("id", "globalBest");
  var nextBtn = document.createElement("button");
  nextBtn.setAttribute("type", "button");
  nextBtn.id = "nextbutton";
  nextBtn.innerHTML = "  Submit!  ";
  nextBtn.addEventListener("click", checkAns);

  scorebox.appendChild(sboxtext_0);
  scorebox.appendChild(sboxtext_prev);
  scorebox.appendChild(sboxtext_1);
  scorebox.appendChild(sboxtext_2);
  scorebox.appendChild(sboxtext_3);
  scorebox.appendChild(nextBtn);
  containerdiv.appendChild(scorebox);

  maindiv.appendChild(containerdiv);
  //the data inside the html elements was static while first loading them
  //initPageData loads the actual contents of the elements dynamically
  initPageData();
}

function initPageData() {

  //setting up question number and score values
  var quesNum = document.getElementById("qno");
  quesNum.innerHTML = "#" + (count + 1);

  var currentScore = document.getElementById("curScore");
  currentScore.innerHTML = "Your current score:" + myscore;

  var personalBestScore = window.localStorage.getItem(playername);
  document.getElementById("personalBest").innerHTML = "Your Best Score: " + personalBestScore;

  var globalBestScore = window.localStorage.getItem("global best");
  document.getElementById("globalBest").innerHTML = "Global best score: " + globalBestScore;

  if (count == 10) {
    //game ends after 10 questions
    showResults();
  }

  //setting all radio buttons to unchecked on loading the data
  var boxes = document.getElementsByName("options");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].checked = false;
  }

  //generating a random number for selecting a question
  while (done[qno] == 1) {
    qno = Math.floor((Math.random() * 20) + 1);
    qno = qno - 1;
  }

  //setting done of question index to 1 to indicate that the
  //question has been asked in this game
  done[qno] = 1;
  //choosing options to be displayed, including the correct answer
  var ans = options[qno];
  var o1 = options[(qno + 5) % 20];
  var o2 = options[(qno + 11) % 20];
  var o3 = options[(qno + 13) % 20];

  //choosing random positions for placing the options
  var indans = Math.floor((Math.random() * 4) + 1);
  indans = indans - 1;
  var indo1 = (indans + 1) % 4;
  var indo2 = (indans + 2) % 4;
  var indo3 = (indans + 3) % 4;

  //setting label for each radio button as option text
  document.getElementById("OP" + indans).innerHTML = ans;
  document.getElementById("OP" + indo1).innerHTML = o1;
  document.getElementById("OP" + indo2).innerHTML = o2;
  document.getElementById("OP" + indo3).innerHTML = o3;

  //setting value for each radio button as option text
  document.getElementById("radio" + indans).setAttribute("value", ans);
  document.getElementById("radio" + indo1).setAttribute("value", o1);
  document.getElementById("radio" + indo2).setAttribute("value", o2);
  document.getElementById("radio" + indo3).setAttribute("value", o3);

  //displaying the image
  var imageToDisplay = "img/" + qno + ".png";
  var img = document.getElementById("pic").firstChild;
  img.setAttribute("src", imageToDisplay);

}

//function to check the response of the user on click of submit button
function checkAns() {

  var response;
  var responses = document.getElementsByName("options");
  for (var i = 0; i < responses.length; i++) {
    if (responses[i].checked) {
      response = responses[i].value;
      break;
    }
  }

  var img = document.getElementById("qpic");
  var imgname = img.getAttribute("src");
  //to get the index of question image (one digit/two digit)(0-19)
  var imgno;
  if (imgname.charAt(5) == '.') {
    imgno = imgname.charAt(4);
  } else {
    imgno = imgname.substring(4, 6);
  }


  if (response === options[imgno]) {
    document.getElementById("prevStatus").innerHTML = "Previous Answer: Correct";
    myscore = myscore + 1;
  } else {
    document.getElementById("prevStatus").innerHTML = "Previous Answer: Wrong";
  }
  count = count + 1;
  // reinitialize data for next question
  initPageData();
}

function showResults() {
  //make the container containing questions, otions anc score disappear
  var bigContainer = document.getElementsByClassName("container")[0];
  bigContainer.setAttribute("style", "display:none");

  var myBestScore = window.localStorage.getItem(playername);
  document.getElementById("qno").innerHTML = "Score: " + myscore + " Global best: " + window.localStorage.getItem("global best");

  if (myscore > myBestScore) {
    window.localStorage.setItem(playername, myscore);
    document.getElementById('greeting').firstChild.innerHTML = "Congrats! You've broken your old personal record!";
  }

  var gb = window.localStorage.getItem("global best");
  if (myscore >= gb) {
    window.localStorage.setItem("global best", myscore);
    document.getElementById('greeting').firstChild.innerHTML = "Congrats! You've made a high score, a global best!";
  }

}
