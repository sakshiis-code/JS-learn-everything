// Scope (global, block, functional)
// Reassignment, redeclaration

// var => functional scoped, will not respect a block
var a = 12;

{
    var b = 134;
}

function abcd() {
    if(true) {
        var a = 12;
    }
}

// let => block scoped
{
    let a = 12;
}


// var can be reassigned and can be redeclared
var b = 32;
b = 12;

var b = 233;

// let can be reassigned but cannot be redeclared
let c = 32;
c = 12;

// let c = 433;  ---> it will give an error