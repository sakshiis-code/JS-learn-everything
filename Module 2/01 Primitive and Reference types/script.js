// ***** primitive data types *****
let a = 12;
let b = a;

a = a + 2;

// string
`sarah`

// number
// 12 - integer
// 12.3 - number
let num = 30;

// boolean
// true and false
let u = true;
let v = false;

// null
// null ka matlab hai aapne jaan boojh kar koi value nahi di

// undefined
// undefined ka matlab hai ki aapne ek variable banaya aur usey value nahi di to jo value by default mili wo hai undefined
let z;

// symbol -> unique immutable value 
let obj = {
    uid: 1,
    name: "sakshi",
    age: 20,
    email: "something@test.com"
};

let u1 = Symbol("uid");
obj[u1] = "001";

// let u2 = Symbol("uid");

// bigint
let e = 9007199254740991n;
// e + 2n



// ***** reference data types *****
// arrays, objects, funcions
let x = {
    name: "sam",
};
let y = x;

y.name = "sammy";