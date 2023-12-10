let book={
    title:"The 3 Mistakes of My Life",
    author:"Chetan Bhagat",
    year:2008,
    isAvailable:"YES"
};
console.log("The title of the book : "+book.title+"\nAuthor : "+book.author+"\nOriginally published : "+book.year+"\nIs the book available ?\nAns : "+book.isAvailable+"\n");
console.log("The title of the book : "+book['title']+"\nAuthor : "+book['author']+"\nOriginally published : "+book['year']+"\nIs the book available ?\nAns : "+book['isAvailable']);
