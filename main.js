

const ime = document.querySelector(".fancy");
const strIme = ime.textContent;

// Podeli tekst
const splitText = strIme.split("");

// Brise h1
ime.textContent = "";

// Ide kroz h1 i svakom slovu dodeljuje span
for(let i=0; i < splitText.length; i++){
    ime.innerHTML += "<span>"+ splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 90);

function onTick(){
    const span = ime.querySelectorAll('span')[char];
    span.classList.add('fancyColors');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}
