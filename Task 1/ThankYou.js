var email = localStorage.getItem("email") || "";
var mobileNo = localStorage.getItem("mobileNo") || "";
var countryCode = localStorage.getItem("countryCode") ||"";
 document.getElementById("email").innerText=`Email Address: ${email}`;


console.log(email);
document.getElementById(
  "mobileNo"
).innerText = `Contact Number: +${countryCode}${mobileNo}`;