function oddFriend(friendName){
    for (let i=0; i<friendName.length ; i++){
        var friend = friendName[i];

        if (friend.length % 2 !=0) {
             return friend;
            
        }
       
    }
    
    
    
}
let name = ['Shoriful','Hazrat','Shihab', 'Kalam', 'Jafor', 'Jakaria'];
console.log(oddFriend(name));