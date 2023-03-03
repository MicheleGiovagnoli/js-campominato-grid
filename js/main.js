//Consegna
//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const domBtn = document.getElementById('btn');
domBtn.addEventListener('click',
    function(){
        const domGriglia = document.getElementById('griglia');

        for( let i = 0; i < 100; i++) {

            const box = newBox(i+1);
            domGriglia.append(box);

            box.addEventListener('click',
               function(){
                this.classList.toggle('click');
                console.log(box.innerHTML);
               }
            
            );
        }

    }
);


function newBox(numero){
    const box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = numero;
    return box;
}

