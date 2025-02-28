

const person = {
    account_num: Math.floor(Math.random() * 10000 + 1),
    Name: "",
    Email: "",
    Phone_Number: 0,
    Address: {
      House_num: "",
      Street_name: "",
      Pin_number: "",
      Country: "",
    },
    username: "",
    password: "",
    bank_bal: 0,
  };
  console.log(person);


//  dropdown
  function dd(){
    document.querySelector(".ddf").addEventListener("click",function(a){
      document.querySelector(".dropdown-content").classList.add("active");    
    })
  }
  function logout(){
    window.location.href = "landing.html";
  }
  

  
  // document
  //   .getElementsByClassName("View")[0]
  //   .addEventListener("click", function (a) {
  //     alert(`your current balance is ${person.bank_bal}`);
  //   });
  


  // deposit

  let depositedmoney = 0;
  document.querySelector(".deposit").addEventListener("click", function (b) {
    b.preventDefault(); 
    document.querySelector(".depositt").classList.remove("inactive");
    document.querySelector(".navbar").classList.add("inactive");
    document.querySelector(".herosection").classList.add("inactive");
    document.querySelector(".footer").classList.add("inactive");
  
  });
  document.querySelector("#depositmoney").addEventListener("click", function (z) {
    z.preventDefault(); 
     document.querySelector(".mpincenter").classList.remove("inactive");
     document.querySelector("#mpinsubmit").addEventListener("click",function(m){
      const enteredMPIN = document.querySelector("#mpin1").value;
      const storedMPIN = currentuser.Mpin;
     
      if (enteredMPIN === storedMPIN) {
       const depositInput = document.querySelector("#dAmount").value;
       const depositedmoney = parseFloat(depositInput);
    if (depositedmoney <= 0) {
      alert("Enter a valid amount");
      return;
    } 
    else {
      const currentuser = user[user.length-1];
      const currentbalance =parseFloat(currentuser.bank_bal);
      
     const totalbalance = currentbalance + depositedmoney;
    }
    console.log(person);

    document.querySelector(".navbar").classList.add("inactive");
    document.querySelector(".herosection").classList.add("inactive");
    document.querySelector(".footer").classList.add("inactive");
    document.querySelector(".depositt").classList.add("inactive");
    document.querySelector("#depositpopup").classList.remove("inactive");
    document.querySelector(
      ".words"
    ).innerHTML = ` The amount $${depositedmoney} have been deposited.`;
   }
   else {
      alert("Incorrect MPIN.");
  }
     })

   console.log(person);
  });

  // withdraw
  // let withdrawmoney = 0;
  document.querySelector(".withdraw").addEventListener("click", function (b) {
    b.preventDefault(); 
    document.querySelector(".withdraww").classList.remove("inactive");
    document.querySelector(".navbar").classList.add("inactive");
    document.querySelector(".herosection").classList.add("inactive");
    document.querySelector(".footer").classList.add("inactive");
  
  });
  document.querySelector("#withdrawmoney").addEventListener("click", function (z) {
    z.preventDefault(); 
     document.querySelector(".mpincenterwd").classList.remove("inactive");})

  // document
  //   .querySelector(".withdraw")
  //   .addEventListener("click", function (c) {
  //     let money2 = window.Number(prompt("enter the amount you want to withdraw"));
  //     if(person.bank_bal<money2){
  //         alert("you dont have enough money");
  //     }
  //     else{person.bank_bal = person.bank_bal-money2;}
  //   });
  
  //   document.querySelector(.Account).addEventListener("click",functio (d){
  //     alert("")
  //   })
  
console.log(storedMPIN);