const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);

const bookSeed =
{
    authors: ["J.K. Rowling"],
    description: "t is a book were Lord Voldemort comes back to full power how will Harry defeat him read and find out awesome book!!!!!!!",
    image: "https://books.google.com/books/content?id=KKFTfEQ8bRAC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70fRy7XVNgwlMVkYjycH-FFz1IZIDYjXbE9a2_RWzUBUrVtsQCCbPtw4FGLDAGZUmQvVu2MpCKWQ0pmAaPz1rM6nWikdROXPDVLvKn7Do0tGPdXhyI8QuJbxJcnp_gVAPAHbKEY",
    link: "https://books.google.com/books?id=KKFTfEQ8bRAC&dq=harry%20potter&source=gbs_similarbooks",
    title: "Harry Potter",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });