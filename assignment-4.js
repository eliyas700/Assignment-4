//Problem-1(anaToVhori)
function anaToVori (ana){
    if (ana >= 1) {
        let resultInVori = ana / 16;
        return resultInVori ;
    }
    else {
        return `Please Type a Positive Number`;
    }
    } ;
console.log(anaToVori(1));

// Problem-2(pandaCost)
function pandaCost(singaraQuantity, samusaQuantity, jilapiQuantity){
    if (singaraQuantity >= 1 && samusaQuantity >= 1 && jilapiQuantity >= 1) {
        const perSingaraPrice = 7;
        const perSamusaPrice= 10;
        const perJilapiPrice = 15;
     let totalBill = singaraQuantity * perSingaraPrice + samusaQuantity * perSamusaPrice + jilapiQuantity * perJilapiPrice;
    return totalBill;
    }
    else {
      return `Please Type a Positive Number! Thank You.`;
    }
};

console.log(pandaCost(3,3,3));

// Problem-3(picnicBudget)

function picnicBudget(participator){

    var billPerPerson1 = 5000;
    var billPerPerson2 = 4000;
    let billPerPerson3 = 3000;
    if (participator >=1) {
        // Bill for first 100 Persons
        if (participator <= 100) {
            let totalBill = participator * billPerPerson1;
            return totalBill;
        }
        //Bill for Second 100 Persons
        else if(participator <= 200){
            let firstBill = billPerPerson1 * 100;
            let secondBill = (participator - 100)* billPerPerson2;
            let totalBill = firstBill + secondBill;
            return totalBill;
    
        }
        //Bill For rest Persons
        else{
            let firstBill = billPerPerson1 * 100;
            let secondBill = billPerPerson2 * 100; 
            let thirdBill = (participator - 200)*billPerPerson3;
            let totalBill = firstBill+ secondBill + thirdBill ;
            return totalBill;
    
        }  
    }
     else {
        return `Please Enter a Positive Number`;
    }
   

};
console.log(picnicBudget(201));

// Problem-4(oddFriend)

function oddFriend(friendName){

    
    for (let i = 0; i<friendName.length; i++){
        var friend = friendName[i];
        if (typeof(friend) != "number") {
            if (friend.length % 2 != 0) {
                 return friend;
                
            }  
        }
        else{
            return`Please type a Name `;
        }
       
    }       
};
let name = ['Shoriful',"Hazrat",'Shihab', 'Kalam', 'Jafor', 'Jakaria'];
console.log(oddFriend(name));

