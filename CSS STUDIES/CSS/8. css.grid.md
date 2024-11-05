# What is a grid?

A grid is a set of intersecting horizontal and vertical lines defining columns and rows.
![](https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-gap.svg)

## Grid container

We create a grid container by declaring display: grid or display: inline-grid on an element. As soon as we do this, all direct children of that element become grid items.

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
            display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
        }

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
</body>

</html>
```

## Grid tracks

### grid-template-columns

I can add to our earlier example by adding the grid-template-columns property, then defining the size of the column tracks.

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
            display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
            grid-template-columns: 200px 200px 200px;
        }

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
</body>

</html>
```

### **we can make it with [px, %, auto, fr, repeat, Mix]**

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
            display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
            /* with pxs */
            /* grid-template-columns: 200px 200px 200px; */
            /* with % */
            /* grid-template-columns: 25% 25% 50%; */
            /* with auto */
            /* grid-template-columns: auto auto auto; */
            /* with fr */
            /* grid-template-columns: 1fr 1fr 2fr; */
            /* with repeat */
            /* grid-template-columns: repeat(3, 100px); */
            /* with Mix */
            /* grid-template-columns: 100px 100px auto repeat(2, 1fr); */
            /* grid-template-columns: auto auto 1fr; */
        }

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
</body>

</html>
```

### grid-template-rows

I can add to our earlier example by adding the grid-template-rows property, then defining the size of the rows tracks.

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
            display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
            grid-template-columns: 200px 200px 200px;
            grid-template-rows: 200px 200px 200px;
        }

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
</body>

</html>
```

### **we can make it with [px, %, auto, fr, repeat, Mix]**

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
            display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
            /* with pxs */
            /* grid-template-columns: 200px 200px 200px;
            grid-template-rows: 200px 200px */
            /* with % */
            /* grid-template-columns: 25% 25% 50%;
            grid-template-rows: 50% 50%;   */
            /* with auto */
            /* grid-template-columns: auto auto auto;
            grid-template-rows: auto auto ; */
            /* with fr */
            /* grid-template-columns: 1fr 1fr 2fr;
            grid-template-rows: 1fr 1fr; */
            /* with repeat */
            /* grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(2, 100px); */
            /* with Mix */
            /* grid-template-columns: 100px 100px repeat(2, 1fr);
            grid-template-rows: 100px repeat(1, 1fr); */
            /* grid-template-columns: auto auto 1fr;
            grid-template-rows: auto auto; */
        }

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
</body>

</html>
```

### Gutters

Gutters or alleys between grid cells can be created using the column-gap and row-gap properties, or the shorthand gap.

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
            display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
            grid-template-columns: 200px 200px 200px;
            grid-template-rows: 200px 200px 200px;
            row-gap: 20px;
            column-gap: 1%;
            /* or shorthand */
            /* gap: 10px; */
        }

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
</body>

</html>
```

### Justify Content And Align Content

#### Justify Content

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
            display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
            grid-template-columns: 200px 200px 200px;
            grid-template-rows: 200px 200px 200px;
            row-gap: 20px;
            column-gap: 1%;
            /* or shorthand */
            /* gap: 10px; */
            justify-content: flex-end;
            /* justify-content: flex-start; */
            /* justify-content: space-between; */
            align-content: flex-start;
        }

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
</body>

</html>
```

#### Another example with auto

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
             display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
            grid-template-columns: auto auto auto;
            grid-template-rows: auto auto;
            row-gap: 20px;
            column-gap: 1%;
            /* or shorthand */
            /* gap: 10px; */
            justify-content: flex-start;
            align-content: flex-start;
     	}

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
    </div>
</body>

</html>
```

### Read about grid-template-areas

### Grid Column

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
            display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
            grid-template-columns: repeat(6, 1fr);
            gap: 10px 10px;
            /* Inspect and add this to the element */
     	}
        .first{
            /* take 3 columns from 1 to 3 */
            grid-column: 1 / 4
            /* take 3 columns from 1 to 4 */
            grid-column: 1 / 5
            /* take 3 columns from 1 to 3 */
            grid-column: span 3;
            /* take 3 columns from 2 to 4 */
            grid-column: 2 / span 3;

        }

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="first">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
       	<div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
       	<div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</body>

</html>
```


### Grid Row

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        .wrapper {
            display: grid;
            background-color: #eee;
            width: 800px;
            height: 500px;
            margin: 20px auto;
            grid-template-columns: repeat(6, 1fr);
            gap: 10px 10px;
            /* Inspect and add this to the element */
     	}
        .first{
            /* take 2 rows from 1 to 3 */
            grid-row: 1 / 3
            /* take 3 rows from 1 to 3 */
            grid-row: span 3;
        }

        .wrapper div {
            background: red;
            padding: 20px;
      		border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="first">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
       	<div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
       	<div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</body>

</html>
```
