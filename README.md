# Odin Library classbranch

by Jane Bui, 2021

"Odin Library" is an assigment from [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/library) which focuses on Javascript Object Constructors.

It is a list of books which you can mark as "read" or "not read." You can also add new books or delete current books on the list.

This classbranch is a branch of the main project, which refactors the plain constructor to a class constructor.


## Class Constructor

```python
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    readToggle() {
        this.read = !this.read;
        console.log("Did you really read it? " + this.read);
    }
}
```
