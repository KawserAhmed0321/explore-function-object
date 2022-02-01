// variable
var favoriteBook = "4 hour work";
console.log(favoriteBook);

// Array
var bookList = ['postioning', 'hooked', 'startwith why'];
console.log(bookList);

// Array position 
var hookedpossition = bookList.indexOf('hooked');
console.log(hookedpossition);
// index element change 
bookList[1] = 'story book';
console.log(bookList);
// push 
bookList.push("hooked");
console.log(bookList);
// pop
bookList.pop();
console.log(bookList);

// condition 
if (bookList[1] == 'hooked') {
    console.log('hooked');
}
else {
    console.log('othears');
}
// while loop 
var i = 0;
while (i <= 15) {
    console.log(i);
    i++;
}
// for loop 
for (var i = 0; i <= 10; i++) {
    console.log(i);
}