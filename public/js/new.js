let email= document.getElementById("exampleInputEmail1");
let pwd =document.getElementById("exampleInputPassword1");
function validate1(){
 
    

    //A-Za-z0-9 can be replaced with \w
    
    if((email.value)!=""){
                error.innerHTML = "Valid";
                error.style.color = "green";
                if((pwd.value!="")){
                    error1.innerHTML = "Valid";
                    error1.style.color = "green";
                    
                    return true;
                    
                }
                else{
                    error1.innerHTML = "Enter Book Author";
                    error1.style.color= "red";
                    return false;
                }
            }
            else{
                error.innerHTML = "Enter Book Name";
                error.style.color= "red";
                return false;
            }
     }
     