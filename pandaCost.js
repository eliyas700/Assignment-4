function pandaCost (singaraQuantity, samusaQuantity, jilapiQuantity){
    if (singaraQuantity >=1 && samusaQuantity >=1 && jilapiQuantity >=1) {
        const perSingaraPrice = 7;
        const perSamusaPrice= 10;
        const perJilapiPrice = 15;
     let totalBill = singaraQuantity * perSingaraPrice + samusaQuantity *perSamusaPrice + jilapiQuantity * perJilapiPrice;
    return totalBill;
    }
    else {
      return `Please Type a Positive Number! Thank You.`;
    }
};

console.log(pandaCost(3,0,1));