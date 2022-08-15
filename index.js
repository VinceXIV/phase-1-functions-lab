// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    const scuberHeadquarters = 42;

    return Math.abs(pickUpLocation - scuberHeadquarters)
}

function distanceFromHqInFeet(pickUpLocation){
    const distanceOfABlock = 264; //the value is in feets

    return distanceFromHqInBlocks(pickUpLocation) * distanceOfABlock;
}

function distanceTravelledInFeet(start, destination){
    const distanceInBlocks = Math.abs(start - destination);
    const distanceOfABlock = 264 //the value is in feets

    return distanceInBlocks * distanceOfABlock;
}

function calculatesFarePrice(start, destination){
    const distanceTravelled = distanceTravelledInFeet(start, destination)

    let totalFarePrice = 0;

    if (distanceTravelled <= 400){
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000){
        return 2*(distanceTravelled - 400)/100;
        
    }else if (distanceTravelled > 2000 && distanceTravelled <= 2500){
        return 25;
    }else if (distanceTravelled > 2500){
        return 'cannot travel that far'
    }
}