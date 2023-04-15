function whisper (string){
    if (string.endsWith('!')){
        return 'shh... ' + string.toLowerCase().slice(1,string.length-1)
    }
    return 'shh... ' + string.toLowerCase()
}
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
