var output = document.getElementById('output');
output.innerHTML = "";

var drinks = ['coffee soda', 'pouet', 'tada!'];

var coldDrinks = drinks.map(function (d) {
    return 'x' + d;
});

var numbers = [1, 2, 3, 4, 10];

var lucky = numbers.filter(function (d) {
    return d > 7;
});

var test = ['ncin', 'nfeinu', 'yubdy', 6, 7];
var pouet = test.push('dieyby'); // pouet = 6 = test.length

output.innerHTML += "coldDrinks = " + coldDrinks + '<br><br>' + "lucky = " + lucky + '<br><br>' + "test = " + test + '<br><br>';

for (var i = 0; i < 10; i++) {
    output.innerHTML += "Iteration " + i + '<br>';
}
;

var sum = [1, 2, 3, 4, 5].reduce(function (memo, val) {
    return memo + val;
}); // sum = 15

var pokemon = ["squirtle", "charmander", "bulbasaur"];
var pokeLength =
    pokemon.reduce(function (previous, current) {
        return previous + current.length;
    }, 0);
output.innerHTML += pokeLength + '<br><br>'; // 27

var input = "I'm %USER% and I live in %COUNTRY%";
var data = [{token: '%USER%', value: 'lionel'}, {token: '%COUNTRY%', value: 'France'}];

var sortie = data.reduce(function (memo, item) {
    return memo.replace(item.token, item.value);
}, input);

output.innerHTML += sortie + '<br><br>'; // output = "I'm lionel and I live in France"

function functionTest(optional) {

}; // déclaration de Fonction


function optional(optFormalParameter) {

};// expression de Fonction

function foo() {
}; // declaration, car c’est une partie d’un programme


(function () {
    function bar() {
    } // declaration, car on est dans le corps d’une fonction
})();


var bar = function foo() {
}; // expression, car on à affaire à une expression d’affectation

new function bar() {
};  // expression, car c’est une partie d’une déclaration new

(function () {
    console.log('test');
    ; //Immediatly Invoked Function Expression (IIFE)
})();

/*********************************************************************************************/
/* Protect your global environment from being polluted by your code with immediately-invoked */
/* function expressions (IIFE). Code within an IIFE is within its own lexical scope: *********/
/*********************************************************************************************/
(function () {
    // your stuff here
})();

/*********************************************************************/
//Passing in variables

//You can pass variables in the IIFE's scope with something like this:
/*********************************************************************/
var jQuery = 'rapp';

(function ($) {
    // $ == jQuery;
})(jQuery);


// If you're in a function then var will create a local variable, "no var" will look up the scope chain until it finds the variable or hits the global scope (at which point it will create it):

// These are both globals
var foo = 1;
bar = 2;

function()
{
    var foo = 1; // Local
    bar = 2;     // Global

    // Execute an anonymous function
    (function()
    {
        var wibble = 1; // Local
        foo = 2; // Inherits from scope above (creating a closure)
        moo = 3; // Global
    }())
}

// If you're not doing an assignment then you need to use var:

var x; // Declare x


// énumérer les propriétés d'un objet seulement (sans les méthodes)
Object.getOwnPropertyNames(obj).forEach(
    function (val, idx, array) {

        if (typeof obj[val] !== "function") {
            console.log(val + ' -> ' + obj[val]); }
    }
);

// Default obj.pwd property value, allow to use it later
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
var handler = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            0;
    }
};

var pwd = new Proxy({}, handler);