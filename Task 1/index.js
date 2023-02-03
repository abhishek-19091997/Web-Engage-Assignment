function handleSubmit() {
  event.preventDefault();
  console.log("first");
  var email = document.getElementById("email").value;
  var mobileNo = document.getElementById("mobileNumber").value;
  var CountryCode = document.getElementById("countryCode").value;
 

  if (mobileNo.length == 0 && email.length == 0) {
    document.getElementById("error_message1").innerText = "Required field";
    document.getElementById("error_message2").innerText = "Required field";
      
    }
    if (mobileNo.length != 0 && email.length != 0) {
        document.getElementById("error_message1").innerText = "";
    document.getElementById("error_message2").innerText = ""
    }
     if (mobileNo.length == 0 && email.length != 0) {
        document.getElementById("error_message1").innerText = "";
         document.getElementById("error_message2").innerText = "Required field";
        
    }
    if (mobileNo.length != 0 && email.length == 0) {
      document.getElementById("error_message1").innerText = "Required field";
      document.getElementById("error_message2").innerText = "";
  }
  if (email.length != 0 && mobileNo.length != 0) {
       if (email.length <= 5 || !email.includes("@")) {
         alert("You have entered an invalid email address");
       } 
     else if (mobileNo.length < 10 || mobileNo.length > 10) {
       alert("You have entered an invalid Mobile number");
     } else {
       localStorage.setItem("email", email);
       localStorage.setItem("mobileNo", mobileNo);
       localStorage.setItem("CountryCode", CountryCode);
      window.location = "./ThankYou.html";
     }
  }
}
