# Chapter2-Type

## Introduction

「資料」在我們的日常生活中隨處可見，但也許你沒有留意過，所謂的「資料」其實可以依照其「行為模式」被劃分成不同種類。單純這樣說有點抽象，以下介紹三種JavaScript內建的基本資料型態：

### 數字（number）
數字就是數字，舉凡 `1`、`100`、`3.14159` 等都是數字，非常好理解。數字的主要特點在於他們可以進行「數學運算」，我們可以用上一章學到的 `console.log()` 將數字印出。<br>

#### 程式碼
```javascript
console.log(3);            // 這行會印出 3
console.log(3.14159);      // 這行會印出 3.14159
console.log(3 + 3.14159);  // 這行會印出 6.14159
```
#### 執行結果
```bash
3
3.14159
6.14159
```
### 字串（string）
字串是用來表示文字的資料型態。在 JavaScript 中，我們可以使用單引號（'）或雙引號（"）來包圍一串文字，將它們標記為字串。

在上一個章節中，我們的代碼 `console.log("Hello World!")` 實際上就是把 `Hello World!` 這段文字用雙引號包起來，讓他被標記成一個字串，然後把這個字串丟給 `console.log()` 進行輸出。

字串和數字一樣也能使用 `+` 運算，不過其所展現出的行為模式不同。

程式碼
```javascript
console.log("Hello");
console.log("World");

// 下面這會將 "Hello" 與 "World" 拼接起來變成 "HelloWorld"
console.log("Hello" + "World");
```
執行結果
```bash
Hello
World
HelloWorld
```

> 你可能會好奇，如果我們不加上單引號或雙引號，直接執行 `console.log(HelloWorld);` 會發生什麼事。關於這點，在第三章結束後你會得到解答。

要注意一點，**任何被引號包圍的資料都會變成字串型態**，如下所示：

**程式碼**
```javascript
console.log(3 + 3);     // 3 + 3，印出數字 6
console.log("3" + "3"); // "3" + "3"，印出字串 "33"
```

**執行結果**
```bash
6
33
```

## 布林值（boolean）
布林值是最簡單的資料型態，只包含了 `true` 和 `false`。布林值只有一個作用，那就是用來表示事件的真假。

**程式碼**
```javascript
console.log(true);
console.log(false);
```
**執行結果**
```bash
true
false
```

本章節只是暫時解釋JavaScript中三種資料型態的基礎差異，接下來的三個小節會著重描述每種資料型態的詳細功能。