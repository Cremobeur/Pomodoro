const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2');

let checkInterval = false;
let tempsInitial = 1500;
let tempsDeRepos = 300;
let pause = false;
let nbDeCycles = 0;
cycles.innerHTML = `Nombre de cycles ${nbDeCycles}`; /* Cela va intégrer 0 */

/* trunc permet d'enlever les zéros après la virgules d'un calcul */
affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
                                          (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
/* Si modulo de 60 est inférieur à 10 alors tu m'affiches 09,08,07,... sinon tu m'affiches le temps normalement. */


/* Même chose pour le temps de repos. */
affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
                                        (tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;


btnGo.addEventListener('click', () => {

    if (checkInterval === false) {
        checkInterval = true;

    tempsInitial--;
    affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
                                              (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

    let timer = setInterval(() => { /* setInterval() permet de répéter */
    
        if (pause === false && tempsInitial > 0) {
            tempsInitial--;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
                                                      (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

        }
        else if (pause === false && tempsDeRepos === 0 && tempsInitial === 0) { /* && signifie qu'il faut que les deux conditions doivent être réunis. */
            tempsInitial = 1500;
            tempsDeRepos = 300;
            nbDeCycles++;
            cycles.innerHTML = `Nombre de cycles ${nbDeCycles}`;

            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
                                                      (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                                            
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
                                                    (tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

        }
        else if (pause === false && tempsInitial === 0) {
            tempsDeRepos--;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
                                                    (tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        }

    }, 1000)


    /* Reset du timer */
    btnReset.addEventListener('click', () => {
        clearInterval(timer);
        checkInterval = false;
        tempsInitial = 1500;
        tempsDeRepos = 300;

        affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${
                                                  (tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
  
        affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${
                                                (tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
    })


    } else {
        return;
    }


})

btnPause.addEventListener('click', () => {

    if (pause === false) {
        btnPause.innerText = "Play";
    } else if (pause === true) {
        btnPause.innerText = "Pause";
    }
    pause = !pause; /* le ! permet dire l'inverse, dans le cas présent si pause est égale à false et inversement. */
})