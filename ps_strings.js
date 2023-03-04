//explore the includes,start with &ends with functions of a string.
//includes
const sentence='the quick brown fox jumps'
const word='fox'
console.log(sentence.includes(word))
console.log(`the word"${word}"${sentence.includes(word) ? 'is' : 'is not'}in the sentence`)

//starts with
 const str1='saturday night plan'
 console.log(str1.startsWith('sat'))
 console.log(str1.startsWith('night'))

 //ends with
 const str2='cats are best'
 console.log(str2.endsWith('best'))

 //extract the amount form given:"please give me 5000"

 let str3="please give rs 5000"
 let amt=Number.parseInt(str3.slice(15))
 console.log(amt)
console.log(typeof amt)

