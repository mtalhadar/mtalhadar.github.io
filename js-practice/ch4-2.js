function range(a, b, step = 1) {
    let arr = [];
    let inc = 0;

    if (a < b) {

        let c = Math.ceil((Math.abs(a - b) + 1) / Math.abs(step));

        for (let i = 0; i < c; i++) {
            inc = a + i * step;
            arr.push(inc);
        }
    }
    return arr;
}

function sum(nums) {
    let sum = 0;

    for (let i of nums) {
        sum += i;
    }
    return sum;
}

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function listTail(list){
    let tail=list;

    while(tail.rest){
        tail=tail.rest;
    }
    return tail;
}

function appendToList(a, list){
    let tail=listTail(list);
    tail.rest={value:a, rest:null};
}

appendToList(10, list);

while(list){
    console.log(list);
    console.log("\n");
    list=list.rest;
}