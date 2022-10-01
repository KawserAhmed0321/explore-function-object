function interrest(p,n,r){
     var simpleInterrest=(p*n*r)/100;
     return simpleInterrest;
}
const P=36000, N=12, R=12.6;
const total=interrest(P,N,R);
console.log(total);
