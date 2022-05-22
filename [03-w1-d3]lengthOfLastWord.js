// Learning: string split
// language: javascript

//Problem: Given a string s consisting of some words separated by some 
//number of spaces, return the length of the last word in the string.
//A word is a maximal substring consisting of non-space characters only.

//Solution: 
function lengthOfLastWord(string) {
    let words = string.split(' ');
    return words[words.length - 1].length;
}