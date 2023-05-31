
var random_n1 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage1 = "dice" + random_n1 +".png";
var image_src1="images/"+ randomDiceImage1;

document.querySelectorAll("img")[0].setAttribute("src",image_src1)

var random_n2 = Math.floor(Math.random() * 6 ) + 1;
var image_src2 = "images/dice" + random_n2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",image_src2)

// if player 1 wins

if(random_n1 > random_n2){
    document.querySelector("h1").innerHTML="🏆 Player 1 Wins";
}
else if(random_n1 < random_n2){
    document.querySelector("h1").innerHTML=" Player 2 Wins 🏆";

}
else{
    document.querySelector("h1").innerHTML=" Draw !!! ";

}