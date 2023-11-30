// Javascript for the first five pages 
//Raghad khatatba
"use strict";
(function () {
    window.addEventListener("load", init);
    function init() {
        //return the current page
        let page = document.body.id;
        //Pages probability
        switch (page) {
            // page : FirstBage
            case "body1":
                let body = Id("body1");
                body.addEventListener("click", (eo) => {
                    switch (eo.target.className) {
                        //go to the Rules Page and game type page 
                        case "but1": window.close(); window.open("Rules Page and game type page.html");
                            break;
                        //go to the Rules Page   
                        case "but2": window.close(); window.open("Rules Page.html");
                            break;
                        //button to close the window   
                        case "but3":
                            window.open('', '_parent', '');
                            window.close();
                            break;
                    }
                })
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
               
                break;
            //page :Rules Page and game type page.html
            case "body2":
                //go back to the First Bage
                let Prev = Id("Prev");
                Prev.addEventListener("click", () => {
                    window.close(); window.open("FirstBage.html");
                })
                //go to the First Level
                Id("FirstLevel").addEventListener("click", () => {
                    window.close(); window.open("rock-paper-scissors.html");
                })
                Id("seconedLevel").addEventListener("click", () => {
                    window.close(); window.open("SeconedLevel.html");
                })
                break;
            //page : Rules Page.html
            case "body3":
                let Prev1 = Id("Prev1");
                let Rules1 = Id("Rules1");
                let Rules2 = Id("Rules2");
                //go to the rules of first level page
                Rules1.addEventListener("click", () => {
                    window.close(); window.open("rules1 page.html");
                })
                //go to the rules of second level page
                Rules2.addEventListener("click", () => {
                    window.close(); window.open("rule2 pages.html");
                })
                //go to the First Level
                Prev1.addEventListener("click", () => {
                    
                    window.close(); window.open("FirstBage.html");
                })
                break;
            //page :rules1 page.html
            case "body4":
                let buttonX = Id("buttonX");
                //go back to the Rules Page
                buttonX.addEventListener("click", () => {
                    window.close(); window.open("Rules Page.html");
                })
                break;
               //page :rules2 page.html
            case "body5":
                //go back to the Rules Page
                let buttonX2 = Id("buttonX2");
                buttonX2.addEventListener("click", () => {
                    window.close(); window.open("Rules Page.html");
                })
                break;
        }
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

