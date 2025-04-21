
/**
 * 給定 start, end，求 start 到 end 之間所有數的總和
 */

let start = 1;
let end = 10;
let sum = 0;

while (start <= end) {
    sum = sum + start;
    start++;
}

console.log(sum);