//Given two strings s1 and s2, return true if s1 is a substring of s2 regardless of the characters ordering,
//or false otherwise.
//You can expect that s1 and s2 consist of lowercase English letters.

function subString(s1, s2) {
  s1 = s1.split(' ').join('')
  s2 = s2.split(' ').join('')
if (s1.length > s2.length) return false;
const obj = {};
for (let i = 0; i < s2.length; i++) {
  if (!(s2[i] in obj)) {
    obj[s2[i]] = 1;
  } else {
    obj[s2[i]]++;
  }
}
for (let i = 0; i < s1.length; i++) {
  if (!(s1[i] in obj)) {
    return false;
  } else {
    obj[s1[i]]--;
    if (obj[s1[i]] < 0) {
      return false;
    }
  }
}
return true;
}

//subString('olleh', 'hello world'); // true
//subString('olllleh', 'hello world'); // false
//subString('a', 'b'); // false
//subString('', 'hello'); // false

