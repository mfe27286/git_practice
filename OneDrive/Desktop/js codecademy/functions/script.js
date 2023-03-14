// const thisFunction = function(parameter1, parameter2){
//     const total = parameter1 + parameter2
//     return console.log(total)
// }

// thisFunction(10, 20)
// thisFunction(1, 2)



// // function to take random number between 2 parameters away from the health variable
// let health = 1000

// function randNum(min, max){
//     return health -= Math.floor(Math.random() * (max - min + 1)+ min) 
// }
// console.log(randNum(5, 77))
// console.log(randNum(17, 97))
// console.log(randNum(75, 124))
// console.log(randNum(48, 177))
// console.log(health)

// // short hand function to water plants
// const plantNeedsWater = (day) => {
//     return day === 'Wednesday' ? true : false;
// }

// // shortest hand function to water plants
// const plantNeedsWaterShoretest = day => day === 'Wednesday' ? true : false;

// // square a number function in short hand
// let sqrNum = (num) => console.log(num * num)

// sqrNum(6)


// // rock scissors paper game
// const getUserChoice = userInput => {
//     userInput = userInput.toLowerCase()
//     if(userInput === 'scissors' || userInput === 'rock' || userInput === 'paper'){
//         return userInput
//     }else{
//         return console.log("error: please choose rock, scissors or paper")
//     }
// }
// const getComputerChoice = () => {
//     const randNumb = Math.floor(Math.random() * 3)
//     switch (randNumb) {
//         case 0:
//             return 'rock';
//             break;
//         case 1:
//             return 'scissors';
//             break;
//         case 2:
//             return 'paper';
//             break;
//     }
// }
// const determineWinner = (userChoice, computerChoice) => {
//     if(userChoice === computerChoice){
//         return console.log("It's a draw!")
//     }
//     if(userChoice === 'rock'){
//         if(computerChoice === 'paper'){
//             console.log('Sorry, you lose!')
//         }else if(computerChoice === "scissors"){
//             console.log('Congrats, you win!')
//         }
//     }
//     if(userChoice === 'paper'){
//         if(computerChoice === 'scissors'){
//             console.log('Sorry, you lose!')
//         }else if(computerChoice === "rock"){
//             console.log('Congrats, you win!')
//         }
//     }
//     if(userChoice === 'scissors'){
//         if(computerChoice === 'rock'){
//             console.log('Sorry, you lose!')
//         }else if(computerChoice === 'paper'){
//             console.log('Congrats, you win!')
//         }
//     }
// }


// const playGame = () => {
//     const userChoice = getUserChoice('scissors')
//     const computerChoice = getComputerChoice()
//     console.log(`You chose ${userChoice}`)
//     console.log('The computer chose ' + computerChoice)
//     determineWinner(userChoice, computerChoice)
// }
// playGame()


// sleep debt calculator

const getSleepHours = day => {
    switch (day){
        case 'monday':
        return 8
        break
        case 'tuesday':
        return 4
        break
        case 'wednesday':
        return 5
        break
        case 'thursday':
        return 6
        break
        case 'friday':
        return 12
        break
        case 'saturday':
        return 12
        break
        case 'sunday':
        return 10
        break
    }
}

const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

const getIdealSleepHours = () => {
    const idealHours = 8 * 7
    return idealHours
}
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
    const sleepNeeded = idealSleepHours - actualSleepHours
    const overSleptBy =  actualSleepHours -idealSleepHours
    if(actualSleepHours === idealSleepHours){
        console.log('You got your preferred amount of sleep')
    }else if(actualSleepHours > idealSleepHours){
        console.log(' You slept more than needed by ' + overSleptBy + ' hour/s')
    }else{
        console.log('You should get some rest, you need ' + sleepNeeded + ' more hours this week')
    }
}

calculateSleepDebt()

function reverseArray(arr){
    let reversed=[]
    for (let i = arr.length -1; i >= 0; i--){
      reversed.push( arr[i])}
      return reversed
  }
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  let sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  //Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
  // Write your code here:
  
  function greetAliens(arr){
    let string = []
    for(let i = 0; i<arr.length; i++){
      string+= 'Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender! \n'
    }
    return console.log(string)
  }
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);