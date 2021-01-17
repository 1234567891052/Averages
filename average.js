// Need to create the mode function

let array = [1, 2, 3, 4, 5];

function getMean() {
    let sum = 0; 
    for (let i = 0; i < array.length; i++){
        sum += array[i]; 
    }
    let mean = sum / array.length; 
    console.log('The mean is: ' + mean); 
}

function getMedian() {
    let median; 
    array.sort(); 
    let len = array.length;
    if (len % 2 === 0) {
        median = (array[len / 2] + array[len / 2 - 1]) / 2;
    } else {
        median = array[(len - 1) / 2]; 
    }
    console.log('The median is: ' + median); 
}

function getMode() {
    
}

function update() {
    getMean(); 
    getMedian(); 
    getMode(); 
}

update(); 