let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = getElementByClassName('box')

//// 5th time back up,  grab the css styling to highlight 
//the inning blocks should the match end grabbing it from the css sheet
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
////

const X_TEXT = "X"
const O_TEXT = "O"
let currentPlayer = X_TEXT
let spaces =Array(9). fill(null)

const startgame = () => {
    boxes.forEach(box => box.addEventListener('click', boxesClicked))
}
// boxesClicked targets the id of each box clicked, now that the 'clicked'
// event listener has been added with the start game fucntion.

function boxesClicked(e) {
    const id =e.target.id

    //check if spaces that is filled with id does not equal to null,
    // because by defenition of ''spaces' they ARE.

    //this means the box has not been clicked, because clicking it targets the id.
    
    if(!spaces[id]){
    spaces[id] = currentPlayer
    //so if its not equal to null then it must have been clicked,
    // and when clicked it turns it into, currentPlayer
    e.target.innerText = currentPlayer

    //2nd time around after making restartBtn below this in the 2nd 
    //if statement function
    if(playerHasWon() !==false)//<------4th time back up now that we did winning combos 
    //and playerHaswon, we need to make sure false is not true/ is true
    //////
    {
     playerText = '${currentPlayer} has won!'
     //// now if we have won we will need to display the winning blocks
      let winning_blocks = playerHasWon()

      ///////last time down the list to apply the css style ot the inning blocks
      ////////we need to map over easch array and apply the style from the 
      ////////winningIndicator
      //////// we are mapping through an array
      ////////through the box that gets returned by the winning combo and return
      ////////the array of that box from the boxes and add the style and background of winningIndicator
      winning_blocks.map(box => boxes[box].computedStyleMap.backgroundColor = winningIndicator)
      //////// then return out of the whole thing
      return
     ////
    }
    //

    //now determine if crurrentPlayer is 'X' or 'O'
    // current player is equal to whatever the above if will return, which is currentPlayer
    //if current player is equal to 'X' then change it to 'O', or else, change to 'X'
    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

//3rd time back down and then up, now that we made playerhaswon if statement we 
//need to make the function, first, make winning combos
const winningCombos = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,3,0],
    [6,4,2],
    [6,7,8],
    [1,4,7]
]


//loop over the winning combos with for loop to iterate of winning combos object.
function playerHasWon () {
    //condition is the winning combos, under condition of the (array)
    //aka those array slots are filled / 'clicked'
for(const condition of winningCombos) {
    //define condition, so a b and c of the array.
let [a, b, c] = condition
// make second condition, if spaces index is a, then
// under that condition check if a is equal to b
//and if b is equal to c
if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
    //if they are true then return the array/condition
    return [a,b,c]
}
}
//if not true then return false, so that we can continue on with the game, now
//  go back up to boxesClicked and add the 'if not false'
return false
}


//

//now just as we made restart button in html we need to add it to js
// so addevent listener that is triggered by a 'click', and 
//upon 'click', run the function 'restart'
restartBtn.addEventListener('click', restart)

//define what clicking restart will do
function restart() {
    spaces.fill(null)
//it undoes all the changes we have just made
    boxes.forEach(box => {
        box.innerText = ''
    })

    //2nd time back around after we made the playerHasWon function to
    //define/redifine playerText when hitting restartBtn
    plyerText = 'Tic Tac Toe'
    //


    currentPlayer = X_TEXT
}

//after this go back up to function boxesClicked and add another IF statement 
//to see if anyone has won 