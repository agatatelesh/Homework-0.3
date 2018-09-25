let money = prompt("Ваш бюджет?", '120393');
let name = prompt("Название вашего магазина?", 'kvakin');
let time = 27;


let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: [],
    open: false
}

for ( let i = 0; i < 3; i++){
    let a = prompt("Какой тип товаров будем продавать?", 'people')
    
    if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ){
        console.log('All correct!');
        mainList.shopGoods[i] = a;
    } else {
        i--
    }
}

if (time < 0) {
    console.log("Its not posible!");
} if ( time > 8 && time < 20) {
    console.log ("Time to work!");
} else if ( time < 24) {
    console.log("It's too late!");
} else {
    console.log("In day only 24 hours!");
}

// let i = 0 ;
// while ( i < 3){
//     let a = prompt("Какой тип товаров будем продавать?")
//     mainList.shopGoods[i] = a;
//     i++
// }

// let i = 0;
// do {
//     let a = prompt("Какой тип товаров будем продавать?")
//      mainList.shopGoods[i] = a;
//      i++
// }
// while (i < 3);


let a = alert("Бюджет на 1 день " +''+ money/30);

console.log(mainList);