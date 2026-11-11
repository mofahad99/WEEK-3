// 1. What is the output and why?

// console.log("5" - 1 + 1);
// }= out put 5. minus converts string into number then calculate 5-1+1="5"

// console.log("5" + 1 - 1);
// }=out put 51. "+" sees string so its join them "51" then "-1" ("5" + 1 - 1)= ans 50

// second question
// 2. Remove all falsy values from this array without using .filter():
// [0, 1, &quot;&quot;, &quot;text&quot;, undefined, null, NaN, 42]

// ans}=1,text,42 removed all falsy values

// third question
// 3. Predict and explain the results:
// console.log(1 + true); out put "2". "true means 1". 1+true= 2

// console.log("10" * "2"); out put 20 . "*" is numeric so value must be numbers and "10" "2" into numbers 10 * 2 ans 20

// console.log("10" + true) out put "10true". "+" sees string("") its join them ans= "10true"

// console.log(undefined + 1) out put "NaN". undefined converted to "NaN" and "undefined+1=NaN "


// 5th question
// const data = [
//     { name: "Ali", scores: [10, 20] },
//     { name: "Sara", scores: [30, 40] }
// ];
// Expected: [10, 20, 30, 40]

// const data = [
//     { name: "Ali", scores: [10, 20] },
//     { name: "Sara", scores: [30, 40] }
// ];
// const result=data.reduce((acc,user)=>{
//     return[...acc,...user.scores];
// },[])
// console.log(result)


// seventh question


// 7. What will each log?
// const user = {
// profile: {
// address: {
// city: "Dubai";
// }
// }
// };
// console.log(user.profile?.address?.city);
// console.log(user.profile?.contact?.phone);

// 1st console out put ans=Dubai } user.profile checks address true exists and checks city exists answ= Dubai
// 2nd console output ans=undefined} user.profile checks contact does not exists so answ=undefined

// 8. Use destructuring with rest:
// const [a, b, ...rest] = [10, 20, 30, 40];
// console.log(a, b);= a=10, b=20
// console.log(rest);=30,40
// rest means = used to collect multiple values into a single variable

// 9th question
// 9. Explain object property shorthand:
// const name = "Ali";
// const age = 25;

// const user = { name, age };

// console.log(user);

// variable name,property name same aanenkil 2pravshyo ezhuthndaa avshyamilla
// {name,age}={name:name,age:age}

// 10th question
// 10. Use call() to bind this:
// function greet() {

// return `Hello, ${this.name}`;
// }
// const user = { name:"Reem" };
// console.log(greet.call(user)); 

// 4th question
// 4. Write a function that uses a callback to return the first vowel in a string.
// function findVowel(str, callback) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" ||
//             str[i] === "e" ||
//             str[i] === "i" ||
//             str[i] === "o" ||
//             str[i] === "u") {
//             callback(str[i]);
//             return;
//         }
//     }
// }
// findVowel("Helllooo", function(vowel){
//     console.log(vowel);
// })

// 11th question 
// 11. Shallow copy vs deep copy:
// const original = { name:"Ali", info: { city: "Dubai" } };
// const copy = { ...original };
// copy.info.city = "Abu Dhabi";
// console.log(original.info.city); // ? output = "Abu Dhabi" nested change affect can both so it is shallow copy "const copy = { ...original };"


// const copy = structuredClone(original);

// copy.info.city = "Abu Dhabi";

// console.log(copy.info.city);     // Abu Dhabi
// console.log(original.info.city); // Dubai
// deep copy= they both are saperate ="const copy = structuredClone(original);" structuredClone() creates a completely separate copy.