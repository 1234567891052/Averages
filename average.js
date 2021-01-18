let array = [8,69,64,74,58,9,33,91,90,12,13,80,51,19,60,47,49,52,15,88,88];
function getMean() {
    let sum = 0; 
    for (let i = 0; i < array.length; i++){
        sum += array[i]; 
    }
    let mean = sum / array.length; 
    console.log('The mean is: ' + mean); 
}
function getMedian() {
    array.sort(function(a, b){return a-b});
    let len = array.length;  
    let median = 0; 

    if(array.length % 2 === 0){
        median = (array[len/2]+array[len/2 - 1])/2;  
    } else {
        median = array[(len - 1)/2]; 
    }
    console.log('The median is: ' + median); 
}
function getMode() {
    let bool = false; 
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
            bool = true; 
        }
    }
    if (modes.length === Object.keys(frequencyTable).length) {
        modes = []; 
        bool = false; 
    }

    if(bool === true){
        console.log('The mode is: ' + modes); 
    } else {
        console.log('NO MODE'); 
    }
}
function getRange(){
    array.sort(function(a, b){return a-b});
    let len = array.length; 
    let range = array[len - 1] - array[0]; 
    console.log('The range is: ' + range); 
}
function update() {
    getMean(); 
    getMedian(); 
    getMode();
    getRange();  
}
update(); 