// var, let, const
// declarations ans initialization

// var - ES5
// let, const - ES6

// a = 12; ---> not used
// var username = "sarah";

var a;
var a = 12;

// ----- var -----
// 1. window me add hota hai
// 2. function scoped hota hai

function abcd() {
    if(true) {
        var a = 12;
    }
}
// 3. firse declare kr sakte ho same name se and error nahi aayega



let a = 12;
const discount = 12;