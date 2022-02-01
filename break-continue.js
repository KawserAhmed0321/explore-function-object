// while  break
// var i = 0;
// while (i < 15) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);

//     i++;
// }

// for loop 
// for (var i = 0; i <= 10; i++) {
//     if (i == 8) {
//         break;
//     }
//     console.log(i);
// }


var numbers = [54, 35, 21, 98, 23, 101, 45, 65];
console.log(numbers.length);
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);

}

// continue 
var numbers = [54, 35, 21, 98, 23, 101, 45, 65];
console.log(numbers.length);
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        continue;
    }
    console.log(number);

}