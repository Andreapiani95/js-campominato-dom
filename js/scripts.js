document.getElementById('grid-generator').addEventListener('click',
    function (){
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


    