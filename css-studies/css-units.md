# Units

## px

### syntax

```css
h1 {
  font-size: 3px;
}
```

## em

it's mean Time (1em = 1 Time)
Default font-size for webpage is 16px

so 1em is = 16px that inherited from webpage

### syntax

```css
h1 {
  font-size: 2em;
}
```

### Example

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        div{
      		font-size: 20px;
      	}
      	div span{
            /* it will be 40 px */
      		font-size: 2em;
      	}
    </style>
</head>

<body>
    <div>
      Hi
      <span> span </span>
    </div>
</body>

</html>
```


## rem

it's mean Root Time (1rem = 1 Root Time)
it'll inherit from root element (HTML)
### syntax

```css
h1 {
  font-size: 2rem;
}
```

### Example

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        html{
            font-size: 50px;
        }
        body{
            font-size: 40px;
        }
        div{
      		font-size: 20px;
      	}
      	div span{
            /* it will be 100 px */
      		font-size: 2rem;
      	}
    </style>
</head>

<body>
    <div>
      Hi
      <span> span </span>
    </div>
</body>

</html>
```


## %

it'll inherit from parent element (HTML)
### syntax

```css
h1 {
  font-size: 100%;
}
```

### Example

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        html{
            font-size: 50px;
        }
        body{
            font-size: 40px;
        }
        div{
      		font-size: 20px;
      	}
      	div span{
            /* it will be 100 px */
      		font-size: 100%;
      	}
    </style>
</head>

<body>
    <div>
      Hi
      <span> span </span>
    </div>
</body>

</html>
```

## vw

1vw = 1% from the width of view port
### syntax

```css
h1 {
  font-size: 5vw;
}
```

### Example

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        /* if the page viewport is 900 the 1% will be 9px so 5vw = 45px */
        div{
      		font-size: 5vw;
      	}
    </style>
</head>

<body>
    <div>
      Hi
      <span> span </span>
    </div>
</body>

</html>
```


## vh

1vh = 1% from the height of view port
### syntax

```css
h1 {
  font-size: 5vh;
}
```

### Example

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        /* if the page viewport is 900 the 1% will be 9px so 5vh = 45px */
        div{
      		font-size: 5vh;
      	}
    </style>
</head>

<body>
    <div>
      Hi
      <span> span </span>
    </div>
</body>

</html>
```
