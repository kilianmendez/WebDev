let booksRead = document.getElementById("books-read")
let booksReadCount = 0;
let booksUnread = document.getElementById("books-unread")
let booksUnreadCount = 0;
let totalBooks = document.getElementById("total-books")
let totalBooksCount = 0;

let form = document.querySelector("form")

let deleteAllBtn = document.getElementById("delete-btn")
let bookList = document.getElementById("books-section")

let ul = document.getElementById("books-section")

let myBooks = [];

let idNum = 0;
let bookID = `b${idNum}`;

function Book(title, author, pages, status, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
}

function addBook(title, author, pages, status, id){

    let statusValue;

    if (status == "on"){
        statusValue = "yes"
    }   else statusValue = "No"

    let book = new Book(title, author, pages, statusValue, id)
    myBooks.push(book);
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )

    myBooks.pop()

    addBook(data["book-title"], data["book-author"], data["book-pages"], data["read"], bookID)
    console.log(myBooks)   
    
    let li = document.createElement("li")
    li.classList.add("book")
    li.innerHTML = `<div id="${bookID}">
        <p>${myBooks[idNum].title}</p>
        <p>${myBooks[idNum].author}</p>
        <p>${myBooks[idNum].pages}</p>
        <p>${myBooks[idNum].status}</p>
    </div>`
    ul.appendChild(li)
    let div = document.getElementById(`${bookID}`)
    div.appendChild(addDeleteBtn())
    
    form.reset()

    totalBooksCount++;
    totalBooks.innerHTML = totalBooksCount;

    idNum++;
    bookID = `b${idNum}`;
})

/* function updateList(){
    myBooks.forEach((book)=>{
        let li = document.createElement("li")
        li.classList.add("book")
        li.innerHTML = `<div id="${book.id}">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.status}</p>
    </div>`
    ul.appendChild(li)
    let div = document.getElementById(`${book.id}`)
    div.appendChild(addDeleteBtn())
    })
} */


function addDeleteBtn(){
    const deleteSingleBtn = document.createElement("button")
    deleteSingleBtn.innerText = "🗑️"
    deleteSingleBtn.className = "delete-single-btn"

    deleteSingleBtn.addEventListener("click", e => {
        const item = e.target.parentElement.parentElement;

        let newArray = myBooks.filter(function(book){
            return book.id !== e.target.parentElement.id
        }) 
        
        myBooks = newArray;

        console.log(e.target.parentElement.id)
        ul.removeChild(item)

        totalBooksCount--;
        totalBooks.innerHTML = totalBooksCount;

        console.log(myBooks)
    })
    return deleteSingleBtn
}
