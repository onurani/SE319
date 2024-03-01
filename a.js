function add(a,b){
    let a1 = a*2;
    let b1 = b+100;
    return a1+b1;

}


let add2 = (a,b) =>{
    let a1 = a*2;
    let b1 = b+100;
    return a1+b1;
}

function subtract(a,b){
   return a-b;

}

let subtract2 = (a,b) => {
    let a2 = a-10;
    let b2 = b-10;
    console.log(a2-b2);
}

let doubleEven = (n) => {
    console.log("I im in doubleEven");
    if(n%2 == 0){
        console.log("even", n*2);
    }
    else{
        console.log("odd", n);
    }
}

function performtasks(mycallback){
    console.log("hello 1");
    setTimeout(mycallback(5),10000);
    setTimeout(mycallback(6),1000);


   
   
    console.log("hello 2");
}

console.log(add(5,6));
console.log(add2(5,6));
console.log(doubleEven(5));
console.log(doubleEven(4));
console.log("hello 0");
performtasks(doubleEven);
//subtract2(a,b);

setTimeout(()=>console.log("Hello"), 400);
console.log("after");