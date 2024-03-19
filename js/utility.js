function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getRandomIntUnique(min, max, numBomb){
    let uniqueInt;
    let isFound = false;
    let blacklist = [];
    while(!isFound){
        while(blacklist.length<numBomb){
            uniqueInt = getRndInteger(min, max);
            if(!blacklist.includes(uniqueInt)){
                isFound = true;
                blacklist.push(uniqueInt);
            }
        }
    return blacklist;
    }
}