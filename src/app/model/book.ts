
export class Book {
    [x: string]: any;
    id: string;
    title: string;
    author: string;
    publisher: string;
    imageUrl: string;
    pageNumber: number;
    genre: string;
    description: string;
   
    constructor(id: string, title: string, author: string, publisher: string, imageUrl: string, pageNumber: number, genre: string, description: string){
        this.id = id;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.imageUrl = imageUrl;
        this.pageNumber = pageNumber;
        this.genre = genre;
        this.description = description;
    }
}
