exports.isCharacterMatch = function(string1, string2) {
    
    // Convert both strings to lower case and remove all spacing and converted string2 to an array
    let str1LowerCase = string1.toLowerCase().replace(/\s/g, '');
    let str2LowerCase = string2.toLowerCase().replace(/\s/g, '');
    let str2Arr = str2LowerCase.split('');

    // Stepped thru str1LowerCase checking to see if char c is in str2Arr; if so, we removed c from str2Arr and continued thru; if not, returned false, not anagram
    for(c of str1LowerCase) {
        if (str2Arr.includes(c)){
            let i = str2Arr.indexOf(c)
            str2Arr.splice(i, 1);
        } else {
            return false;
        }
    }
    // After going thru str1LowerCase, this checks to see if str2Arr is empty; if it is, string1 and string2 are anagrams
    if (str2Arr.length === 0){
        return true;
    } else {
        return false;
    }
};

exports.anagramsFor = function(word, listOfWords) {
    
    //Create test variable which calls characterMatch module
    var test = require("./characterMatch");
    let anagramList = [];
    let wordLower = word.toLowerCase();
    
    //Calls characterMatch for each string in listOfWords
    for (w of listOfWords) {
        if (test.isCharacterMatch(word, w) === true) {
            anagramList.push(w);
        } 
    }
    return anagramList
};

