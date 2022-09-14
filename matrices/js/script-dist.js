window.onload = function () {
    
    let elements = [];
        
    let strCount = document.getElementById('str-count');
    let columnCount = document.getElementById('column-count');
    let strCountM = document.getElementById('str-count-m');
    let strCountP = document.getElementById('str-count-p');
    let columnCountM = document.getElementById('column-count-m');
    let columnCountP = document.getElementById('column-count-p');
    let calculationBtn = document.getElementById('calculation-btn');
    let matrix = document.getElementById('matrix');
    let answer = document.getElementById('answer');
    
    // setting values
    strCount.value = 1;
    columnCount.value = 1;
    formMatrix(matrix, elements, strCount.value, columnCount.value);
    
    strCountM.addEventListener('click', () => {
        countMinus(strCount, matrix, elements, parseInt(strCount.value)-1, parseInt(columnCount.value))
    })
    strCountP.addEventListener('click', () => {
        
        countPlus(strCount, matrix, elements, parseInt(strCount.value)+1, parseInt(columnCount.value))
    })
    columnCountM.addEventListener('click', () => {
        countMinus(columnCount, matrix, elements, parseInt(strCount.value), parseInt(columnCount.value)-1)
    })
    columnCountP.addEventListener('click', () => {
        countPlus(columnCount, matrix, elements, parseInt(strCount.value), parseInt(columnCount.value)+1)
    })
    
    calculationBtn.addEventListener('click', () => {
        calculation(matrix, elements, strCount.value, columnCount.value, answer);
    })
}



function countMinus (inputField, matrix, arr, str, column) {
    if (parseInt(inputField.value) > 1) {
        
        inputField.value = parseInt(inputField.value) - 1
        formMatrix(matrix, arr, str, column);
        return
    }
    else {
        return
    }
}
function countPlus (inputField, matrix, arr, str, column) {
    inputField.value = parseInt(inputField.value) + 1
    formMatrix(matrix, arr, str, column);
}
function formMatrix (matrix, arr, str, column) {
        
    matrix.innerHTML = '';
    
    for (let i = 0; i < str; i++) {
        
        let str = document.createElement('div');
        $(str).addClass('str');
        matrix.appendChild(str);
        
        arr[i] = []
        
        for (let j = 0; j < column; j++) {
            
            arr[i][j] = ''
                        
            let el = document.createElement('div');
            let input = document.createElement('input');
            $(el).addClass('element');
            input.setAttribute('type', 'text')
            input.setAttribute('id', (i+1) + '-' + (j+1))
            
            el.appendChild(input);
            str.appendChild(el);
            input.value = 0;
        }
    }
    
    for (let i = 0; i < str; i++) {
        for (let j = 0; j < column; j++) {
            arr[i][j] = document.getElementById((i+1) + '-' + (j+1)).value;
        }
    }
}
function calculation (matrix, arr, str, column, answer) {
    
    for (let i = 0; i < str; i++) {
        for (let j = 0; j < column; j++) {
            arr[i][j] = document.getElementById((i+1) + '-' + (j+1)).value;
        }
    }
    
    if (str != column) {
        answer.textContent = 'нет'
    } else {
        if (str == 1) {
            answer.textContent = arr[0][0]
        } else if (str == 2) {
            answer.textContent = arr[0][0] * arr[1][1] - arr[0][1] * arr[1][0]
        } else if (str == 3) {
            answer.textContent = arr[0][0] * arr[1][1] * arr[2][2] + arr[0][1] * arr[1][2] * arr[2][0] + arr[0][2] * arr[1][0] * arr[2][1] - arr[0][2] * arr[1][1] * arr[2][0] - arr[0][1] * arr[1][0] * arr[2][2] - arr[2][1] * arr[1][2] * arr[0][0]
        } else {
            answer.textContent = 'Uncaught ReferenceError'
        }
    }
}

/*
 arr[0][0] * arr[1][1] * arr[2][2] + arr[1][0] * arr[2][1] * arr[0][2] + arr[0][1] * arr[1][2] * arr[2][0] - arr[0][2] * arr[1][1] * arr[2][0] - arr[1][0] * arr[0][1] * arr[2][2] - arr[2][1] * arr[1][2] * arr[0][0]
        for (let i = 0; i < str; i++) {
            for (let j = 0; j < column; j++) {
                
            }
        }
*/