function bringSingara(taka) {
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var singara = bringSingara(100);
console.log(singara);