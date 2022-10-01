
function grade(number) {
    if (number > 90) {
        console.log('A+');
    }
    else if (number > 80) {
        console.log('A');
    }
    else if (number > 70) {
        console.log('A-');
    }
    else if (number > 60) {
        console.log('B');
    }

    else {
        console.log('fail');
    }
}
 grade(50);