# 15. HTML Tables

Learn how to create and structure data in HTML tables. Understand table elements and attributes that help you organize tabular data.

## Topics Covered

1. **Basic Table Structure**
   - Learn how to use `<table>`, `<tr>`, `<th>`, and `<td>` to define table rows, headers, and cells.
2. **Table Attributes**
   - Explore attributes like `border`, `cellspacing`, and `width`.
3. **Table Accessibility**
   - Using `scope` and `caption` to improve table accessibility.
4. **Complex Tables**
   - Create tables with multi-row and multi-column headers using `colspan` and `rowspan`.

---

#### **1. Basic Table Structure**

A table in HTML is created using the `<table>` tag. Inside the table, you define rows using `<tr>`, headers with `<th>`, and table data with `<td>`.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Table</title>
</head>
<body>
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>Los Angeles</td>
        </tr>
    </table>
</body>
</html>
```

**Key Notes:**
- **`<table>`**: Defines the table.
- **`<tr>`**: Defines a table row.
- **`<th>`**: Defines a table header.
- **`<td>`**: Defines a table data cell.

#### **2. Table Attributes**

HTML tables can be customized using various attributes to control their appearance and spacing. Some common attributes include `border`, `cellspacing`, and `width`.

- **`border`**: Defines the width of the table border.
- **`cellspacing`**: Defines the space between table cells.
- **`width`**: Specifies the width of the table or individual columns.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table with Attributes</title>
</head>
<body>
    <table border="1" cellspacing="10" width="50%">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>Los Angeles</td>
        </tr>
    </table>
</body>
</html>
```

**Key Notes:**
- The `border` attribute adds a border around the table and cells.
- The `cellspacing` attribute defines the space between each cell.
- The `width` attribute can be used to set the table's width or the width of specific columns.

#### **3. Table Accessibility**

To improve table accessibility for screen readers and assistive technologies, we can use attributes like `scope` and `caption`.

- **`<caption>`**: Adds a title or description to the table, which is helpful for users using screen readers.
- **`scope`**: Defines the scope of headers (`col`, `row`, `colgroup`, or `rowgroup`) to associate them with specific cells.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Table</title>
</head>
<body>
    <table border="1">
        <caption>Employee Information</caption>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>Manager</td>
            <td>$50,000</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>Developer</td>
            <td>$45,000</td>
        </tr>
    </table>
</body>
</html>
```

**Key Notes:**
- The `<caption>` element provides a title for the table.
- The `scope` attribute helps screen readers understand which headers are associated with which cells.

#### **4. Complex Tables**

In complex tables, you may need to span multiple rows or columns. You can do this with the `colspan` and `rowspan` attributes.

- **`colspan`**: Specifies the number of columns a cell should span.
- **`rowspan`**: Specifies the number of rows a cell should span.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complex Table</title>
</head>
<body>
    <table border="1">
        <tr>
            <th rowspan="2">Name</th>
            <th colspan="2">Salary</th>
        </tr>
        <tr>
            <th>Base</th>
            <th>Bonus</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>$40,000</td>
            <td>$10,000</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>$35,000</td>
            <td>$5,000</td>
        </tr>
    </table>
</body>
</html>
```

**Key Notes:**
- The `rowspan` attribute is used in the first column to make the "Name" header span across two rows.
- The `colspan` attribute is used to make the "Salary" header span across two columns.

---

## Example

See [example.html](example.html) for a demonstration of an HTML table.

---

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice working with tables in HTML.

### Key Notes
- Tables help organize and display data in rows and columns.
- Use `<th>` for header cells and `<td>` for regular data cells.
