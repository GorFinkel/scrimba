function panic(string){
    array=string.split(' ')
    if(array.length){
        for (let str=0;str<array.length-1;str++){
            array[str]=`${array[str]} 😱`
        }
    }
    array.push('!')
    string=array.join(' ')
    return string
}

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
