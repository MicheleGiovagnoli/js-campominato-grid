//Consegna
//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const domBtn = document.getElementById('btn');
domBtn.addEventListener('click',
    function(){
        
        const domGriglia = document.getElementById('griglia');
        let domDifficolta = document.getElementById('difficolta');
        console.log(domDifficolta.value);
         
        if(domDifficolta.value == 0) {
            for( let i = 0; i < 100; i++) {
                const box = newBox_0(i+1);
                domGriglia.append(box);
                box.addEventListener('click',
                    function(){
                        this.classList.toggle('click');
                        console.log(box.innerHTML);
                    }
                );
            }
        }
        else if (domDifficolta.value == 1) {
            for( let i = 0; i < 81; i++) {
                const box = newBox_1(i+1);
                domGriglia.append(box);
                box.addEventListener('click',
                    function(){
                        this.classList.toggle('click');
                        console.log(box.innerHTML);
                    }
                );
            }
        }
        else if (domDifficolta.value == 2) {
            for( let i = 0; i < 49; i++) {
                const box = newBox_2(i+1);
                domGriglia.append(box);

                box.addEventListener('click',
                    function(){
                        this.classList.toggle('click');
                        console.log(box.innerHTML);
                    }
                );
            }
        }
    }
);


function newBox_0(numero){
    const box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = numero;
    return box;
}
function newBox_1(numero){
    const box = document.createElement('div');
    box.classList.add('box-1');
    box.innerHTML = numero;
    return box;
}
function newBox_2(numero){
    const box = document.createElement('div');
    box.classList.add('box-2');
    box.innerHTML = numero;
    return box;
}

