function greet(name) {
    console.log(`Hello ${name}`);
}

function greetRaveen(greetFn) {
    const name = "Raveen";
    greetFn(name);
}

greetRaveen(greet);



