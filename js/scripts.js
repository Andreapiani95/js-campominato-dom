const bombArray = [];

document.getElementById('grid-generator').addEventListener('click',
    function (){
        const bombArray = [];
        document.querySelector('.grid').innerHTML = "";
        document.getElementById('output').innerHTML = "";
        createGrid(100);
        while (bombArray.length < 16){
            const bombNumber = randomNumber (1, 100);
            
        
            if (!bombArray.includes(bombNumber)){
                bombArray.push(bombNumber);
            }console.log(bombArray, bombArray[i]);
        }
    }
);

const selectedCell = []


function createGrid(cellNumber){
    for (i = 1; i <= cellNumber; i++){
        
        const gridCell = document.createElement('div');
        gridCell.append(i);
        gridCell.classList.add('flex-cell');
        document.querySelector('.grid').append(gridCell);

        gridCell.addEventListener('click', function(){
            if (bombArray.includes(parseInt(this.innerHTML))){
                this.classList.add('bomb');
                gridCell.removeEventListener;
                document.getElementById('output').innerHTML = `Peccato hai perso. Punteggio = ${selectedCell.length}`;
            }
            else {
                this.classList.add('selected');
                selectedCell.push(parseInt(this.innerHTML));
                if (selectedCell.length > 83){
                    gridCell.removeEventListener;
                    document.getElementById('output').innerHTML = `Evviva, hai vinto! Punteggio = ${selectedCell.length}`;
                }
            };
        });
    };
}






//Functions

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

    