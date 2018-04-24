var options = [
    'hummus', //1
    'hamutzim', //2
    'salat', //4
    'chips' //8
];

var bitwiseOptions = {};
var pita = 1;

buildOptions();
console.log(bitwiseOptions);
/*
var bitwiseOptions = {
    'hummus': 1,
    'hamutzim': 2,
    'salat': 4,
    'chips': 8
};
*/

function buildOptions() {
    for (var i=0; i<options.length; i++){
        bitwiseOptions[options[i]] = 1 << i;
    }
}


// is(pita, 'hummus') // false
// is(pita, 'hummus') // true


function is(obj, option) {
    console.log( (bitwiseOptions[option]& obj) > 0);
}

function set(obj, option) {
    return obj = bitwiseOptions[option] | obj;
}

function unSet(obj, option) {
    return obj = bitwiseOptions[option] ^ obj;
}

// build options
//

//
console.log(pita);
pita = set(pita,'salat');
console.log(pita);
pita = unSet(pita,'salat');
console.log(pita);

pita = set(pita,'hamutzim');
console.log(pita);
pita = unSet(pita,'hamutzim');
console.log(pita);