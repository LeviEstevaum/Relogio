function horasAtt(){
    let horasAtual = document.getElementById('horas');
    let minutoAtual = document.getElementById('minutos');
    let segundosAtual = document.getElementById('segundos')

    const date = new Date();

    let horaAtt = date.getHours();
    let minuAttt = date.getMinutes();
    let segundAtt = date.getSeconds();

    
    horasAtual.innerText = horaAtt < 10 ? '0' + horaAtt : horaAtt
    minutoAtual.innerText = minuAttt < 10 ? '0' + minuAttt : minuAttt
    segundosAtual.innerText = segundAtt < 10 ? '0' + segundAtt : segundAtt
}

setInterval(horasAtt, 1000)
horasAtt()