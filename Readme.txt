DECODING REGEX

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
\D: not a digit
\w : matches any word character(a-z, A-Z, 0-9, _)
\W: not a word charater
\s: matches whitespace character (space, tabs)
\S: not a whitespace
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
 
 POSITION META CHARACTER:
 \b : word boundary
 e.g: \b\w{4}\b : matches all 4 letter words
 
 CAPTURING GROUPS:
 - Can use $0, $1 and $2: $0-group 0 means everything, $1-group 1 means first parenthesis and $2-group 2 means second parenthesis.
 - Typically used for find and replace
 Find: (\w+),\s+(\w+) Replace with: $2 $1; 
 
 GREEDY MODIFIER:
 \[.*] - keep matching anything
 \[.*?] - not greedy modifier

 BACK REFERENCE:
 \1
 \b(\w+)\s\1\b: capture the repeated words
 
 ALTERNATE CHARACTERS:
 - Use | symbol
 e.g: (cute | toy) rabbit : matches cute rabbit and toy rabbit





