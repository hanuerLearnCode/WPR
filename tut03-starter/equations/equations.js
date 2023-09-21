/*
 * Quadratic equation solver exercise
 *
 * TODO: implement the functionality for index.html webpage to solve quadratic equations
 * Use-case scenario: when a user enters numbers on three text fields with ids of "a",
 * "b", "c" and clicks "Solve" button, equation solution will be displayed on the <div>
 * with id "result".
 */

"use strict";

(function() {
    window.addEventListener('load', init);

    function init() {
        // accessing DOM
        let button = document.querySelector('button');
        button.addEventListener('click', solve);
        let result = document.getElementById('result');
        
        /**
         * Solving function
         */
        function solve () {
            // getting input
            let a = parseFloat(document.getElementById('a').value);
            let b = parseFloat(document.getElementById('b').value);
            let c = parseFloat(document.getElementById('c').value);

            // solving equation
            let r1, r2; // declaring roots

            // Calculate discriminant
            let D = b * b - 4 * a * c;

            // Condition for Real and Different roots
            if (D > 0) {
                r1 = (-b + Math.sqrt(D)) / (2 * a);
                r2 = (-b - Math.sqrt(D)) / (2 * a);
                // console.log(`The roots of the quadratic equation are ${r1} and ${r2}`);
                result.innerText = `The roots of the quadratic equation are ${r1} and ${r2}`;
            }

            // Condition for Real and Equal roots
            else if (D == 0) {
                r1 = r2 = -b / (2 * a);
                // console.log(`The roots of the quadratic equation are ${r1} and ${r2}`);
                result.innerText = `The roots of the quadratic equation are ${r1} and ${r2}`;
            }

            // If roots are not real
            else {
                // console.log(`The roots are complex and different`);
                result.innerText = `The roots are complex and different`;
            }
        }   
    }

}) ();
 