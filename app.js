function randomPosition(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSetso = document.getElementsByClassName("modo_setso")[0];

btnNo.addEventListener('mouseenter', function(e) {randomPosition(e.target)});

btnSi.addEventListener('click', function(e){
    alert('Sabia que dirias que si casemonos y tengamos hijos. TE AMO! ❤');

    divModoSetso.style.display = 'block';
    const cancion = new Audio('img\\modo_hot.mp3');
    cancion.play();
});