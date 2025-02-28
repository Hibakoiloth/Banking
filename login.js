document.addEventListener('DOMContentLoaded', function() {
    
document.querySelector("#loginForm").addEventListener("submit",function(x){
    x.preventDefault();
       const enteredMPIN = document.getElementById("mpin").value;
       const storedMPIN = JSON.parse(localStorage.getItem("user"));
       const founduser = storedMPIN.find(user=>user.Mpin===enteredMPIN)
        if (founduser)
         {
            alert("Logged in")
        window.location.href = "final.html"; 
     }
     else {
        alert("Incorrect MPIN.");
    }
    });
});


