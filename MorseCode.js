
function morseCode() {

var characters = {"A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--..", "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "..--."};  
      //Morse Code dictionary

var userInput = prompt("Enter text here").toUpperCase().split(" ");//user input will be stored in a  var called user input, converted to upper case and be split word by word

var result = "";                 // the var result will store the utput in a string

for(i = 0; i < userInput.length; i++) {  //for loop goes through each char of userInput

var currentWord = userInput[i];        //goes through each word
                
    for(j = 0; j < currentWord.length; j++) {
    	
		var currentLetter = currentWord.charAt(j);
		result += Characters[currentLetter];
		result += "  ";  
    }
	     
	 if(i != userInput.length -1) {
	 	result += "|";                //separates words with a pipe char
	 }
}




document.getElementById('result').innerHTML = result;

}
window.onload = MorseCode;    //tells browser to load this function 









