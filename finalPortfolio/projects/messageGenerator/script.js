let quote1 = 'Either you run the day or the day runs you.'
let quote2 = 'If you fell down yesterday, stand up today.'
let quote3 = 'Optimism is the faith that leads to achievement.'
let quote4 = 'Believe in yourself!'

let randNum = Math.floor(Math.random() * 4)
console.log(randNum)
if (randNum === 0){
    console.log(quote1)
}
else if(randNum === 1){
    console.log(quote2)
}
else if(randNum === 2){
    console.log(quote3)
}
else if(randNum === 3){
    console.log(quote4)
}