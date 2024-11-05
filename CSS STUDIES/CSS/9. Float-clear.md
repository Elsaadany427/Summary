# What are CSS float and clear?

CSS float and clear are positioning properties for aligning HTML elements. The CSS float property determines where an element should float. It moves an element to the right or left of its container, making it possible for other elements to wrap around it.

## Why use CSS float and clear?

- To prevent overlapping by clearing the floating property
- To position and format the content of web pages

## How to use float

When you float an element on a web page, it remains part of the flow, allowing the adjacent elements to flow around it. The floated element will move to the right or left until it touches the edge of its containing box or another floated element. You can't float an element to a container's center, top, or bottom.

To use float, you need a CSS selector and to define the float property within the brackets.

The structure is:

```css
element {
  float: value;
}
```

## Types of float values

Float has the following values:

Left: This property value allows an element to float to the container's left. It moves an element to the left of the parent element and then allows other elements to wrap around it.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        border: solid thin blue;
        padding: 5px;
        background-color: orange;
      }
      .image {
        float: left;
        height: 170px;
        width: 170px;
        background-color: red;
        margin-right: 11px;
      }
    </style>
  </head>
  <body>
    <h1>float left</h1>
    <div class="container">
      <div class="image"></div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
        Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
        sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
        sed nunc venenatis imperdiet sengue eros non fermentum. Sed dapibus
        pulvinar nibh is quis diam velitipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sengue eros non
        fermentum. Sed dapibus pulvinar nibh is quis diam velit.
      </p>
    </div>
  </body>
</html>
```

Right: This value allows an element to float to the container's right. It moves an element to the right of the parent element and lets other elements wrap around it.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        border: solid thin blue;
        padding: 5px;
        background-color: orange;
      }
      .image {
        float: right;
        height: 170px;
        width: 170px;
        background-color: red;
        margin-right: 11px;
      }
    </style>
  </head>
  <body>
    <h1>The float Right Property</h1>
    <div class="container">
      <div class="image"></div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
        Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
        sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. sed nunc
        venenatis imperdiet sengue eros non fermentum. Sed dapibus pulvinar nibh
        is quis diam velitipsum dolor sit amet, consect eturaipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitaescelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sengue eros non fermentum. Sed
        dapibus pulvinar nibh is quis diam velit.
      </p>
    </div>
  </body>
</html>
```

**None**: This property is the default value and does not float any element.

**Inherit**: This property allows an element to inherit the float value of the parent element.

## How the clear property works

**Problem**
When elements inside a parent container are floated (using float: left; or float: right;), they are taken out of the normal document flow. This means that the parent container might not recognize the floated elements as its children in terms of height. As a result:

- **Parent Collapse**: If the parent container only contains floated elements, its height might collapse to zero, because the floated elements are not considered in the calculation of the container's height. This is known as a "collapsing" parent.

- **Abnormal Layout**: When the parent's height collapses, other elements around or inside it may shift unexpectedly, leading to a layout that looks broken or abnormal.

We use the CSS clear property when we want the element after the floated element to be below instead of right or left. To clear floats, we need to match the clear to the float. Any side an element floats to is the side you will clear. Therefore, the floated element will always float on the web page, but the element you clear will emerge below it.

## Types of clear values

**None**: This is the default value of clear — it enables elements to float on both sides of a cleared element.

**Right**: This value prevents elements from floating on the right side of a cleared element. So, it does not allow wrapping around the right floating element.
**For example:**

```css
.image {
  float: right;
  height: 170px;
  width: 170px;
  background-color: blue;
  margin-right: 11px;
}
.text {
  clear: right;
}
```

**Left**: This value prevents elements from floating on the left side of a cleared element; it doesn’t allow wrapping around the left of a floating element. Here is an example of the left clear value.

```css
.image {
  float: left;
  height: 170px;
  width: 170px;
  background-color: blue;
  margin-right: 11px;
}
.text {
  clear: left;
}
```

Both: This clear property value prevents elements from floating on either side of a cleared element. It clears all floats in an element and stops any element from wrapping around an adjacent floating element.
**For example:**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        border: solid thin blue;
        padding: 5px;
        background-color: orange;
      }
      .image1 {
        float: right;
        height: 170px;
        width: 170px;
        background-color: blue;
        margin-right: 11px;
      }
      .image2 {
        float: left;
        height: 170px;
        width: 170px;
        background-color: green;
        margin-right: 11px;
      }
      .text {
        clear: both;
      }
    </style>
  </head>
  <body>
    <h1>Clear both</h1>
    <div class="container">
      <div class="image1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit venenatis
        imperdiet sengue eros non fermentum.
      </div>
      <div class="image2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit venenatis
        imperdiet sengue eros non fermentum.
      </div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
        Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
        sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. sed nunc
        venenatis imperdiet sengue eros non fermentum. Sed dapibus pulvinar nibh
        is quis diam velitipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sengue eros non fermentum. Sed
        dapibus pulvinar nibh is quis diam velit Fusce luctus vestibulum augue
        ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
        odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        sed nunc venenatis imperdiet sengue eros non fermentum. Sed dapibus
        pulvinar nibh is quis diam velitipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sengue eros non
        fermentum. Sed dapibus pulvinar nibh is qui.
      </p>
    </div>
  </body>
</html>
```
**Resourse**

- [All About Floats]('https://css-tricks.com/all-about-floats/')
