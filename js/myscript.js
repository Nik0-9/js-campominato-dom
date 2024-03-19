let btnStart = document.querySelector('.btn-outline-dark');

btnStart.addEventListener('click', function () {

    let difficulty = document.getElementById('difficulty').value;
    const mainEl = document.querySelector('main');
    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('id', 'grid');
    createDiv = document.createElement('div');
    createDiv.setAttribute('id', 'risultato');
    createDiv.classList.add('result');
    createDiv.innerHTML = '';
    mainEl.innerHTML = '';
    mainEl.appendChild(sectionEl);
    mainEl.appendChild(createDiv);
    const gridEl = document.getElementById('grid');
    gridEl.classList.add('d-flex', 'flex-wrap');
    let listBomb = getBombByDifficulty(difficulty);
    play(difficulty, gridEl, listBomb);

    //console.log(list);
});

function getBombByDifficulty(difficulty){
    const numBomb = 16;
    if(difficulty === 'easy'){
        for (i = 0; i < numBomb; i++) {
            listBomb = getRandomIntUnique(1, getCellsByDifficulty(difficulty), numBomb);
        }
    }else if(difficulty === 'medium'){
        for (i = 0; i < numBomb; i++) {
            listBomb = getRandomIntUnique(1, getCellsByDifficulty(difficulty), numBomb);
        }
    }else{
        for (i = 0; i < numBomb; i++) {
            listBomb = getRandomIntUnique(1, getCellsByDifficulty(difficulty), numBomb);
        }
    }
    return listBomb;
}

function getCellsByDifficulty(difficulty) {

    switch(difficulty){
        case 'easy':
            return 100;
            break;
        case 'medium':
            return 81;
            break;
        case 'hard':
            return 49;
            break;
    }

    /*if (difficulty === 'easy') {
        return 100;
    } else if (difficulty === 'medium') {
        return 81;
    } else if (difficulty === 'hard') {
        return 49;
    }*/
}


function generateCell(content, difficulty) {

    let addCell = document.createElement('div');
    addCell.innerText = content;
    addCell.classList.add('cell');
    if (difficulty !== 'easy') {
        addCell.classList.add(`cell-${difficulty}`);
    }
    return addCell;
}

function play(difficulty, grid, listBomb) {
    console.log(listBomb);
    const cells = getCellsByDifficulty(difficulty);
    let score = 0;
    let isFound = false;
    for (i = 0; i < cells; i++) {
        const newCell = generateCell(i + 1, difficulty);
        grid.appendChild(newCell);
        newCell.addEventListener('click', function () {
            if (!isFound) {
                console.log(newCell.innerText);
                if (listBomb.includes(parseInt(newCell.innerText))) {
                    isFound = true;
                }
                if (isFound) {
                    newCell.classList.add('bomb');
                } else {
                    if (!newCell.classList.contains('clicked')) {
                        score++;
                        newCell.classList.add('clicked');
                    }
                }
                createDiv.innerHTML = `Il tuo punteggio è: ${score}`;
            } else {
                createDiv.innerHTML = `Hai perso il tuo punteggio è: ${score}`;
            }
            if(isFound){
                const boxes = document.querySelectorAll('.cell');
                //console.log(boxes);
                for(let i = 0 ; i < boxes.length; i++){
                    if(listBomb.includes(i + 1)){
                        boxes[i].classList.add('bomb');
                        
                    }
                }
            }
        });
    }
}