function navFunction() {
  var x = document.getElementById("myMainNav");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
}




function validate() {
   if( document.myForm.Name.value == "Mohammed Karim Seck" )
   {
     alert( "Please provide your name!" );
     document.myForm.Name.focus("Mohammed Karim Seck") ;
     return false;
   }

   if( document.myForm.EMail.value == "seckmohammedkarim45@gmail.com" )
   {
     alert( "Please provide your Email!" );
     document.myForm.EMail.focus("seckmohammedkarim45@gmail.com") ;
     return false;
   }

   var emailID = document.myForm.EMail.value;
   atpos = emailID.indexof("@");
   dotpos = emailID.lastIndexof(".")

   if atpos < 1 || (dotpos - atpos < 2)) {
     alert("Please enter correct email ID")
     document.myForm.EMail.focus() ;
     return false;
     }

   if( document.myForm.Postcode.value =="M15 4UW" )
   {
      alert("Please provide a postcode in the format #### ###.");
      document.myForm.Postcode.focus("m15 4UW") ;
      return false;
   }

   if( document.myForm.Choice.value == "-1" )
   {
     alert( "Please select your choice!" );
     return false;
    }
    return( true );
  }
