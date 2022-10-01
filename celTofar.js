function far(cel) {
    var f = (cel*1.8)+32;
    return f;

}
var c= 14;
var f = far(c);
console.log(c, 'degree celcius is ', f,'farinhite');


//farinhite to celcius
 function cel(f){
    var c=(f-32)*5/9;
    return c;
 }
 var farinhite=12;
 var celcius= cel(farinhite);
 console.log(farinhite,'degree farinhite is' ,celcius,'celcius');