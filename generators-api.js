function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array){
    for(let value of array){
        yield + "http://siste/profile/" + value;
    }
}

const it = iterate(["Ana", "Bia", "Cia", "Dia", "Eia", "Fia", "Gia"]);

for(let value of it){
    console.log(value);
}