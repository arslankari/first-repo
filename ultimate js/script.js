let r = Math.floor(Math.random()*100);
console.log(r);
let n = prompt("Enter The Number :");
do{
    if(n==r){
        break;
    }
    else if(n>r){
        console.log("It is greater");
    }
    else if(n<r){
        console.log("It is lesser ");
    }
    n = prompt("Enter a Number");
}while(n != r);
    console.log("Good you did a great job ")

