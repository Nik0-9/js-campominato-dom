let btnStart = document.querySelector('.btn-outline-dark');

btnStart.addEventListener('click', function () {
    
    let difficulty = document.getElementById('difficulty').value;
    const mainEl = document.querySelector('main');
    const sectionEl = document.createElement('section');
    sectionEl.id ='grid';
    mainEl.innerHTML ='';
    mainEl.appendChild(sectionEl);
    const gridEl = document.getElementById('grid');
    gridEl.classList.add('d-flex', 'flex-wrap');
    play(difficulty, gridEl);
    let listBomb = [];
    numBomb = 16;
    for(i=0; i<numBomb; i++){
        listBomb = getRandomIntUnique(1, 100, numBomb);
    }
    
    //console.log(list);
});

function getCellsByDifficulty(difficulty){
    if(difficulty === 'easy'){
        return 100;
    }else if (difficulty === 'medium'){
        return 81;
    }else if(difficulty === 'hard'){
        return 49;
    }
}

function generateCell(content, difficulty) {

    let addCell = document.createElement('div');
    addCell.innerHTML = content;
    addCell.classList.add('cell');
    if(difficulty !== 'easy'){
        addCell.classList.add(`cell-${difficulty}`);
    }
    return addCell;
}

function play(difficulty, grid){
    const cells = getCellsByDifficulty(difficulty);
    for (i = 0; i < cells ; i++){
        const newCell = generateCell(i + 1, difficulty);
        grid.appendChild(newCell);
        newCell.addEventListener('click', function () {
            newCell.classList.add('clicked');
            console.log(newCell.innerHTML);
        });
    }
}
