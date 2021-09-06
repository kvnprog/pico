

window.addEventListener('scroll', function()  {
    console.log(window.scrollY);
    if(window.scrollY>300){
        var eslogan=document.getElementById("eslogan");
        eslogan.classList.add('animacion');

        var eslogan1=document.getElementById("eslogan2");
        eslogan1.classList.add('animacion2');

        var eslogan2=document.getElementById("eslogan3");
        eslogan2.classList.add('animacion3');

        var eslogan3=document.getElementById("eslogan4");
        eslogan3.classList.add('animacion4');

        var eslogan4=document.getElementById("eslogan5");
        eslogan4.classList.add('animacion5');
    }
});