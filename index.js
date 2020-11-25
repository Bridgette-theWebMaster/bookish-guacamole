//removing highest lexicographic letter
function S(str)
  {
return str.split('').sort().join('').substring(1);
  }
console.log(S("abc"));
console.log(S("hot"));
console.log(S("aaa"));

//removing lowest lexicographic letter
function S(str)
  {
return str.split('').sort().join('').slice(0, -1);
  }
console.log(S("abc"));
console.log(S("hot"));
console.log(S("aaa"));