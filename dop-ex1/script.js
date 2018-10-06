let num = 33721;

function calc(n) {
    n = String(n).split('').map(Number);//map перебирает массив и трансформирует в число.
    return n ;
}
let a = calc(num);
console.log(a);


let result = a.reduce(function(sum, current){
    return sum * current 
});
 console.log(result);

 let b = result ** 3;
 console.log(b);

 let c = calc(b);
     
 alert(c[0] + '' + c[1]);
 console.log(c);

