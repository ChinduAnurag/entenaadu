


function login()
{
 
    var mail = document.getElementById("user_name").value;
    var pswd = document.getElementById("pass_word").value;
    var mail_format = /^[^\W_](?:[\w.]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/;
    var password_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   

    if(!mail_format.test(mail))
    {
      alert("invalid username");
       return false;
    }
    else if(!password_format.test(pswd))
     {
     alert("invalid password");
     alert("Enter password with minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");

    return false;
    }
    else{
      alert("Welcome!!")
    return true;
     }

};



function signup(){
var email = document.getElementById("email").value;
var pswd1 = document.getElementById("password1").value;
var pswd2 = document.getElementById("password2").value;
var phone = document.getElementById("phone").value;


    var res = /^[^\W_](?:[\w.]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    

    if(!res.test(email))
    {
        
       alert("Email Is Invalid");
        return false;
    }
    else if(!phoneno.test(phone))
    {
        alert("Please enter a valid phone number :");
        return false;
    }
    else if(!psr.test(pswd1))
    {
      
        alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        
        return false;
    }
    else  if(pswd1!=pswd2)
    {
        alert("Passwords dnt match");
        return false;
    }
    else
    {
      
        return true;
    }
    
};
function CheckPasswordStrength(password) {
   
    var password_strength = document.getElementById("password_strength");

   //Checking if password is null
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }


  
    var a= new Array();
    a.push("[A-Z]"); 
    a.push("[a-z]"); 
    a.push("[0-9]"); 
    a.push("[$@$!%*#?&]");

    var s = 0;

    
    for (var i = 0; i < a.length; i++) {
        if (new RegExp(a[i]).test(password)) {
            s++;
        }
    }
      
    if (password.length > 8) {
        s++;
    }

    
    var color = "";
    var strength = "";
    
    switch (s) {
        case 0:
        case 1:
            strength = "Your Password is Very Weak";
            color = "darkred";
            break;
        case 2:
            strength = "Your Password is Good";
            color = "orange";
            break;
        case 3:
        case 4:
            strength = "Your Password is Strong";
            color = "darkgreen";
            break;
        
    }
    document.getElementById("password_strength").innerHTML = strength;
    document.getElementById("password_strength").style.color = color;
};


