function evenNumber(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 144;
 const isMynumberEven = evenNumber(myNumber);
 console.log('my number is even',isMynumberEven);

 const hesNumber =143;
 const herNumberIsEven = evenNumber(hesNumber);
 console.log("her number is even",herNumberIsEven);



 function oddNumber(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
 }

 const myoddNumber =144;
 const mynumberisodd = oddNumber(myoddNumber);
 console.log('my number is odd:',mynumberisodd);

const heroddNumber = 145;
const hernumberisodd = oddNumber(heroddNumber);
console.log('her number is odd:', hernumberisodd);