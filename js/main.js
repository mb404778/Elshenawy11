function vaildate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirmPass = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    result.setAttribute("class","main");

    if(user=="" && email=="" && pass=="" && confirmPass==""){
        result.innerHTML = "Entr Data In Form";
        return false;
    }else if (user.length<5 || user.length>15){
        result.innerHTML = "Enter 5-15 character in username";
        return false;       
    }else if (email.indexOf("@",3)==-1 || email.indexOf(".")==-1){
        result.innerHTML = "Enter Valid Email";
        return false;
    }else if (pass.length <8){
        result.innerHTML = "Enter at least 8 char in Form";
        return false;
    }else if (pass != confirmPass){
        result.innerHTML = "Matched Password";
        return false;
    }else{
        return true;
    }

}

