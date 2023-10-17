var person = ["name", "John", "lastname", "Black", "age", "23"];
var result = {};
for (var i = 0; i < person.length; i += 2) {
    var key = person[i];
    result[key] = person[i + 1];
}
console.log(result);


function number(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
var numbers = [10, 20, 30, 40, 50];
var something = number(...numbers);
console.log(something);


function logDataType(value) {
    console.log(typeof value);
}
logDataType(true);
