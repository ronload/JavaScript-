// 學生 => 分數
/**
 * 100-91 => A
 * 90-81 => B
 * 80-71 => C
 * 70-61 => D
 * <61 => F
 */

const grade = 69;

if (grade >= 91) {
    console.log("A");
} else if (90 >= grade && grade >= 81) {
    console.log("B");
} else if (80 >= grade && grade >= 71) {
    console.log("C");
} else if (70 >= grade && grade >= 61) {
    console.log("D");
} else {
    console.log("F");
}