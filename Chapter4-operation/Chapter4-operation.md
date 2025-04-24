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
    // 當 年齡 >= 18 且 持有駕照為真
    let canDrive = (age >= 18) && hasDriveLicense;

    console.log(canDrive)  // true
    ```

- 只有職業是「警察」或「軍人」的人才能持槍。

    ```javascript
    let career = "police";

    // 當 職業等於警察 或 職業等於軍人
    let canUseGun = (career == "police") || (career == "soldier");  // true
    ```

透過邏輯運算子，我們可以清晰的表達各種條件和約束。

## 算術運算子（Arithmetic Operator）
算術運算子是用來執行數值之間的基本數學運算，計算結果以 `number` 表示。JavaScript 支援以下算術運算子：

### 基本運算

- `+`：加法。

    ```javascript
    let sum = 5 + 3;
    console.log(sum)  // 8
    ```

- `-`：減法。

    ```javascript
    let diffrence = 5 - 3;
    console.log(diffrence)  // 2
    ```

- `*`：乘法

    ```javascript
    let product = 5 * 3;
    console.log(product)  // 15
    ```

- `/`：除法。

    ```javascript
    let quotient = 20 / 5;
    console.log(quotient)  // 4
    ```

- `%`：取餘數（mod運算）。

    ```javascript
    let remainder = 5 % 3;
    console.log(remainder)  // 2
    ```

- `**`：次方。

    ```javascript
    let power = 5 ** 3;
    console.log(power)  // 125
    ```

### 遞增/遞減運算

- `++`：遞增，將數值加 1
    ```javascript
    let count = 5;
    count++;             // 等同於 count = count + 1
    console.log(count);  // 6
    ```

- `--`：遞減，將數值減 1
    ```javascript
    let count = 5;
    count--;  // 等同於 count = count - 1
    console.log(count);  // 4
    ```
增和遞減運算子可以放在變數前（前綴）或後（後綴），位置不同會影響運算結果：

```javascript
let a = 5;
let b = 5;

let resultA = a++;  // 後綴：先賦值再加 1
let resultB = ++b;  // 前綴：先加 1 再賦值

console.log(resultA);  // 5
console.log(a);        // 6
console.log(resultB);  // 6
console.log(b);        // 6
```

### 複合賦值運算

複合賦值運算子是算術運算和賦值的組合，可以簡化代碼：

- `+=`：加等於

    ```javascript
    let x = 10;
    x += 5;  // 等同於 x = x + 5
    console.log(x);  // 15
    ```
- `-=`：減等於

    ```javascript
    let x = 10;
    x -= 3;  // 等同於 x = x - 3
    console.log(x);  // 7
    ```
- `*=`：乘等於

    ```javascript
    let x = 5;
    x *= 2;  // 等同於 x = x * 2
    console.log(x);  // 10
    ```
- `/=`：除等於

    ```javascript
    let x = 15;
    x /= 3;  // 等同於 x = x / 3
    console.log(x);  // 5
        ```
- `%=`：餘等於

    ```javascript
    let x = 10;
    x %= 3;  // 等同於 x = x % 3
    console.log(x);  // 1
    ```
- `**=`：次方等於

    ```javascript
    let x = 2;
    x **= 3;  // 等同於 x = x ** 3
    console.log(x);  // 8
    ```

## 運算子優先順序
當一個表達式中包含多個運算子時，運算子的優先順序決定了運算的執行順序。以下是一些常見的優先順序（從高到低）：

- 括號 `()`
- 遞增 `++`、遞減 `--`（前綴）、一元運算子（`+`、`-`、`!`）
- 次方 `**`
- 乘法 `*`、除法 `/`、餘數 `%`
- 加法 `+`、減法 `-`
- 比較運算子（`<`、`>`、`<=`、`>=`）
- 相等運算子（`==`、`!=`、`===`、`!==`）
- 邏輯 AND `&&`
- 邏輯 OR `||`
- 三元運算子 ? :  (這個之後會教，先知道就好)
- 賦值運算子（`=`、`+=`、`-=`、...）

範例：
```javascript
let result = 2 + 3 * 4;
console.log(result);  // 14，而不是 20，因為乘法優先級高於加法

let result2 = (2 + 3) * 4;
console.log(result2);  // 20，使用括號改變運算順序
```

了解運算子優先順序可以幫助我們寫出更準確的程式碼，並避免因優先順序不明確導致的錯誤。在複雜的表達式中，建議使用括號來明確優先順序，這樣代碼也更易讀。