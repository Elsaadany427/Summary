# CSS Variables (var)

Definition: CSS variables, also known as custom properties, allow you to store values that can be reused throughout your stylesheet.

```css
:root {
  --main-color: #3498db;
  --padding-size: 10px;
}

.element {
  color: var(--main-color);
  padding: var(--padding-size);
}
```

## Example

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
    :root {
        --main-color: #3498db;
        --padding-size: 10px;
        }

        .wrapper div {
            background: var(--main-color);
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>One</div>
    </div>
</body>

</html>
```

## Fallback value

we must type Fallback value within var to avoid the missing in color
it’s a good practice to provide a fallback value. This ensures that if the CSS variable is not defined or supported in certain browsers, a default value will be used. This helps prevent issues like missing colors or other styles.

```css
color: var(--primary-color, blue);
```

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        :root {
            --main-color: #3498db;
            --padding-size: 10px;
        }

        .wrapper div {
            background: var(--main-color, blue);
            padding-top: 10px;
            padding-bottom: 10px;
            background: red;
            float: left;
            width: calc((100% - 70px) / 6);
            margin-left: 10px;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</body>

</html>
<!--
content width : 100%
7 spaces 10 * 7 = 70 px spaces from content
100% - 70px availabe spaces
6 elements width is (100% - 70px) / 6
-->
```

## Another Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      :root {
        --main-color: #3498db;
        --padding-size: 10px;
      }

      .wrapper div {
        background: var(--main-color, blue);
        padding-top: 10px;
        padding-bottom: 10px;
        background: red;
        float: left;
        width: calc((100% - 7%) / 6);
        margin-left: 1%;
      }
    </style>
  </head>

  <body>
    <div class="wrapper">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </body>
</html>
<!-- 
content width : 100%
7 spaces 1% * 7 = 7% spaces from content
100% - 7% availabe spaces
6 elements width is (100% - 7%) / 6
-->
```
