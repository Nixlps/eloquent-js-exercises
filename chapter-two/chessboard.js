/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size , outputting a grid
of the given width and height.
*/

let chessBoard = []
for(let i=0;i<8;i++){
    chessBoard[i] = []
    for(let j=0;j<8;j++){
        if(i%2==0){
            if(j%2==0){
                chessBoard[i].push(' ')
            }
            else{
                chessBoard[i].push('#')
            }
        }
        else{
            if(j%2==0){
                chessBoard[i].push('#')
            }
            else{
                chessBoard[i].push(' ')
            }
        }
    }
}
console.log(chessBoard)