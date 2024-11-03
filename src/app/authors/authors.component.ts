// imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { AuthorService } from '../service/author.service';
import { Author } from '../model/author';
//component
@Component({
  selector: 'app-author',
  
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  standalone: true, 
  imports: [FormsModule, CommonModule]
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