document.getElementById('grid-generator').addEventListener('click',
    function (){
        document.querySelector('.grid').innerHTML = "";
        createGrid(100);
    }
);

function createGrid(cellNumber){
    for (i = 1; i <= cellNumber; i++){
        
        const gridCell = document.createElement('div');
        gridCell.append(i);
        gridCell.classList.add('flex-cell');
        document.querySelector('.grid').append(gridCell);
        gridCell.addEventListener('click', function(){
            this.classList.toggle('selected')
            console.log(this.innerHTML)
        });
    };
}

const bombArray = [];


while (bombArray.length < 16){
    const bombNumber = randomNumber (1, 100);
    console.log(bombNumber);

    if (!bombArray.includes(bombNumber)){
        bombArray.push(bombNumber);
    }

}





//Functions

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

    