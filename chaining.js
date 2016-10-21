var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];




newInt = integers.sort((a,b) => a - b).reverse().filter(function(a){if( a < 19) return a }).map(function(a){ return (a * 1.5)-1}).reduce((a, b) => a + b,0);




console.log(newInt)
var output = document.getElementById("dom");
output.innerHTML = "The output of Integers is: " + newInt ;
