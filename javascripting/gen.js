function* generator() {
    let x = yield 1;
    // function return without assigning anything to x
    console.log("this is ", x);
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value); // 1
console.log(gen.next(100).value); // 2
console.log(gen.next().value); // 3