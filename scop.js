// let a=10;
// const b=20;
// var c=30;

if (true) {
    let a=10;
    const b=20;
    var c=30;

}

//  console.log(a);
//  console.log(b);
// console.log(c);

const user = {
    username : "Ashish",
    price: 999,

    wecomeMessage:  function () {
        console.log(`${this.username}, wecome to web site`);
    }

}
// user.wecomeMessage();

function chai () {
    console.log(this);
}
// chai()

// arryoFuntion

const add = (num1,num2) => {
    return num1 + num2;
}
console.log(add(4,5));