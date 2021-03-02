// Creo Array

var email = [ "pippo@gmail.com", "pluto@libero.it", "pippo@libero.it", "pluto@gmail.com", "gabriele@gmail.com" ]

console.log(email);

// Chiedo la mail all'utente

var mail = prompt ("Inserisci un indirizzo mail");

console.log(mail);

// Inserisco sentinella

var breakLoop = false;

// Creo FOR Array

for (var i = 0; i < email.length; i++) {
  if (email[i] == mail) {
    breakLoop = true;
  }
}

// Inserisco condizioni per msg

if (breakLoop) {
  console.log("Email accepted");
  document.getElementById('message').innerHTML = "Email accepted";
} else {
  console.log("Email not found");
  document.getElementById('message').innerHTML = "Email not found";
}
