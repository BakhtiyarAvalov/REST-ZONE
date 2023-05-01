let output = document.getElementById(`output`);
let words = [
    `Subscribe To Stay Informed`,
    `Providing High-quality Accommodation`,
    `We are always glad to see you`,
]
let charTurn = 0;
let wordTurn = 0;
printWord();
function printWord() {
    if (charTurn<=words[wordTurn].length){
        output.innerHTML = words[wordTurn].substr(0, charTurn)
        charTurn++
        setTimeout(printWord, 100)
    }
    else{
        setTimeout(deletWord, 2000)
    }
}
function deletWord(){
    if(charTurn>=0){
        output.innerHTML = words[wordTurn].substr(0, charTurn)
        charTurn--
        setTimeout(deletWord, 100)
    }else{
        if(wordTurn<words.length - 1){
            wordTurn++
        }else{
            wordTurn = 0;
        }
        charTurn=0
        setTimeout(printWord, 200)
    }

}