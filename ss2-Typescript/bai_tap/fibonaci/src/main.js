// vòng lặp đơn thuần
// function fibonacci(number: number) : number{
//     var a = 1, b = 0, c;
//     while (number > 0){
//         c = a;
//         a = a + b;
//         b = c;
//         number--;
//     }
//     return b;
// }
// đệ quy
function fibonacci(number) {
    if (number <= 1) {
        return 0;
    }
    else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
console.log("5 số đầu tiên trong dãy fibonacci:");
for (var i = 0; i < 5; i++) {
    console.log(fibonacci(i));
}
var sum = 0;
console.log("Tổng 5 số đầu tiên trong dãy fibonacci: ");
for (var i = 0; i < 5; i++) {
    sum += fibonacci(i);
}
console.log(sum);
