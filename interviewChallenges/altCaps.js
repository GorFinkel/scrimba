function altCaps(str){
    let array=str.split('')
    console.log(array)
    for (let value=1;value<array.length;value+=2){
        array[value]=array[value].toUpperCase();
    }
    let newStr=array.join('')
    return newStr
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
