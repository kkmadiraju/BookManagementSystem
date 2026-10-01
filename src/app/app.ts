import { Component, signal } from '@angular/core';
import { Book } from './book/book';


@Component({
   selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Book],
})
 export class App {
  protected readonly title = 'book-management-system';
  protected readonly name = 'kiran kumar madirajus';
}
