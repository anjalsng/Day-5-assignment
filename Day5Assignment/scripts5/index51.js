console.log("Higher order function")
let num=window.prompt("Enput a number");
let arr=[]
for (i=1;i<=num;i++)
 {
    
    arr.push(i);
  }
  console.log(arr)

 let odd = arr.filter(el=>el%2!=0);
  console.log(odd)
let oddsquares = arr.filter(e1=>e1%2!=0).map(e1=>e1**3);
console.log(`Qube of odd number upto ${num}--`)
console.log(oddsquares)