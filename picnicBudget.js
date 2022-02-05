function picnicBudget(participator){

    var billPerPerson1 = 5000;
    var billPerPerson2 = 4000;
    let billPerPerson3 = 3000;
    if (participator >=1) {
        if (participator <= 100) {
            let totalBill = participator * billPerPerson1;
            return totalBill;
        }
        else if(participator <=200){
            let bill1 = billPerPerson1 * 100;
            let bill2 = (participator-100)* billPerPerson2;
            let totalBill = bill1 + bill2;
            return totalBill;
    
        }
        else{
            let bill1 = billPerPerson1 * 100;
            let bill2 = billPerPerson2 * 100; 
            let bill3 = (participator-200)*billPerPerson3;
            let totalBill = bill1+ bill2 + bill3 ;
            return totalBill;
    
        }  
    }
     else {
        return `Please Enter a Positive Number`
    }
   

}
console.log(picnicBudget(100));