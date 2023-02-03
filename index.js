"use strict"
class Book {
    constructor(title, year, author) {
        this.title = title;
        this.year = year;
        this.author = author
    }
}

const books = [
    new Book("Red Rising", 2017, "Pierce Brown"),
    new Book("Golden Son", 2018, "Pierce Brown"),
    new Book("Morning Star", 2019, "Pierce Brown")
]

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    const submitButton = document.getElementById("submit-button")
    const tableData = document.getElementById("table-data")
    const resume = document.getElementById("resume")
    populateData(tableData)
    resume.innerHTML = `You have ${books.length} books`

    const titleElement = document.getElementById("input-title")
    const yearElement = document.getElementById("input-year")
    const authorElement = document.getElementById("input-author")
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const title = titleElement.value;
        const year = +(yearElement.value);
        const author = authorElement.value;
        
        const {isValid, message} = inputValidation(title, year, author)

        if(isValid) {
            const newBook = new Book(title, year, author)
            
            books.push(newBook)
            
            // Reset table data and populate
    
            tableData.innerHTML = ""
            populateData(tableData)
            resume.innerHTML = `You have ${books.length} books`
            
        } else {
            alert(message)
        }
        
    })
});

function inputValidation(title, year, author) {
    let isValid = true;
    let message = "";

    if(year < 1900) {
        isValid = false;
        message = "Year must be greater than 1900"
    }

    if(!title || title.length === 0) {
        isValid = false;
        message = "Title cannot be empty"
    }

    if (!author || author.length === 0) {
        isValid = false;
        message = "author cannot be empty"
    }

    return {
        isValid,
        message
    }
}

function populateData(tableData) {
    for (let i = 0; i < books.length; i++) {
        let row = tableData.insertRow(i);

        row.insertCell(0).innerHTML = `${i+1}`
        row.insertCell(1).innerHTML = `${books[i].title}`
        row.insertCell(2).innerHTML = `${books[i].year}`
        row.insertCell(3).innerHTML = `${books[i].author}`
    }
}


// PROMISE SYNTAX ES6

// ASYNC AWAIT SYNTAX 2017 (ES8)
