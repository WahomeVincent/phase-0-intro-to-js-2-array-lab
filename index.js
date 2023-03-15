// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    let cats1 = [...cats, "Broom"];
    return cats1;
    
}

function prependCat() {
    let cats1 = ["Arnold", ...cats]; 
    return cats1 ;
}

function removeLastCat() {
    let cats1 = cats.slice(0, -1);
    return cats1;
}

function removeFirstCat() {
    let cats1 = cats.slice(1);
    return cats1;
}