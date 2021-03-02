// Creo Array

var email = [ email1, email2, email3 ]

console.log(email);

// Chiedo la mail all'utente

var mail = ("Inserisci un indirizzo mail");

// Inserisco sentinella

var sentinella = false;

// Creo FOR Array

for (var i = 0; i < email.length; i++) {
  if (email[i] == mail) {
    sentinella = true;
  }
}

// Inserisco condizioni per msg

if (sentinella) {
  console.log("Email accepted");
} else {
  console.log("Email not found");
}
