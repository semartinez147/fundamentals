/*
* Variables, Data Types and Typing
* */
let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2key1: "Internal Object",
    }
};

// JavaScript does not support typed variables.
// let variable : string = "string"; does not compile

//JavaScript is weakly typed; it tries to match types for methods like combining a number and a string.
let var1 = "2";
let var2 = 5;
let result = var1 + var2;
console.log(result)

// "concatenate" is Latin for "with a cat"