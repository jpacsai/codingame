/*
In this exercise, you have to analyze records of temperature to find the closest to zero.

Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).

Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.

*/

var n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

var closest = 5526;
var result = 0;

for (var i = 0; i < n; i++) {
    var t = parseInt(inputs[i]);
    var distance = Math.abs(t);
    if (distance <= closest) {
        closest = distance;
        if ((Math.abs(inputs[i]) === Math.abs(result) && inputs[i] > result) || Math.abs(inputs[i]) != Math.abs(result)) {
            result = inputs[i];
        }
        
    }
}

print(result);