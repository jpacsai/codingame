/*
Destroy the mountains before your starship collides with one of them. For that, shoot the highest mountain on your path.
 	Rules
At the start of each game turn, you are given the height of the 8 mountains from left to right.
By the end of the game turn, you must fire on the highest mountain by outputting its index (from 0 to 7).

Firing on a mountain will only destroy part of it, reducing its height. Your ship descends after each pass.  
Victory Conditions
You win if you destroy every mountain

*/

while (true) {
    var mountain = 0;
    var index = 0;
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain.
        if (mountainH > mountain) {
            mountain = mountainH;
            index = i;
        }
    }
    print(index); // The index of the mountain to fire on.
}