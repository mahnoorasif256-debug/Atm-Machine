// ////////////////  counter  start ////////////////////


function insert() {
   
    const img = document.querySelector(".movingCard");
    img.classList.add("swipe-card");

   
    let oldButton = document.querySelector("#btn-insert-card");

  
    let newButton = document.createElement("button");
    newButton.innerHTML = "Enter Pin";
    newButton.id = 'enter-pin';
  
    newButton.className = "btn w-25 text-light border border-0 p-2 fs-5 rounded-4  mx-auto";
    newButton.style.backgroundColor = "#00BFFF";
    newButton.style.marginTop = "-70px"; 
    newButton.style.position = "relative"; 
    newButton.style.zIndex = "9999";       


    newButton.onclick = function() {
        window.location.href = "pin.html";
    };

   
    oldButton.replaceWith(newButton);
}


// ////////////////  counter   end ////////////////////



// ////////////////  pin  start ////////////////////


let enterpin = "";
let correctpin = '1234';

let pinboxes = document.querySelectorAll(".ke");

document.querySelector(".btns-area").onclick = function (e) {
    let value = e.target.innerText;

    if (!e.target.classList.contains('ke') || value === "." || value === "") {
        return;
    }

    if (value === "X") {
        enterpin = "";
        for (let i = 0; i < 4; i++) {
            pinboxes[i].innerText = "";
        }
        return;
    }

    if (enterpin.length < 4) {
        enterpin += value;
        pinboxes[enterpin.length - 1].innerText = "*";
    }

    if (enterpin.length === 4) {
        if (enterpin === correctpin) {
             window.location.href = "cards.html";
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid pin! Please try again",
                confirmButtonColor: "#6366f1",
                width: '390px',
            }).then(() => {
                enterpin = ""; 
                for (let i = 0; i < 4; i++) {
                    pinboxes[i].innerText = "";
                }
            });       
        }
    }
}

// ////////////////  pin end ////////////////////



// ////////////////  withdraw  start ////////////////////


function withdraw(){
    window.location.href = "withdraw.html";
}

function draw(){

let inputw = document.querySelector(".withinput").value;

if (inputw === "" || isNaN(inputw)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Account Number",
            text: "Please enter a valid account number (Numbers only, no alphabets)!",
            confirmButtonColor: "#6366f1",
        });
        return; 
    }


    if(inputw > 500000 ){
Swal.fire({
  icon: "error",
  title: "Transaction Failed",
  text: "Insufficient balance in your account. Please check your funds and try again.",
      confirmButtonColor: "#6366f1",

});
    }else{

let successSound = new Audio("images/sucess2.mp3"); 
successSound.volume = 1.0;
        successSound.play();

         confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        ticks: 200, 
        gravity: 1.2, 
        colors: ['#7c3aed', '#87f363'] 
    });
   Swal.fire({
    title: "Cash Withdraw!",
    icon: "success",
    confirmButtonColor: "#6366f1",
    width: '350px',
  }).then(() => {
           
            window.location.href = "index.html"; 
        });

    }
}



// ////////////////  withdraw end ////////////////////




// ////////////////  transfer  start ////////////////////

function transfer(){
    window.location.href = "transfer.html";
}


function tran(){

    let inputt = document.querySelector(".transinput").value;

    let acc = document.querySelector(".accnum").value;


if(acc === "" || isNaN(acc) || acc.length > 5 ){

Swal.fire({
  icon: "error",
  title: "Please enter a valid account number!",
      confirmButtonColor: "#6366f1",

});


} else if(inputt > 500000 ){
Swal.fire({
  icon: "error",
  title: "Transaction Failed",
  text: "Insufficient balance in your account. Please check your funds and try again.",
      confirmButtonColor: "#6366f1",

});
    }else{

let successSound = new Audio("images/sucess1.mp3"); 
successSound.volume = 1.0;
        successSound.play();


         confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        ticks: 200, 
        gravity: 1.2, 
        colors: ['#7c3aed', '#87f363'] 
    });
  
  Swal.fire({
    title: "Transfer Complete!",
    icon: "success",
    confirmButtonColor: "#6366f1",
      text: `Rs. ${inputt} has been successfully transferred to Account No: ${acc}`,
   
  }).then(() => {
           
            window.location.href = "index.html"; 
        });

    }

}

// ////////////////  transfer end ////////////////////




// ////////////////  deposit start ////////////////////

function deposit(){
    window.location.href = "deposit.html";
}

function depo(){

let inputd = document.querySelector(".depoinput").value;


if (inputd === "" || isNaN(inputd)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Account Number",
            text: "Please enter a valid account number (Numbers only, no alphabets)!",
            confirmButtonColor: "#6366f1",
        });
        return; 
    }


    if(inputd > 500000 ){
Swal.fire({
  icon: "error",
  title: "Transaction Failed",
  text: "Insufficient balance in your account. Please check your funds and try again.",
      confirmButtonColor: "#6366f1",

});
    }else{

let successSound = new Audio("images/sucess2.mp3"); 
successSound.volume = 1.0;
        successSound.play();


         confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        ticks: 200, 
        gravity: 1.2, 
        colors: ['#7c3aed', '#87f363'] 
    });
 
 Swal.fire({
    title: "Deposit Confirmed!",
    icon: "success",
    confirmButtonColor: "#6366f1",
      text: "Your cash has been accepted. Your new balance has been updated.",
   
  }).then(() => {
           
            window.location.href = "index.html"; 
        });

    }
}


// ////////////////  deposit end ////////////////////


// ////////////////  check balance  start ////////////////////


function balance(){
     Swal.fire({
    title: "Available Balance:",
    html: '<span style="color: #2ecc71; font-size: 22px;">Rs. 500,000</span>',
    confirmButtonColor: "#6366f1",
   imageUrl: './images/money.png',
  imageWidth: 160, 
  imageHeight: 170,
  imageAlt: 'Balance Icon',
  });
}


// ////////////////  check balance  end ////////////////////



