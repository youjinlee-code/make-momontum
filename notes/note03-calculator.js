const calculator = {
    plus: function(a, b){ return a+b; },
    minus: function(a, b){ return a-b; },
    division: function(a, b){ return a/b; },
    multiple: function(a, b){ return a*b; },
    square: function(a, b){ return a**b; }
}

let calFun = Object.keys(calculator)
for(let i=0; i<5; i++){
    console.log(calculator[calFun[i]](5, 5));
}