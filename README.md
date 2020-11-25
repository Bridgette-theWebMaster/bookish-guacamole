# bookish-guacamole

### Problem:
- Remove the lexicographically highest character from a string.
- Remove the lexicographically lowest character from a string.

### Solution/Thoughts
the S function should take in a string of characters.

that string should be split into an array of strings.

that array can now be sorted. (.sort() handles sorting lexicographically)

that sorted array should be joined into a string.

###### to find highest:
that sorted string now needs to have its highest lexicographic character removed. that character will be the first character.

.substring(1) removes the character in the "1" position, without a second parameter, substring stops at 1.

###### to find lowest:
that sorted string new needs to have its lowest lexicographic character removed. that character will be the last character.

.slice(0, -1) removes the last character in the string. the first parameter is the starting point, 0. the second parameter is the number of items to remove. passing a negative number will remove starting from the end.
