
// document.addEventListener("DOMContentLoaded", function() {
 
//  const user = JSON.parse(localStorage.getItem("user"));
//  const currentuser = user[user.length-1];

  
//   const person = {
//       account_num: Math.floor(Math.random() * 1000000000000 + 1),
//       Name: "",
//       Email: "",
//       Phone_Number: "",
//       Address: {
//           House_num: "",
//           Street_name: "",
//           Pin_number: "",
//           Country: "",
//       },
//       username: "",
//       password: "",
//       bank_bal: 0,
//       validity: "",
//   };
//   console.log(person);

//   // hi
//   if (user && user.length > 0) {
//     document.getElementById("hi").innerHTML = `Hi, ${currentuser.Name}`;
// }

//   // Log out 
//   document.querySelector("#mmlogout").addEventListener("click", function() {
//       document.querySelector(".popuplogout").classList.remove("inactive");
//       document.querySelector(".herosection").classList.add("inactive");
//   });
//   document.querySelector("#logouttolanding").addEventListener("click", function() {
//       window.location.href = "landing.html"; 
//   });

//   // Dashboard 
//   document.querySelector("#mmdashboard").addEventListener("click", function(z) {
//       z.preventDefault(); 
//       document.querySelector(".popuplogout").classList.add("inactive");
//       document.querySelector(".herosection").classList.remove("inactive");
//   });

//   // Bank balance 
//   let currenttotalbalance = currentuser.bank_bal;
//   document.getElementById("ctb").innerHTML = `${currenttotalbalance}`;
//   console.log(currenttotalbalance);

//   // Deposit 
//   let depositedmoney = 0;
//   document.querySelector(".deposit").addEventListener("click", function(b) {
//       b.preventDefault(); 
//       document.querySelector(".depositt").classList.remove("inactive");
//       document.querySelector(".containerwhole").classList.add("inactive");
//       console.log(currenttotalbalance);
//   });

//   document.querySelector("#depositmoney").addEventListener("click", function(z) {
//       z.preventDefault(); 
//       document.querySelector(".mpincenter").classList.remove("inactive");
//       document.querySelector("#mpinsubmit").addEventListener("click", function(m) {
//           m.preventDefault();
//           const enteredMPIN = document.querySelector("#mpin1").value;
//           const storedMPIN = currentuser.Mpin;

//           if (enteredMPIN === storedMPIN) {
//               const depositInput = document.querySelector("#dAmount").value;
//               const depositedmoney = parseInt(depositInput);
//               if (depositedmoney <= 0) {
//                   alert("Enter a valid amount");
//                   return;
//               } else {
//                   currenttotalbalance += depositedmoney;
//                   currentuser.bank_bal = currenttotalbalance;
//                   localStorage.setItem("user", JSON.stringify(user));
//               }
//               document.querySelector(".depositt").classList.add("inactive");
//               document.querySelector(".containerwhole").classList.add("inactive");
//               document.querySelector("#depositpopup").classList.remove("inactive");

//               document.querySelector(".words").innerHTML = `The amount $${depositedmoney} has been deposited.`;
//           } else {
//               alert("Incorrect MPIN.");
//           }
//       });
//   });

//   // withdraw
//   let withdrawedmoney = 0;
//   document.querySelector(".withdraw").addEventListener("click", function(b) {
//       b.preventDefault(); 
      
//       document.querySelector(".withdraww").classList.remove("inactive");
//       document.querySelector(".containerwhole").classList.add("inactive");
      
//   });

//   document.querySelector("#withdrawmoney").addEventListener("click", function(z) {
//       z.preventDefault(); 
//       document.querySelector(".mpincenterr").classList.remove("inactive");
//       document.querySelector("#mpinsubmitt").addEventListener("click", function(m) {
//           m.preventDefault();
//           console.log("hehe");
//           const enteredMPIN = document.querySelector("#mpin2").value;
//           const storedMPIN = currentuser.Mpin;

//           if (enteredMPIN === storedMPIN) {
//               const withdrawInput = document.querySelector("#wAmount").value;
//               const withdrawedmoney = parseInt(withdrawInput);
//               if (withdrawedmoney <= 0) {
//                   alert("Enter a valid amount");
//                   return;
//               } else {
//                   currenttotalbalance -= withdrawedmoney;
//                   currentuser.bank_bal = currenttotalbalance;
//                   localStorage.setItem("user", JSON.stringify(user));
//               }
//               document.querySelector(".withdraww").classList.add("inactive");
//               document.querySelector(".containerwhole").classList.add("inactive");
//               document.querySelector("#withdrawpopup").classList.remove("inactive");

//               document.querySelector(".wordss").innerHTML = `The amount $${withdrawedmoney} has been withdrawed.`;
//           } else {
//               alert("Incorrect MPIN.");
//           }
//       });
//   });
// // withdraw finished

// });


