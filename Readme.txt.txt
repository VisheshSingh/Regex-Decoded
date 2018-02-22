Regular Expressions:
- Always contained within / /
- g stands for global and i stands for case insensitive

CHARACTER SETS:
- a way to match different characters using [ ]
E.g: [ng]inja matches ninja or ginja

- If ^ is used inside character sets then it matches everything except the characters
E.g: [^lm]123 matches a123 or g123 or z123

RANGES:
E.g: [a-j]000 matches a000 or b000 or c000 ....j000
[a-zA-Z] matches aA or bH or kM
[0-9]inja matches 0inja, 6inja

REPEATING CHARACTERS:
[0-9]+ : matches any number at least one or more times
[0-9]{5}: matches 5 consecutive digits
[a-z]{11}: match an 11 letter word
[a-z]{5,8}: if you want smtg to be between 5 and 8 characters
E.g: 'hello' or 'netninja' but not 'hi' or 'thegreedyworld'
[0-9]{5,} : matches at least 5 digits or more 

METACHARACTERS:

\d : matches any character digit (same as [0-9])
\w : matches any word character(a-z, A-Z, 0-9, _)
\s: matches whitespace character (space, tabs)
\t: match tab only 

SPECIAL CHARACTERS:
+ : 1 or more matches
\ : escape character
[] : character set
[^]: negate anything inside the parenthesis
* : 0 or more matches
? : 0 or 1 match
. : matches anything (except newline character)

STARTING AND ENDING PATTERNS:
 ^ - must be at the start of expression
 $ - must be at the end of the expression
 E.g: ^[a-z]{5}$ matches 'ninja' or 'abcde' but not 'aakjsdfasfjlkjskj'
 - match only happens if it is exactly 5 letter word






