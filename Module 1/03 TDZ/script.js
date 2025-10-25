// Temporal Dead Zone (TDZ) => utna area jitne me Js ko pata to hai ki variable exist karta hai, par wo aapko value nahi de sakta

console.log(a);
let a = 12;


var b = undefined;
// Hoisting impact per type
// hoisting => ek variable ko jab Js me banate hai to wo variable do hisso me toot jaata hai and uska declare part upar chala jaata hai, and uska initialization part neeche reh jaata hai

// var b = 21;

b = 21;

console.log(c); // undefined
var c = 52;


// var -> hoist -> undefined
// let -> hoist -> X (reference error aata hai)
// const -> hoist -> X (reference error aata hai)


// Object.freeze() - static method used to make an object immutable
// when an object is frozen, it bcomes impossible to 
    // 1. modify its properties
    // 2. add new properties
    // 3. remove existing ones