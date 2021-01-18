let array = [1, 2, 2, 1];
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
    array.sort(); 
    const frequencyTable = {}; 
    array.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1); 
    let modes = []; 
    let maxFrequency = 0; 
    for (const key in frequencyTable) {
        if (frequencyTable[key] > maxFrequency) {
            modes = [Number(key)]; 
            maxFrequency = frequencyTable[key];
        } else if (frequencyTable[key] === maxFrequency) {
            modes.push(Number(key)); 
        }
    }
    if (modes.length === Object.keys(frequencyTable).length) {
        modes = []; 
    }
    console.log('The mode is: ' + modes); 
}
function update() {
    getMean(); 
    getMedian(); 
    getMode(); 
}
update(); 