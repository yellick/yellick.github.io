class Moving {
    constructor(field) {
        this.field = field;
    }

    right() {
        this.field.forEach((row) => {
            row.forEach((e) => {
                
            })
        })
    }
}

function start() {
    field = createMatrix();

    let Move = new Moving(field);


    y = Math.floor(Math.random() * field.length);
    x = Math.floor(Math.random() * field[0].length);

    num = 2; //Math.random() > 0.5 ? 2 : 4;
    
    field[y][x].el.textContent = num;
    field[y][x].val = num;

    Move.right()

    document.addEventListener('keydown', (e) => {
        let kCode = e.code;
    
        switch (kCode) {
            case "ArrowUp":
                console.log("Вверх");
                break;
    
            case "ArrowDown":
                console.log("Вниз");
                break;
    
            case "ArrowLeft":
                console.log("Влево");
                break;
    
            case "ArrowRight":
                console.log("Вправо");
                break;
        };
    });
}

function createMatrix() {
    let matrix = [ [], [], [], []];
    let cells = document.querySelectorAll('.cell');

    cells.forEach((e) => {
        pos = e.id.split('--');

        y = Number(pos[0]) - 1;
        x = Number(pos[1]) - 1;

        arrEl = {
            'el': e,
            'val': 0
        }
        
        matrix[y][x]= arrEl;
    })

    return matrix;
}



start()