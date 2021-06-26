# Odin Library

by Jane Bui, 2021

"Odin Library" is an assigment from [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/library) which focuses on Javascript Object Constructors.

It is a list of books which you can mark as "read" or "not read." You can also add new books or delete current books on the list.


## Constructor

```python
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readToggle = function() {
    this.read = !this.read;
}
```

## Live Demo
[View my Odin Library](https://janebui.github.io/odin-library/)
