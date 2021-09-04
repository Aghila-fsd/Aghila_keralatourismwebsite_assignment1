function formValidation()
{
var passid = document.registration.password;
var cty=document.registration.city;
var uadd1 = document.registration.addr1;
var uadd2 = document.registration.addr2;
var ustate = document.registration.state;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var uph=document.registration.mobile;

if(passid_validation(passid,8,12))
{
if(alphanumeric(uadd1))
{ 
if(alphanumeric(uadd2))
{ 
if(stateselect(ustate))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validph(uph))
{
}
} 
}
}
}
}
return false;

} 
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function alphanumeric(uadd1)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd1.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd1.focus();
return false;
}
}
function alphanumeric(uadd2)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd2.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd2.focus();
return false;
}
}
function stateselect(ustate)
{
if(ustate.value == "Default")
{
alert('Select your country from the list');
ustate.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
function validph(uph)
{
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
              if(uph.value.match(phoneno))
              {
               //alert("you enterd a valid phone number:"+form.mobile.value);
                return true;
              } 
            else  
            {   
            alert("You have entered an invalid phone number!");
            uph.focus();
            return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
}