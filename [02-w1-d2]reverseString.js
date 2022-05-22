//Problem: Giver a string, return a new string with a reversed order of characters.
//Example: 
//reverseString('hello') // 'olleh'

//solution

//1
function reverseString(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

//2
function reverseString(string) {
  return string.split('').reverse().join('');
}
