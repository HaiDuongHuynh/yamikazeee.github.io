let x=1;

function foo(y){
    return function(z){
        return x+y+x;
    }
}

let f = foo(2);
console.dir(f);