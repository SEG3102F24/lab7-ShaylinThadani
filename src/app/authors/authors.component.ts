import { Component } from '@angular/core';
import { AuthorService } from '../service/author.service';
import { Author } from '../model/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  authorId: number = 0;
  author: Author | null = null;
  errorMessage: string | null = null;

  constructor(private authorService: AuthorService) {}

  getAuthor() {
    this.authorService.getAuthorById(this.authorId).subscribe({
      next: (data: Author) => {
        this.author = data;
        this.errorMessage = null;
      },
      error: () => {
        this.author = null;
        this.errorMessage = 'Author not found';
      }
    });
  }
}