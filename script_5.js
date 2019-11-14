const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("********** Tous les livres ont-ils été empruntés au moins 1 fois ?")
  books.forEach(book => {
console.log(book.rented >= 1)
})

console.log("********** Quel est le livre le + emprunté ?")
  let maxRentals = books.reduce((book1, book2) => 
    (book1.rented > book2.rented) ? book1 : book2).rented; 
  let mostRentedBooks = books.filter(book => book.rented === maxRentals);
   mostRentedBooks.forEach(book => {
console.log(book.title)
        });
    
console.log("********** Quel est le livre le - emprunté ?")
  let minRentals = books.reduce((book1, book2) => 
    (book1.rented < book2.rented) ? book1 : book2).rented; 
  let lessRentedBooks = books.filter(book => book.rented === minRentals);
    lessRentedBooks.forEach(book => {
console.log(book.title)
        });

console.log("********** Quel est le livre avec l'ID 873495 ?")
function idBook(number) {
  return number.id === 873495;
}
console.log(books.find(idBook));


console.log("********** Supprimons le livre avec l'ID 133712: ")
idToFind = 133712
let bookToFind = books.filter(book => book.id === idToFind);
let bookToFindTitle = bookToFind.forEach(book => 
{console.log("L'entrée à supprimer est : ID => " + idToFind + " => titre : " + book.title)});

const bookIndex = books.findIndex(book => book.id === idToFind);
console.log("Suppression ==> Index : " + bookIndex + " ; Titre : " + books[bookIndex].title);

books.splice(bookIndex, 1)


console.log("********** Trions les livres par ordre alphabétique après suppression de l'ID 133712 : ")
console.log(books.sort(function(a,b){
    return a.title.localeCompare(b.title);
}));

    

