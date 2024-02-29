// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber){
     return Math.abs(42 - streetNumber)
}

function distanceFromHqInFeet(streetNumber){
    const blocks = Math.abs(42 - streetNumber)
    const feets = blocks * 264;
    return feets
}
function distanceTravelledInFeet(streetNumber1 , streetNumber2){
const blocks = Math.abs(streetNumber1-streetNumber2)
const feets = blocks * 264;
return feets
}


function calculatesFarePrice(start, destination){
    const feets = distanceTravelledInFeet(start , destination)
    if(feets < 400){
        return 0
    }else if(feets >= 400 && feets <=2000){
        return (feets-400) * 2 /100 
    }else if(feets > 2000 && feets <= 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
}
console.log(calculatesFarePrice(43, 44));
console.log(distanceTravelledInFeet(34, 32));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));