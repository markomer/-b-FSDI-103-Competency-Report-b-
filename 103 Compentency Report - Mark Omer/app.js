let hunger=80;
let happiness=50;
let energy=40;

function displayInfo(){
  document.getElementById("hungerInfo").innerHTML=`Hunger = ${hunger}`;
  document.getElementById("happinessInfo").innerHTML=`Happiness = ${happiness}`;
  document.getElementById("energyInfo").innerHTML=`Energy = ${energy}`;
  
}

function feed(){
  console.log("Feed function");
  //affect vars (increase the happiness and decrease hunger +-10)
  hunger=hunger-10;
  happiness=happiness-10;
  energy=energy+10;
  //call the displayInfo
  displayInfo();

}

function pet(){
  //increase the happiness
  console.log("Pet funtion");
  happiness=happiness+10;
  displayInfo();
}

function play(){
  //increse the happiness decrease energy
  console.log("Play funtion");
  happiness=happiness+10;
  energy=energy-10;
  hunger=hunger+10;
  displayInfo();
}

displayInfo();
