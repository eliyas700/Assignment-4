function anaToVori(ana){

    if (ana >=.001) {
        let resultInVori = ana / 16;
    return resultInVori ;
    }
    else {
        return `Please Type a Positive Number`;
    }
    } 
   
    

console.log(anaToVori(0.01));