"use strict"
// class Book
class Book {
    constructor(title, year, author) {
        this.title = title;
        this.year = year;
        this.author = author
    }
}

// Array books (database)
const books = [
    new Book("Red Rising", 2017, "Pierce Brown"),
    new Book("Golden Son", 2018, "Pierce Brown"),
    new Book("Morning Star", 2019, "Pierce Brown")
]

let totalAge = 0;
let averageAge = 0;

// window addEventListener, load page dlu. Kalo sudah load, trigger codingan dibawah

// function addEventListener(method, callback) {

// }
//addEventListener("method", callbackTrigger)
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    // akses DOM element
    const submitButton = document.getElementById("submit-button")
    const tableData = document.getElementById("table-data")
    const resume = document.getElementById("resume")

    // Isi data di table
    populateData(tableData)
    // update resume
    resume.innerHTML = `You have ${books.length} books`

    // akses DOM element
    // All form inputs
    const titleElement = document.getElementById("input-title")
    const yearElement = document.getElementById("input-year")
    const authorElement = document.getElementById("input-author")

    // Event handling button, kalo diclick mentrigger codingan dibawah
    submitButton.addEventListener("click", (e) => {
        // Mencegah agar page tidak refresh
        e.preventDefault();

        // Ambil value dari DOM element (input form)
        const title = titleElement.value;
        const year = +(yearElement.value);
        const author = authorElement.value;
        
        // Validasi Data
        const {isValid, message} = inputValidation(title, year, author)

        // Kondisi kalo valid
        if(isValid) {

            // Bikin object baru, dengan data yang telah diinput
            const newBook = new Book(title, year, author)
            
            // Push ke dalam array (database)
            books.push(newBook)
             
            // Reset table menjadi kosong
            tableData.innerHTML = ""
            
            // Populate table kembali
            populateData(tableData)
            
            // Update resume

            // total
            // jumlah student

            // avgAge = totalUmur / jumlah student

            resume.innerHTML = `You have ${books.length} books`
            
        } 
        // Kondisi kalo gagal validasi
        else {
            // Akan muncul popup
            alert(message)
        }
        
    })
});

// Validasi Data
function inputValidation(title, year, author) {
    // Jika isValid === true, maka data valid
    // message akan terupdate, ketika gagal validasi
    let isValid = true;
    let message = "";

    // Cek title
    if(!title || title.length === 0) {
        isValid = false;
        message = "Title cannot be empty"
    }
    
    // Cek year
    if(year < 1900) {
        isValid = false;
        message = "Year must be greater than 1900"
    }

    // Cek author
    if (!author || author.length === 0) {
        isValid = false;
        message = "author cannot be empty"
    }

    // Function akan mereturn isValid dan message
    return {
        isValid,
        message
    }
}

// Masukkan data (Array) kedalam table html
function populateData(tableData) {
    // Looping array books
    for (let i = 0; i < books.length; i++) {
        // Insert baris
        let row = tableData.insertRow(i);

        // Insert data kedalam cells

        // Insert nomor 
        row.insertCell(0).innerHTML = `${i+1}`
        // Insert title
        row.insertCell(1).innerHTML = `${books[i].title}`
        // Insert year
        row.insertCell(2).innerHTML = `${books[i].year}`
        // Insert author
        row.insertCell(3).innerHTML = `${books[i].author}`
    }
}


// PROMISE SYNTAX ES6

// ASYNC AWAIT SYNTAX 2017 
