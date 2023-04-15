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


// function altCaps(str){
//     // assemble each character back into a new string
//     let newStr = '';
//     // loop through the string
//     for(let i = 0; i < str.length; i++){
//         // uppercase every character with an even index
//         if(i % 2 === 0){
//             newStr += str[i].toUpperCase();
//         } else {
//             newStr += str[i]
//         }
//     }
//     return newStr;
// }

// console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
