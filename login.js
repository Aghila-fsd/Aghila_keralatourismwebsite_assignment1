let email=document.getElementById("email");
let error=document.getElementById("error");
let pwd=document.getElementById("password");
let mobile=document.getElementById("mobile");
//let regexp= /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
//form validation
function validate()
{
   if(email.value.trim()==""||pwd.value.trim()==""||mobile.value.trim()=="")
    {
        alert("feilds cann't be blank");
       return false;
    }
    else
    {
       return true;
         //alert("validation is proper");
     }
}

//end of form validation
//email validation start


    //let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z\-]{2,3}+)(.[a-z]{2,3}?)$/
    let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}?\w+)*(.[a-z]{2,3}?)$/;

    if(regexp.test(email.value))
    {
        error.innerHTML="valid";
        error.style.color="green";
        return true;
    }
    else if (regexp.test(email.value))
    {
        error.innerHTML="invalid";
        error.style.color="red";
        email.style.border='2px solid red';
        return false;
    }
    else if(email.value=="")
    {
        alert("email can not be blank");
        return false;
    }
    else
    {
        return true;
    }

}
//end of emailalidation
//start password validation
