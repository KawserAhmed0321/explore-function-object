function getfectorial(number){
    let fectorial =1;
    for( let i =1; i<=number;i++){
        fectorial=fectorial*i;
    }
    return fectorial;

}
const fistfect = getfectorial(7);
console.log('fectorial of 7 is:',fistfect);
const secondfect = getfectorial(5);
console.log('fectorial of 5 is:', secondfect);