// task 1
function getAttributes() {
    let link = document.querySelector('a');

    console.log(link.getAttribute('href'));
    console.log(link.getAttribute('hreflang'));
    console.log(link.getAttribute('rel'));
    console.log(link.getAttribute('target'));
    console.log(link.getAttribute('type'));
}

// task 2
window.onload = function() {
    let table = document.querySelector('table');

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }
};

// task 3
function createCloneNode(block) {
    let body = document.querySelector('body');
    let element = document.createElement(block);
    let p = document.createElement('p');

    p.textContent = 'Hello';

    element.appendChild(p);
    body.appendChild(element);
}
createCloneNode('div');
createCloneNode('span');

// task 4
function addChildrenTo(block, count, type) {
    let body = document.querySelector('body');
    let newBlock = document.createElement(block);
    
    for (let i = count; i > 0; i--) {
        let newType = document.createElement(type);
        body.appendChild(newBlock);
        newBlock.appendChild(newType);
    }
}
addChildrenTo('div', 3, 'p');

// task 5
function setColor(text) {
    let task5 = document.getElementById('task-5');
    let colors = ['red', 'blue', 'yellow'];
    let textArray = text.split('');
    
    for (let i = 0; i < textArray.length; i++) {
        for (let j = 0; j < textArray[i].length; j++) {
            let span = document.createElement('span');
            let allSpan = task5.querySelectorAll('span');
            let newColor = Math.round(Math.random()*(colors.length));

            if (colors[newColor] == undefined) {
                allSpan.forEach(el => {
                    el.remove();
                });
                
                setColor(text);
                return;
            }

            if (i > 0 && allSpan[i - 1].style.color === colors[newColor]) {
                allSpan.forEach(el => {
                    el.remove();
                });
                
                setColor(text);
                return;
            }
            
            span.textContent = textArray[i][j];
            span.style.color = colors[newColor];
            task5.appendChild(span);
        }
    }
}
setColor('Hello World');

// task 6
    let table = document.getElementById('task-6');
    let tableRow = table.querySelector('tr');
    let tableCells = table.querySelectorAll('td');

    table.addEventListener('mouseover', function() {
        let index, indexInc, indexDic, indexSplitArr, indexDicSplitArr, indexIncSplitArr;
        let targetClass = event.target.classList.value;

        event.target.clicked = true;

        tableCells.forEach((el, i) => {
            if (!el.clicked) return false;
            index = i;
            indexInc = i + 1;
            indexDic = i - 1;
            indexSplitArr = String(index).split('');
            indexIncSplitArr = String(indexInc).split('');
            indexDicSplitArr = String(indexDic).split('');
            el.clicked = undefined;
        });

        tableCells[index].classList.add('change-size');

        if (indexInc < 100 &&
            indexSplitArr[0] === indexIncSplitArr[0] &&
            tableCells[indexInc].classList.value === targetClass) {
            tableCells[index + 1].classList.add('change-size');
        }

        if (indexDic > 0 &&
            indexSplitArr[0] === indexDicSplitArr[0] &&
            tableCells[indexDic].classList.value === targetClass) {
            tableCells[index - 1].classList.add('change-size');
        }

        if ((index + tableRow.childElementCount) < 100 &&
            (index + tableRow.childElementCount) > 0 &&
            tableCells[index + tableRow.childElementCount].classList.value === targetClass) {
            tableCells[index + tableRow.childElementCount].classList.add('change-size');
        }

        if ((index - tableRow.childElementCount) < 100 &&
            (index - tableRow.childElementCount) > 0 &&
            tableCells[index - tableRow.childElementCount].classList.value === targetClass) {
            tableCells[index - tableRow.childElementCount].classList.add('change-size');
        }
    })

    table.addEventListener('mouseout', function() {
        tableCells.forEach(el => {
            if (el.classList.contains('change-size')) {
                el.classList.remove('change-size');
            }
        });
    })
