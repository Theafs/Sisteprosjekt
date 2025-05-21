// Når brukeren trykker på en "Kjøp nå"-knapp, vis en alert (enkelt eksempel)
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Produkt lagt til i handlekurven!");
        });
    });
});
