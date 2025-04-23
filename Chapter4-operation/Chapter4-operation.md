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

- `===`、`!==`：嚴格相等、嚴格不相等，判斷兩個值是否相等（類型也需相等）。
    ```javascript
    console.log(1 === 1);    // true
    console.log(3 === "3");  // false
    console.log(3 !== "3");  // true
    ```

## 邏輯運算子（Logical Operator）

邏輯運算子用來計算兩個布林值的結果，比較結果一樣以 `boolean` 的型態呈現。邏輯運算子有**且（AND）、或（OR）、非（NOT）** 三種。

### AND `&&`
AND 運算只有當兩個條件都為 `true` 時才會得到 `true`，其餘的情況都會得到 `false`。

```javascript
console.log(true && true);              // true
console.log(true && false);             // false
console.log(false && true);             // false
console.log(false && false);            // false
console.log( ( 1 == 1 ) && (2 == 2) );  // true
```

### OR `||`
OR 運算只有當兩個條件都為 `false` 時才會得到 `false`，其餘的情況都會得到 `true`。

```javascript
console.log(true || true);           // true
console.log(true || false);          // false
console.log(false || true);          // false
console.log(false || false);         // false
console.log( (1 == 1) || (1 != 1) )  // true
```

### NOT `!`
NOT 運算會將邏輯運算結果取反，`true` 會被轉換成 `false`，`false` 則會被轉換成 `true`。

```javascript
console.log(!true)   // false
console.log(!false)  // true
```

### 使用情境

單純依靠上面的解釋或許還是有些抽象，我們可以藉助實際情境來幫助理解：

- 只有「年滿 18 歲」且「持有駕照」才能開車。

    ```javascript
    let age = 18;
    let hasDriveLicense = true;
    let canDrive = (age >= 18) && hasDriveLicense;

    console.log(canDrive)  // true
    ```

- 只有職業是「警察」或「軍人」的人才能持槍。

    ```javascript
    let career = "police";

    let canUseGun = (career == "police") || (career == "soldier");  // true
    ```

透過邏輯運算子，我們可以清晰的表達各種條件和約束。

## 算術運算子