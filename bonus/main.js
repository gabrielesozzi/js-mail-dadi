// Genero numero pc e utente

var numeroUtente = Math.floor((Math.random() * 6) + 1);

var numeroPc = Math.floor((Math.random() * 6) + 1);

console.log(numeroUtente, numeroPc);

// Stabilisco condizioni per vincitore

if (numeroUtente > numeroPc) {
  console.log("Il vincitore è l'utente");
} else if (numeroPc > numeroUtente) {
  console.log("Il vincitore è il pc");
} else {
  console.log("Parità. Nessun vincitore.");
}
