##  3. Type Conversation

## JavaScript Implicit and Explicit Coercion

JavaScript Implicit Coercion refers to JavaScript attempting to coerce an unexpected value type to an expected value type. So you can pass a string where it's expected a number and it will try to convert it to the right type.

- **Explicit Coercion**

  is an obvious attempt from the author to convert a value of one type to another

  ```js
  let a = 100;
  let b = toString(a) => "100"
  ```

  - **Implicit Coercion**

  it's occurs as a less obvious side effect of another operation

  ```js
  let a = 100;
  let b = a + "" => "100"
  ```

### it's works like
```js
// it's works like

number (*, /, -) string = number (*, /, -) Number(string)

3 * "3" => 9
3 + "3" => "33"

true + true => 2
true + false => 1

const foo = () => 3;
3 + foo()=> 6
3 * foo()=> 9

*note 

true == 1 => true
true === 1 =? false
-------------------------

//with array it's works like

number (+, *, /, -) array = number  (+, *, /, -) Number([].toString())

*Notes 

[] => [].toString() => ""
[1, 2, 3] => [1, 2, 3].toString() => "1, 2, 3"


4 * [] => 0
4 + [1] => 41
4 + [1,2,3] => 41,2,3
4 * [1,2,3] => NAN
```

### Non-numeric values in numeric expressions

wherever You pass a string as an operand in numeric expression involving either of these operations (+, /, -, *, %) it's similar to calling the Numver function

Any string containing only numbers will be converted into number equivalent, but a string containing non-numeric chars returns NaN.

```js
Number("1.1") => 1.1
Number("1+1") => NaN
```

### The Case for + Operator

The + Operator unLike mathematical Opertor, Perform Twop function

Mathematical addition

String Concatenation

Cases 

```js
1 + "2" => "12"

1 + 1 + "2" => "22"

1 + "2" + 1 => "121"
```

### Objects

Most JavaScript is Usually Converted into [object Object]

```js
"name" + {} => name[Obect Object]


const baz = () => "Hatem Bassem"

baz() + "!" => "HatemBassem!"


Mathimatical Expressions

const baz = () => "4"

4 + baz() => 44
4 * baz() => 16

const baz = () => "Hatem"

4 + baz() => "4Hatem"
4 * baz() => NaN
```

### Array objects

```js
[1,2,3].toString() => "1,2,3" 

[].toString() => ""

"me" + [1,2,3] => "me1,2,3"
4 + [1,2,3] => "41,2,3
4 * [1,2,3] => NaN
4 * [] => 0

// it's works as 

4 * Number([].toString()) == 4 * Number("") == 4 * 0 => 0
```

### True, False and ""
```js
Number(true) => 1
Number(false) => 0
Number("") => 0
```

### Falsy and Truthy

There are a handful of values that return falsy values

```js
false

0

null

undefined

""

NaN

-0

Everything else is Truth
```

**Notes**

```js
Null (==, ===) Null => True

Undefined (==, ===) Undefined => True

NaN (==, ===) NaN => False

Undefined == Null => True

Undefined === Null => False

isNaN works in that way if(Number(value)) return true else return false
```


