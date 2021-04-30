let form = document.forms.renderTable;
let getTable = document.querySelector('table');

let arrows = document.querySelector('.arrows');
let up = arrows.querySelector('.arr.up');
let right = arrows.querySelector('.arr.right');
let left = arrows.querySelector('.arr.left');
let down = arrows.querySelector('.arr.down');

let allArrows = {
    up: {active: false},
    left: {active: false},
    right: {active: false},
    down: {active: false}
};

let activeUp = () => {
    if (allArrows.up.active){
        up.classList.add('changeColor');
    } else {
        up.classList.remove('changeColor');
    };
};

let activeLeft = () => {
    if (allArrows.left.active){
        left.classList.add('changeColor');
    } else {
        left.classList.remove('changeColor');
    };
};

let activeRight = () => {
    if (allArrows.right.active){
        right.classList.add('changeColor');
    } else {
        right.classList.remove('changeColor');
    };
};

let activeDown = () => {
    if (allArrows.down.active){
        down.classList.add('changeColor')
    } else {
        down.classList.remove('changeColor');
    };
};

up.addEventListener('mousedown', (ev) => {
    ev.preventDefault();
    allArrows.up.active = !allArrows.up.active;

    activeUp();
});

left.addEventListener('mousedown', (ev) => {
    ev.preventDefault();
    allArrows.left.active = !allArrows.left.active;

    activeLeft();
});

right.addEventListener('mousedown', (ev) => {
    ev.preventDefault();
    allArrows.right.active = !allArrows.right.active;

    activeRight();
});

down.addEventListener('mousedown', (ev) => {
    ev.preventDefault();
    allArrows.down.active = !allArrows.down.active;

    activeDown();
});

document.addEventListener('keydown', (ev) => {
    //ev.preventDefault();
    //allArrows.up.active = !allArrows.up.active;
    if (ev.code !== 'ArrowUp'){
        up.classList.add('changeColor');
    } else {
        up.classList.remove('changeColor');
    };
});

// left.addEventListener('keydown', (ev) => {
//     ev.preventDefault();
//     allArrows.left.active = !allArrows.left.active;

//     activeLeft();
// });

// right.addEventListener('keydown', (ev) => {
//     ev.preventDefault();
//     allArrows.right.active = !allArrows.right.active;

//     activeRight();
// });

// down.addEventListener('keydown', (ev) => {
//     ev.preventDefault();
//     allArrows.down.active = !allArrows.down.active;

//     activeDown();
// });



form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(form);

    let column = Number(formData.get('column').trim());
    let row = Number(formData.get('row').trim());
        
    for (let i = 0; i < row; i++){
        let tr = document.createElement('tr');
        for (let i = 0; i < column; i++){
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        getTable.appendChild(tr);
    }
});
