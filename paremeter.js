function bringSingera(taka)
{
    console.log('Taka =', taka);
    var price =10;
    var quntity = taka / price ;
    return quntity;
}
var money =250;
var singera= bringSingera(money);
console.log('total=',singera);