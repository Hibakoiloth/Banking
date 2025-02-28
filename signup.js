document.addEventListener("DOMContentLoaded", function (){
    document.querySelector(".form").addEventListener("submit",function(a){
        a.preventDefault();
    
    
        const person = {
            Name: document.querySelector("#name").value,
            PhoneNumber: document.querySelector("#number").value,
            Dob: document.querySelector("#date").value,
            Address: document.querySelector("#address").value,
            Email: document.querySelector("#email").value,
             };
    
             
    let user = JSON.parse(localStorage.getItem("user")) || [];
    user.push(person);
    localStorage.setItem("user",JSON.stringify(user));
    // console.log(person);
    
    document.querySelector(".si").classList.add("inactive");
    document.querySelector(".mpincontent").classList.remove("inactive"); 

    document.querySelector(".form1").addEventListener("submit",function(z){
        z.preventDefault();
        if (document.querySelector("#mpin1").value !== document.querySelector("#mpin2").value)
             {
            alert("MPINs do not match. Please try again.");
            return; 
        }
        else{
            const user = JSON.parse(localStorage.getItem("user"));
            if(!user){
                alert("User data not found. Please sign up again.");
                return;
            }
            const check = user.some(obj => obj.Mpin === document.querySelector("#mpin1").value);
            if(check){
                alert("This MPIN is already in use. Please choose a different MPIN.");
                return;
            }
            user[user.length-1].Mpin = document.querySelector("#mpin1").value;
            
            localStorage.setItem("user",JSON.stringify(user));
            console.log(user);
            alert("MPIN set successfully!");   
            window.location.href = "final.html"; 
             
        }
    });
    
    });
     
})



   