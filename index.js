function s(str)
  {
return str.split('').sort().join('').substring(1);
  }
console.log(s("abc"));
console.log(s("hot"));
console.log(s("aaa"));