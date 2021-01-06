let email= document.getElementById("exampleInputEmail1");
let pwd =document.getElementById("exampleInputPassword1");

let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let num = document.getElementById("mobnumber");


function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{15,}).*$", "g");
    var mediumRegex = new RegExp("^(?=.{9,14}).*$", "g");
    var enoughRegex = new RegExp("(?=.{0,8}).*", "g");
    
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Poor!</span>';
    }
}








function validate(){
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    let regexp1= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
    let regexp2= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    //A-Za-z0-9 can be replaced with \w
    if(regexp2.test(num.value)){
         error3.innerHTML = "Valid";
         error3.style.color = "green";     
            if(regexp.test(email.value)){
                error.innerHTML = "Valid";
                error.style.color = "green";
                if(regexp1.test(pwd.value)){

                    error1.innerHTML = "Valid";
                    error1.style.color = "green";

                    
                    return true;
                    
                }
                else{
                    error1.innerHTML = "Invalid password";
                    error1.style.color= "red";
                    return false;
                }
            }
            else{
                error.innerHTML = "Invalid Email";
                error.style.color= "red";
                return false;
            }
     }
     else{
        error3.innerHTML = "Invalid Number";
        error3.style.color= "red";
        return false;
    }

}



function validate1(){
    let regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    let regexp1= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
    

    //A-Za-z0-9 can be replaced with \w
    
    if(regexp.test(email.value)){
                error.innerHTML = "Valid";
                error.style.color = "green";
                if(regexp1.test(pwd.value)){
                    error1.innerHTML = "Valid";
                    error1.style.color = "green";
                    
                    return true;
                    
                }
                else{
                    error1.innerHTML = "Invalid password";
                    error1.style.color= "red";
                    return false;
                }
            }
            else{
                error.innerHTML = "Invalid Email";
                error.style.color= "red";
                return false;
            }
     }
     

    