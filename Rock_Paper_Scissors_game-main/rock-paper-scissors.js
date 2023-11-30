// play rock-paper-scissor game
//Raghad khatatba
"use strict";
(function () {
    window.addEventListener("load", init);
    let main = Id("main");
    let biggercontainer = Id("biggercontainer");
    let Prev = Id("Prev");
    let playagain = qs(".newgame");
    let result = qs(".finalresult h1");
    function init() {
        // add listener to the main
        main.addEventListener("click", (eo) => {
            //If the rock are pressed
            if (eo.target.className === "rock1" || eo.target.className === "rock" || eo.target.className === "wrapper1") {
                display();
                //Add the image that the user has pressed
                Id("userimage").src = "images/Rock-icon.png";
                let computerimage = coputerimage();
                let userimage = Id("userimage").src;
                imagerock(computerimage);
            }
            //If the scissors are pressed
            if (eo.target.className === "scissor1" || eo.target.className == "scissor" || eo.target.className === "wrapper3") {
                display();
                //Add the image that the user has pressed
                Id("userimage").src = "images/Scissor-icon.png";
                let computerimage = coputerimage();
                let userimage = Id("userimage").src;
                imagescissors(computerimage);
            }
            //If the paper are pressed
            if (eo.target.className === "paper1" || eo.target.className === "paper" || eo.target.className === "wrapper2") {
                display();
                //Add the image that the user has pressed
                Id("userimage").src = "images/Paper-icon.png";
                let computerimage = coputerimage();
                let userimage = Id("userimage").src;
                imagepaper(computerimage);
            }
        })
        //return to the main page
        playagain.addEventListener("click", () => {
            play_again()
        })
        //go to the previse page
        Prev.addEventListener("click", () => {
            document.location.href = "Rules Page and game type page.html";
        })
    }
    //Nama' Salameh     (all cases of the first game)
    //cases of rock's image
    function imagerock(computerimage) {
        //to change the score( convert the score to int )
        let score = parseInt(Id("score").textContent);
        //for draw
        if (computerimage == "images/Rock-icon.png") {
            changeResult("DRAW ");
        }
        //for lose
        if (computerimage == "images/Paper-icon.png") {
            changeResult("YOU LOSE");
            changeScore(score - 1);
            Effect2();
        }
        //for win
        if (computerimage == "images/Scissor-icon.png") {
            changeResult("YOU WIN");
            changeScore(score + 1);
            Effect1();
        }

    }
    //cases of paper's image
    function imagepaper(computerimage) {
        //to change the score( convert the score to int )
        let score = parseInt(Id("score").textContent);
        //for draw
        if (computerimage == "images/Paper-icon.png") {
            changeResult("DRAW ");
        }
        //for lose
        if (computerimage == "images/Scissor-icon.png") {
            changeResult("YOU LOSE ");
            changeScore(score - 1);
            Effect2();
        }
        //for win
        if (computerimage == "images/Rock-icon.png") {
            changeResult("YOU WIN ");
            changeScore(score + 1);
            Effect1();
        }
    }
    //cases of scissors's image
    function imagescissors(computerimage) {
        //to change the score( convert the score to int )
        let score = parseInt(Id("score").textContent);
        //for draw
        if (computerimage == "images/Scissor-icon.png") {
            changeResult("DRAW ");
        }
        //for lose
        if (computerimage == "images/Rock-icon.png") {
            changeResult("YOU LOSE ");
            changeScore(score - 1);
            Effect2();
        }
        //for win
        if (computerimage == "images/Paper-icon.png") {
            changeResult("YOU WIN ");
            changeScore(score + 1);
            Effect1();
        }
    }
    //Change the  score
    function changeScore(valueofscore) {
        Id("score").textContent = valueofscore
    }
    //Change the result
    function changeResult(text) {
        result.innerText = text;
    }
    //Raghad khatatba
    //show the random img
    let coputerimage = () => {
        let images = ["images/Paper-icon.png", "images/Scissor-icon.png", "images/Rock-icon.png"];
        let randimg = images[Math.floor(Math.random() * 3)];
        Id("coputerimage").src = randimg;
        return randimg;
    }
    //hid and show in the page
    let display = () => {
        //Hide the current page
        main.style.display = "none";
        //show the bigger container
        biggercontainer.style.display = "flex";
        //Hide the prev botton
        Prev.style.display = "none";
        soundbutton.style.display = "none";
    }
    //return to the main page
    let play_again = () => {
        //show the current page
        main.style.display = "flex";
        //Hide the bigger container
        biggercontainer.style.display = "none";
        //show the prev botton
        Prev.style.display = "block";
        Id("Effect1").style.boxShadow = "";
        Id("Effect2").style.boxShadow = "";
        soundbutton.style.display = "flex";
    }
    /**
* Music Button 
* Ahmad Amer
*/
    var music = new Audio();
    let soundbutton = qs("#Play");
    var Play = document.getElementById("Play");
    music.src = 'music.mp3';
    music.loop = true;
    Play.addEventListener('click', fplay);
    function fplay() {
        soundbutton.classList.toggle("soundbutton2");
        if (music.paused) {
            music.play();
        }
        else {
            music.pause();
        }
    }
    /*
    show Effects on the winning photo
    Raghad Khatatba
*/
    let Effect1 = ()=>{
        Id("Effect1").style.boxShadow ="0 0 0 40px #293251 , 0 0 0 80px #232C4B , 0 0 0 130px #1E2949";
        Id("Effect1").style.zIndex="-1";
        Id("Effect2").style.zIndex="1";
    }
    let Effect2 = ()=>{
        Id("Effect2").style.boxShadow ="0 0 0 40px #293251 , 0 0 0 80px #232C4B , 0 0 0 130px #1E2949";
        Id("Effect2").style.zIndex="-1";
        Id("Effect1").style.zIndex="1";
    }
    /**
      * Returns the element that has the ID attribute with the specified value.
      * @param {string} name - element ID.
      * @returns {object} - DOM object associated with id.
      */
    function Id(name) {
        return document.getElementById(name);
    }

    /**
     * Returns first element matching selector.
     * @param {string} selector - CSS query selector.
     * @returns {object} - DOM object associated selector.
     */
    function qs(selector) {
        return document.querySelector(selector);
    }
    /**
     * Returns an array of elements matching the given query.
     * @param {string} query - CSS query selector.
     * @returns {array} - Array of DOM objects matching the given query.
     */
    function qsa(query) {
        return document.querySelectorAll(query);
    }
})();
