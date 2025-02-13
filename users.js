$(document).ready(function(){
    let users=JSON.parse(localStorage.getItem("users"))||[];
    let userList= $("#userList");

    if (users.length === 0){
        userList.html("<li>No  User Registerd Yet</li>");
    }
    else{
        users.forEach(user => {
            userList.append(`<li>Name: ${user.name} ,Mobile NO : ${user.mobno}, Email : ${user.mail}</li>`)
            
        });
    }
});