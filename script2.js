let horas = 0;

let minutos = 0;

let segundos = 0;

let interval;

function cronos() {
    segundos++;
    if (segundos == 60) {
        minutos++;
        segundos = 0;
    }
    if (minutos == 60) {
        minutos = 0;
        horas++;
    }
    document.querySelector('.crono').innerText = `${horas < 10 ? '0' + horas : horas} : ${minutos < 10 ? '0' + minutos : minutos} : ${segundos < 10 ? '0' + segundos : segundos} `
}

function Comecar() {
    interval = setInterval(cronos, 1000);
}

function Parar() {
    clearInterval(interval);
}

function Zerar() {
    clearInterval(interval);
    horas = 0;
    minutos = 0;
    segundos = 0;
    
    document.querySelector('.crono').innerText = '00:00:00'
}
