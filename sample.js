<script type="text/javascript">
function checkForm(form)
        {         
           if(email.value.trim()==""||pwd.value.trim()==""||mobile.value.trim()==""){
            alert("feilds cann't be blank");
            form.email.focus();
            return  false;
         }
    let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}?\w+)*(.[a-z]{2,3}?)$/;
         if(regexp.test(email.value)){
      
         error.innerHTML="invalid";
         error.style.color="red";
         email.style.border='2px solid red';
         form.email.focus();
         return false;
       }
        if(form.pwd.value!=""){
          if(form.pwd.value.length<8){
              alert("Error: Password must contain at least six characters!");
              form.pwd.focus();
              return false;
          } 
        if(form.pwd.value == form.email.value) {
          alert("Error: Password must be different from Emailid!");
          form.pwd.focus();
          return false;
        }
        re = /[0-9]/;
        if(!re.test(form.pwd.value)) {
          alert("Error: password must contain at least one number (0-9)!");
          form.pwd.focus();
          return false;
        }
        re = /[a-z]/;
        if(!re.test(form.pwd.value)) {
          alert("Error: password must contain at least one lowercase letter (a-z)!");
          form.pwd.focus();
          return false;
        }
        re = /[A-Z]/;
        if(!re.test(form.pwd.value)) {
          alert("Error: password must contain at least one uppercase letter (A-Z)!");
          form.pwd.focus();
          return false;
        }
      } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.pwd.focus();
        return false;
      }
  
      alert("You entered a valid password: " + form.pwd.value);
      return true;
    }
    
  </script>