function interrest(p,n,r){
     var simpleInterrest=(p*n*r)/100;
     return simpleInterrest;
}
const P=100, N=5, R=6;
const total=interrest(P,N,R);
console.log(total);
