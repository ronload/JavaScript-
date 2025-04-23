# Chapter3-Variable.md

## Introduction
在第一章中，我們學到了如何把資料通過 `console.log` 印出，其實除了將資料印出之外，我們還可以將資料利用「變數（Variable）」儲存起來在其他地方重複利用，使用方式如下所示：

```javascript
let a = 100;
let b = 50;
let c = a + b;

console.log(a);  // 100
console.log(b);  // 50
console.log(c);  // 150
```

## 什麼是變數（Variable）？

「變數（Variable）」可以想像成是一個有名子的容器，用來裝一筆資料。當我們需要重複使用一個值，或者這個值在程式執行中會改變時，我們就可以使用變數來儲存它。

在 JavaScript 中，使用變數需要兩個步驟：
1. 宣告（Declaration）：使用 `let` 告訴程式我們要建立一個變數，並且幫它取名。
2. 賦值（Assignment）：使用 `=` 將資料存入變數中。

```javascript
let num;           // 宣告一個名稱為 num 的變數
num = 0;           // 將 0 賦值給 num
console.log(num);  // 0
```

我們也可以在宣告變數的同時進行賦值：

```javascript
let num = 0;
console.log(num);  // 0
```

當我們擁有變數之後，我們就可以開始對變數進行各種操作：

```javascript
let num = 0;       // 宣告 num 並將其賦值為 0
console.log(num);  // 0
num = num + 1;     // 將 num + 1 後重新賦值給 num
console.log(num);  // 1
num = num * 3;     // 將 num * 3 後重新賦值給 num
console.log(num);  // 3
```
同理，我們當然也可以將字串存進變數並對其進行操作

```javascript
let context = "Hello";
console.log(context);         // "Hello"
context = context + "World";
console.log(context);         // "HelloWorld"
```

在這裡，我們就解答了前兩張遺留下來的問題：
> 你可能會好奇，如果我們不加上單引號或雙引號，直接執行 `console.log(HelloWorld);` 會發生什麼事。關於這點，在第三章結束後你會得到解答。

對於這個問題，在擁有了變數的概念後，我們顯而易見的可以得知：
- 當我們執行 `console.log("HelloWorld")` 時， `HelloWorld` 會被視為一個由一些字元組合而成的字串，直接被打印出來。
- 若我們執行 `console.log(HelloWorld)`，則 `HelloWorld` 會被視為一個變數名稱。如果我們有宣告這個變數，例如：

    ```javascript
    let HelloWorld = "Hello";
    console.log(HelloWorld);
    ```
    則這裡就會印出 `HelloWorld` 這個變數的值，也就是 `Hello`。而倘若我們沒有事先宣告這個變數並賦值，則此處我們會找不到這個變數，程式就會出現錯誤並在此處中斷。

## 常數（Constant Variable）

有時候我們希望一個變數在被我們創建之後不再被更改，這時候我們就可以將變數宣告成常數（constant），語法和 `let` 類似，只不過將 `let` 換成 `const`。

```javascript
const PI = 3.14159;
console.log(PI);  // 印出 3.14
PI = 3;           // TypeError: Assignment to constant variable.
```

可以看到，在上述例子中，我們宣告一個名為 `PI` 的變數（代表圓周率），並在宣告同時將其賦值為 3.14159，如果這之後我們再對他做更改，則會出現錯誤，程式終止。

由於常數不能被更改，因此宣告同時就要賦值，無法做到像一般變數一樣先宣告，並且在之後使用時再行賦值。由於常數不能更改的特性，很常被用來儲存一些特別的變數，例如：

```javascript
// facebook 網址
const FACEBOOK_URL = "https://www.facebook.com";
// 圓周率
const PI = 3.1415926;
// 專案版本
const VERSION = "v1.0.0"
```

## var 變數
在最早期的 JavaScript 當中，其實我們是不使用 `let` 來宣告變數的。當我們有宣告變數的需求時，我們使用 `var` 進行宣告，其語法和 `let` 基本一致：

```javascript
// 這行程式碼的作用基本等同 let num = 0;
var num = 0;
```

## 命名規則

當我們在為變數命名時，我們需要遵守一些規則，並不是所有的名稱都可以被拿來命名。

### 保留字

關鍵字特指一些 JavaScript 內建的功能性單詞，它們在 JavaScript 中有特定的用法，這些單詞被稱為「保留字」，不能作為變數名稱使用，例如 `const`、`let` 等。
```javascript
const let = 1;      // SyntaxError: let is disallowed as a lexically bound name
const true = false; // SyntaxError: Unexpected token 'true'
```
可以看到，當我們嘗試使用 `let`、`true` 等在 JavaScript 中有特別用處的單詞對變數命名時，會出現「語法錯誤(Syntax Error)」。

### JavaScript 命名規則

- 變數名只能包含字母、數字、底線 (`_`) 和美元符號(`$`)
- 變數名的第一個字元不能是數字
- 變數名區分大小寫（name 和 Name 是不同的變數）
- 不能使用 JavaScript 的保留字（如 let、const、if、function 等）

``` javascript
// 有效的變數名
let userName = "Tom";
let score1 = 100;
let _privateData = "secret";
let $price = 29.99;

// 無效的變數名
// let 123abc = "invalid";     // 不能以數字開頭
// let user-name = "invalid";  // 不能包含連字符
// let if = "invalid";         // 不能使用保留字
```

### JavaScript 命名規範

在軟體開發中，「看」程式碼的時間通常會比「寫」程式碼的時間長。通常情況下，在軟體開發中有九成以上的時間是在閱讀程式碼，只有一成不到的時間是真的在撰寫程式碼。

因此，為了保證程式碼有良好的可讀性（讓程式碼容易被閱讀），我們有一套「命名規範」。「規範」一詞意味著即便你不遵守，程式可能還是可以跑，只不過當你過了一段時間回頭看自己的程式碼時，你可能會完全看不懂這段程式碼在幹嘛。舉例來說，你當然可以用下面這種方式來命名：

```javascript
let ne = "node@gmail.com";
let pWd = 147258369;
```

這樣命名當然可以，只不過我們很難從變數名稱得知這個變數究竟在幹嘛。而如果我們使用以下命名方式則會好得多：

```javascript
let nodeEmail = "node@gmail.com";
let password = 147258369;
```
因此，將變數的命名方式規範起來是我們在進行開發時必須要做到的。而在 JavaScript 中，變數命名遵循以下規範：

- 使用有意義的名稱：變數名應該清楚地描述它所儲存的資料。
    ```javascript
    // 好的命名
    let studentAge = 18;
    let totalPrice = 299.95;

    // 不好的命名
    let a = 18;
    let tp = 299.95;
    ```
- 使用駝峰式命名法（camelCase）：第一個單字小寫，後面的單字首字母大寫。
    ```javascript
    let firstName = "John";
    let totalItemCount = 25;
    ```
- 有時候我們需要一個在程式執行過程中不會改變的值，此時可以使用 const 關鍵字來宣告常數。
    ```javascript
    const PI = 3.14159;
    const MAX_STUDENTS = 30;

    // 嘗試修改常數會導致錯誤
    // PI = 3.14;  // TypeError: Assignment to constant variable
    ```

## 小結
變數是程式設計的基本組成部分，它們允許我們：

儲存和管理資料
在程式的不同部分重複使用值
處理隨時間變化的資料

透過學習變數，我們邁出了從單純顯示資料到操作和處理資料的重要一步。