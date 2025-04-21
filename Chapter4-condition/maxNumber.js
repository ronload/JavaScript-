// a, b, c 三數找最大

const a = 12;
const b = 14;
const c = 16;

let max;
let max2;
if (a > b) {
    max = a;
    max2 = "a";
} else {
    max = b;
    max2 = "b";
}

if (max > c) {
    console.log(max2);
}else {
    console.log(c);
}
