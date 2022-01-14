
var buttons={
green: document.getElementById("greenButton"),
blue:document.getElementById("blueButton"),
red: document.getElementById("redButton"),
yellow: document.getElementById("yellowButton"),
};


var app= {
  simonArray:[],
  currentLevel:0,
  correctNum:0,
  currentIndex:0,

playRound: function (roundNumber){
       this.currentIndex = 0;
       this.currentLevel++;
       this.simonArray.push(Math.floor((Math.random() * 4)));
       console.log(this.simonArray)
       for (let k = 0; k < this.simonArray.length; k++)
       {
         var time = 600*k;
         setTimeout(() => {this.flashColor(this.simonArray[k])},time);
       }
       this.correctNum = this.simonArray[0];
},
init: function(){
       this.simonArray = [];
       this.currentLevel = 0;
       buttons.green.addEventListener("click", this.buttonClicked);
       buttons.blue.addEventListener("click", this.buttonClicked);
       buttons.red.addEventListener("click", this.buttonClicked);
       buttons.yellow.addEventListener("click", this.buttonClicked);
       this.playRound(1);
},

flashColor: function(num) {
       if (num == 0)
       {
         buttons.green.classList.add("litG");
         setTimeout(() => {buttons.green.classList.remove("litG")}, 1200);
       }
       if (num == 1)
       {
         buttons.blue.classList.add("litB");
         setTimeout(() => {buttons.blue.classList.remove("litB")}, 1200);
       }
       if (num == 2)
       {
         buttons.red.classList.add("litR");
         setTimeout(() => {buttons.red.classList.remove("litR")}, 1200);
       }
       if (num == 3)
       {
         buttons.yellow.classList.add("litY");
         setTimeout(() => {buttons.yellow.classList.remove("litY")}, 1200);
       }
},

flash: function(num){
       if (num == 0)
       {
         buttons.green.classList.add("litG");
         setTimeout(() => {buttons.green.classList.remove("litG")}, 300);
       }
       if (num == 1)
       {
        buttons.blue.classList.add("litB");
         setTimeout(() => {buttons.blue.classList.remove("litB")}, 300);
       }
       if (num == 2)
       {
         buttons.red.classList.add("litR");
         setTimeout(() => {buttons.red.classList.remove("litR")}, 300);
       }
       if (num == 3)
       {
         buttons.yellow.classList.add("litY");
         setTimeout(() => {buttons.yellow.classList.remove("litY")}, 300);
       }
},

buttonClicked: function(){
       if (id === "greenButton")
       {
         if (this.correctNum == 0)
         {
           this.flash(0);
           if (this.currentIndex+1 == this.simonArray.length)
           {
             setTimeout(() => {this.playRound(this.simonArray.length+1)}, 1000);
           }
           else
           {
             this.currentIndex++;
             this.correctNum = this.simonArray[this.currentIndex];
           }
         }
         else
         {
           alert ("You lost at level " + this.currentLevel + ". Please try again");
           if (this.currentLevel>window.localStorage.myHighScore)
           {
               window.localStorage.myHighScore = this.currentLevel;
               document.getElementById("highScore").innerHTML= "High Score: " + this.currentLevel;
           }
         }
       }
       else if (id === "blueButton")
       {
         if (this.correctNum == 1)
         {
           this.flash(1);
           if (this.currentIndex+1 == this.simonArray.length)
           {
             setTimeout(() => {this.playRound(this.simonArray.length+1)}, 1000);
           }
           else
           {
             this.currentIndex++;
             this.correctNum = this.simonArray[this.currentIndex];
           }
         }
         else
         {
           alert ("You lost at level " + this.currentLevel + ". Please try again");
           if (this.currentLevel>window.localStorage.myHighScore)
           {
               window.localStorage.myHighScore = this.currentLevel;
               document.getElementById("highScore").innerHTML= "High Score: " + this.currentLevel;
           }
         }
       }
       else if (id === "redButton")
       {
         if (this.correctNum == 2)
         {
           this.flash(2);
           if (this.currentIndex+1 == this.simonArray.length)
           {
             setTimeout(() => {this.playRound(app.simonArray.length+1)}, 1000);
           }
           else
           {
             this.currentIndex++;
             this.correctNum = this.simonArray[this.currentIndex];
           }
         }
         else
         {
           alert ("You lost at level " + this.currentLevel + ". Please try again");
           if (this.currentLevel>window.localStorage.myHighScore)
           {
               window.localStorage.myHighScore = this.currentLevel;
               document.getElementById("highScore").innerHTML= "High Score: " + this.currentLevel;
           }
         }
       }
       else if (id === "yellowButton")
       {
         if (this.correctNum == 3)
         {
           this.flash(3);
           if (this.currentIndex+1 == this.simonArray.length)
           {
             setTimeout(() => {this.playRound(this.simonArray.length+1)}, 1000);
           }
           else
           {
             this.currentIndex++;
             this.correctNum = this.simonArray[this.currentIndex];
           }
         }
         else
         {
           alert ("You lost at level " + this.currentLevel + ". Please try again");
           if (this.currentLevel>window.localStorage.myHighScore)
           {
               window.localStorage.myHighScore = this.currentLevel;
               document.getElementById("highScore").innerHTML= "High Score: " + this.currentLevel;
           }
         }
       }
   }
};

document.getElementById("highScore").innerHTML="High Score: " + window.localStorage.myHighScore;
document.getElementById("startButton").addEventListener("click", function(){app.init();});
