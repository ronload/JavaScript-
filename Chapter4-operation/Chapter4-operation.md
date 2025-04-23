# Chapter4-Operation

在前幾張我們稍微提及了如何對資料進行一些基本的運算，在這裡我們要講的稍微深入些。

## 比較運算子（Comparision Operator）

比較運算子可以用來比較兩個值的大小，比較的結果以 `boolean` 型態的資料呈現。比較運算子包含以下幾種：

- `>`、`<`：大於、小於。

    ```javascript
    const a = 3;
    const b = 2;
    console.log(a > b);  // true
    ```

- `>=`、`<=`：大於等於、小於等於。
    ```javascript
    let a = 3;
    let b = 2;
    console.log(a >= b);  // true
    console.log(a <= b);  // false
    a = a - 1;            // a = 2
    console.log(a >= b);  // true
    console.log(a <= b);  // true
    ```

- `==`、`!=`：等於、不等於，判斷兩個值是否相等（類型不需相等）。
    ```javascript
    let a = 3;
    let b = 3;
    let c = "3";
    console.log(a == b);  // true
    console.log(a != b);  // false
    console.log(a == c);  // true
    a = a - 1;            // a = 2
    console.log(a == b);  // false;
    console.log(a != b);  // true
    ```
    > 在 JavaScript 中，單獨的一個等於 `=` 是賦值的意思，在做比較時要注意不要將 `=` 和 `==` 搞混。 

- `===`、`!==`：嚴格相等，嚴格不相等，判斷兩個值是否相等（類型也需相等）。
    ```javascript
    console.log(1 === 1);    // true
    console.log(3 === "3");  // false
    console.log(3 !== "3");  // true
    ```


## 邏輯運算子
## 算術運算子