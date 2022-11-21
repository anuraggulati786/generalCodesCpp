{
    var a = 5;
}
console.log(a);



var b = 10;
var c = "10";


if(b==c){
    console.log("true");
}
if(b===c){
    console.log("Sec true");
}


var arr = [3,2,5,1,6,"Hello"];
console.log(arr);

console.log(arr.length);

arr.pop()
console.log(arr);


arr.push("Hi")
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(1)
console.log(arr)

arr.sort()
console.log(arr)

let person = {
    firstName: "Kunal",
    lastName: "Garg",
    age: 20
}

console.log(person.firstName)

let str = "My name is Garg Kunal Garg.";
console.log(str.indexOf("Garg"))
console.log(str.lastIndexOf("Garg"))