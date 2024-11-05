# Flexbox

## Flexbox properties

### display

This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

```css
.container {
  display: flex; /* or inline-flex */
}
```

### flex-direction

Thus defining the direction flex items are placed in the flex container.
![](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- row (default): left to right in ltr; right to left in rtl
- row-reverse: right to left in ltr; left to right in rtl
- column: same as row but top to bottom
- column-reverse: same as row-reverse but bottom to top

### flex-wrap

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

![](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- nowrap (default): all flex items will be on one line
- wrap: flex items will wrap onto multiple lines, from top to bottom.
- wrap-reverse: flex items will wrap onto multiple lines from bottom to top.

### flex-flow

This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap.

```css
.container {
  flex-flow: column wrap;
}
```

### justify-content

![](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)
This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly |...;
}
```

- **flex-start (default)**: items are packed toward the start of the flex-direction.
- **flex-end:** items are packed toward the end of the flex-direction.
  **center**: items are centered along the line
- **space-between:** items are evenly distributed in the line; first item is on the start line, last item on the end line
- **space-around:** items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- **space-evenly:** items are distributed so that the spacing between any two items (and the space to the edges) is equal.

### align-items

![](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)
This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline +...;
}
```

- stretch (default): stretch to fill the container (still respect min-width/max-width)

- flex-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.

- flex-end : items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.
- center: items are centered in the cross-axis
- baseline: items are aligned such as their baselines align

### align-content

![](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)
This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around |
    space-evenly;
}
```

### gap, row-gap, column-gap

![](https://css-tricks.com/wp-content/uploads/2021/09/gap-1.svg)
controls the space between flex items. It applies that spacing only between items not on the outer edges.

```css
.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
```

### flex-grow

![](https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg)

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space as either one of the others (or it will try, at least).

```css
.item {
  flex-grow: 2; /* default 0 */
}
```
