function greet(name){
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback){
    const name = "Raveen";
    callback(name);
}

higherOrderFunction(greet);

