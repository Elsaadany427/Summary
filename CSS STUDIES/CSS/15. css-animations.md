### **CSS Animations**

CSS animations allow you to create smooth transitions between different styles over a set duration. You can animate almost any CSS property, such as colors, sizes, positions, and more.

### **Key Concepts**

1. **@keyframes**:

   - This is where the animation's behavior is defined, including what styles should be applied at different stages of the animation.
   - Example:
     ```css
     @keyframes slide {
       0% {
         transform: translateX(0);
       }
       100% {
         transform: translateX(100px);
       }
     }
     ```

2. **animation-name**:

   - Specifies the name of the `@keyframes` animation that should be applied.
   - Example:
     ```css
     animation-name: slide;
     ```

3. **animation-duration**:

   - Defines how long the animation should take to complete one cycle.
   - Example:
     ```css
     animation-duration: 2s;
     ```

4. **animation-timing-function**:

   - Controls the speed of the animation over its duration.
   - Common values:
     - `linear`: constant speed.
     - `ease`: starts slow, speeds up, then slows down.
     - `ease-in`: starts slow and speeds up.
     - `ease-out`: starts fast and slows down.
     - `ease-in-out`: starts and ends slow, speeds up in the middle.
   - Example:
     ```css
     animation-timing-function: ease-in-out;
     ```

5. **animation-delay**:

   - Delays the start of the animation by a specified amount of time.
   - Example:
     ```css
     animation-delay: 1s;
     ```

6. **animation-iteration-count**:

   - Specifies how many times the animation should repeat.
   - Example:
     ```css
     animation-iteration-count: infinite;
     ```

7. **animation-direction**:

   - Defines whether the animation should play in reverse on alternate cycles.
   - Values:
     - `normal`: plays forward each cycle.
     - `reverse`: plays backward.
     - `alternate`: plays forward first, then reverses on the next iteration.
     - `alternate-reverse`: plays backward first, then forward.
   - Example:
     ```css
     animation-direction: alternate;
     ```

8. **animation-fill-mode**:
   - Specifies how a CSS animation applies styles to its target before and after its execution.
   - Values:
     - `none`: the animation will not affect the element before or after it runs.
     - `forwards`: the element will retain the styles set by the last keyframe after the animation ends.
     - `backwards`: the element will apply the styles from the first keyframe during the delay period.
     - `both`: the element will follow both `forwards` and `backwards` rules.
   - Example:
     ```css
     animation-fill-mode: forwards;
     ```

### **Complete Example**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Animation Example</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: #3498db;
        margin: 50px auto;
        animation-name: slide;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-delay: 1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-fill-mode: forwards;
      }

      @keyframes slide {
        0% {
          transform: translateX(0);
          background-color: #3498db;
        }
        100% {
          transform: translateX(200px);
          background-color: #e74c3c;
        }
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```
