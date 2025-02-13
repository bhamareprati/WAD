$(document).ready(function (){
    // const form = $("#reg_form");
    $("#submit").click(function(){
        const user={
        name :$("#name").val(),
        mobno :$("#mobno").val(),
        mail :$("#mail").val()
    };
    let users=JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));

    alert("User Registerd Successfully");
    form.reset();


    });
});