document.addEventListener("DOMContentLoaded", function() {
 
    const user = JSON.parse(localStorage.getItem("user"));
    const currentuser = user[user.length-1];
   
     
    //  const person = {
         
    //  };
     
    user.forEach(person => {
        person.account_num= Math.floor(Math.random() * 10000000000 + 1),
        person.bank_bal= 5,
        person.validity="",
     });
    
     localStorage.setItem("user",JSON.stringify(user));

     console.log(user);
  
   
     // hi
     if (user && user.length > 0) {
         document.getElementById("hi").innerHTML = `Hi, ${currentuser.Name}`;
     }
   
     // Log out 
     document.querySelector("#mmlogout").addEventListener("click", function() {
         document.querySelector(".popuplogout").classList.remove("inactive");
         document.querySelector(".herosection").classList.add("inactive");
     });
     document.querySelector("#logouttolanding").addEventListener("click", function() {
         window.location.href = "landing.html"; 
     });
   
     // Dashboard 
     document.querySelector("#mmdashboard").addEventListener("click", function(z) {
         z.preventDefault(); 
         document.querySelector(".popuplogout").classList.add("inactive");
         document.querySelector(".herosection").classList.remove("inactive");
     });
   
     // Bank balance 
     let currenttotalbalance = currentuser.bank_bal ;
     document.getElementById("ctb").innerHTML = `${currenttotalbalance}`;
     console.log(currenttotalbalance);
   
     // Deposit 
     let depositedmoney = 0;
     document.querySelector(".deposit").addEventListener("click", function(b) {
         b.preventDefault(); 
         document.querySelector(".depositt").classList.remove("inactive");
         document.querySelector(".containerwhole").classList.add("inactive");
         console.log(currenttotalbalance);
     });
   
     document.querySelector("#depositmoney").addEventListener("click", function(z) {
         z.preventDefault(); 
         document.querySelector(".mpincenter").classList.remove("inactive");
         document.querySelector("#mpinsubmit").addEventListener("click", function(m) {
             m.preventDefault();
             const enteredMPIN = document.querySelector("#mpin1").value;
             const storedMPIN = currentuser.Mpin;
   
             if (enteredMPIN === storedMPIN) {
                 const depositInput = document.querySelector("#dAmount").value;
                 const depositedmoney = parseInt(depositInput);
                 if (depositedmoney <= 0) {
                     alert("Enter a valid amount");
                     return;
                 } else {
                     currenttotalbalance += depositedmoney;
                     currentuser.bank_bal = currenttotalbalance;
                     localStorage.setItem("user", JSON.stringify(user));
                 }
                 document.querySelector(".depositt").classList.add("inactive");
                 document.querySelector(".containerwhole").classList.add("inactive");
                 document.querySelector("#depositpopup").classList.remove("inactive");
   
                 document.querySelector(".words").innerHTML = `The amount $${depositedmoney} has been deposited.`;
             } else {
                 alert("Incorrect MPIN.");
             }
         });
     });
   
     // withdraw
     let withdrawedmoney = 0;
     document.querySelector(".withdraw").addEventListener("click", function(b) {
         b.preventDefault(); 
         
         document.querySelector(".withdraww").classList.remove("inactive");
         document.querySelector(".containerwhole").classList.add("inactive");
         
     });
   
     document.querySelector("#withdrawmoney").addEventListener("click", function(z) {
         z.preventDefault(); 
         document.querySelector(".mpincenterr").classList.remove("inactive");
         document.querySelector("#mpinsubmitt").addEventListener("click", function(m) {
             m.preventDefault();
             console.log("hehe");
             const enteredMPIN = document.querySelector("#mpin2").value;
             const storedMPIN = currentuser.Mpin;
   
             if (enteredMPIN === storedMPIN) {
                 const withdrawInput = document.querySelector("#wAmount").value;
                 const withdrawedmoney = parseInt(withdrawInput);
                 if (withdrawedmoney <= 0) {
                     alert("Enter a valid amount");
                     return;
                 } else {
                     currenttotalbalance -= withdrawedmoney;
                     currentuser.bank_bal = currenttotalbalance;
                     localStorage.setItem("user", JSON.stringify(user));
                 }
                 document.querySelector(".withdraww").classList.add("inactive");
                 document.querySelector(".containerwhole").classList.add("inactive");
                 document.querySelector("#withdrawpopup").classList.remove("inactive");
   
                 document.querySelector(".wordss").innerHTML = `The amount $${withdrawedmoney} has been withdrawed.`;
             } else {
                 alert("Incorrect MPIN.");
             }
         });
     });
   
   
   });
   
//    withdraw finished

// document.addEventListener("DOMContentLoaded", function (){
//     document.querySelector(".form").addEventListener("submit",function(a){
//         a.preventDefault();
    
    
//         const person = {
//             Name: document.querySelector("#name").value,
//             PhoneNumber: document.querySelector("#number").value,
//             Dob: document.querySelector("#date").value,
//             Address: document.querySelector("#address").value,
//             Email: document.querySelector("#email").value,
//              };
    
             
//     let user = JSON.parse(localStorage.getItem("user")) || [];
//     user.push(person);
//     localStorage.setItem("user",JSON.stringify(user));
    
    
//     document.querySelector(".si").classList.add("inactive");
//     document.querySelector(".mpincontent").classList.remove("inactive"); 

//     document.querySelector(".form1").addEventListener("submit",function(z){
//         z.preventDefault();
//         if (document.querySelector("#mpin1").value !== document.querySelector("#mpin2").value)
//              {
//             alert("MPINs do not match. Please try again.");
//             return; 
//         }
//         else{
//             const user = JSON.parse(localStorage.getItem("user"));
//             if(!user){
//                 alert("User data not found. Please sign up again.");
//                 return;
//             }
//             const check = user.some(obj => obj.Mpin === document.querySelector("#mpin1").value);
//             if(check){
//                 alert("This MPIN is already in use. Please choose a different MPIN.");
//                 return;
//             }
//             user[user.length-1].Mpin = document.querySelector("#mpin1").value;
            
//             localStorage.setItem("user",JSON.stringify(user));
//             console.log(user);
//             alert("MPIN set successfully!");   
//             window.location.href = "final.html"; 
             
//         }
//     });
    
//     });
     
// })






