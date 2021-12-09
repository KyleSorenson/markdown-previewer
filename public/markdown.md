# React Markdown Previewer

<span style="font-size: 12px; display: block; transform: translateY(-2px)">[Project 2](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer) from [Free Code Camp's Front End Development Libraries Curriculum](https://www.freecodecamp.org/learn/front-end-development-libraries)</span>

---

## Features

- Typing into the left panel will update the right panel
- Panel widths are adjustable (click and drag the gutter in the center)

---

## Sample Markdown

### Typography

- **Bold** text is typed between a set of two asterisks
- *Italic* text is typed between a set of one asterisk
- ~~Strike-through~~ text is typed between tildas

### Lists

- Unordered lists are typed with a hyphen at the start of the line
  - They can be indented

1. Ordered lists
2. Are typed with a number
3. At the start of the line.

### Links

- Links are typed within brackets, followed by a url parenthetical:
  - [My Portfolio](https://kylesorenson.me)

### Code Blocks

- Inline code is typed between 2 backticks: `<code>Sample Inline Code</code>`
- Multi-line code is typed between lines of three backticks:

```
const helloWorld = () => {
 console.log('Hello World');
}
```

### Block Quotes

- Block quotes are typed with a right carrot at the start of the line:

> "To be or not to be. That is the question."

### Images

- Images are typed similarly to links, but with an exclamation point at the beginning. Text within the brackets will become the alt text for the image.

![React Logo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)