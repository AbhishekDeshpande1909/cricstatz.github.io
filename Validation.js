function ValidateEmail(inputText)  
{  
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
   if(inputText.value.match(mailformat))  
   {  
       document.forms.emailform();  
       return true;  
   }  
   else  
   {  
       alert("You have entered an invalid email address!");  
       document.forms.emailform();  
       return false;  
   }  
} 