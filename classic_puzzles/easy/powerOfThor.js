/*
Thor moves on a map which is 40 wide by 18 high. Note that the coordinates (X and Y) start at the top left! This means the most top left cell has the coordinates "X=0,Y=0" and the most bottom right one has the coordinates "X=39,Y=17".

Once the program starts you are given:
the variable lightX: the X position of the light of power that Thor must reach.
the variable lightY: the Y position of the light of power that Thor must reach.
the variable initialTX: the starting X position of Thor.
the variable initialTY: the starting Y position of Thor.
At the end of the game turn, you must output the direction in which you want Thor to go among:

Each movement makes Thor move by 1 cell in the chosen direction.

Victory Conditions
You win when Thor reaches the light of power
 
Lose Conditions
Thor moves outside the map
*/

while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    var solution = '';
        if (lightY >= initialTY + 1) {
            solution = 'S';
            initialTY++;
        }
        else if (lightY <= initialTY - 1) {
            solution = 'N';
            initialTY--;
        }
        if (lightX >= initialTX + 1) {
            solution += 'E';
            initialTX++;
        }
        else if (lightX <= initialTX - 1) {
            solution += 'W';
            initialTX--;
        }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(solution);
}