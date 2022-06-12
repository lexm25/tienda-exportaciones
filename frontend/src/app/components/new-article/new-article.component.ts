import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private ArticleService: ArticleService, private router: Router) { }

  articles: any;

  ngOnInit(): void {
  }

  add(articleTitle:string, articleBody:string, articleAuthor:string){
    this.articles = {
      'title': articleTitle,
      'body': articleBody,
      'author': articleAuthor
    };
    this.ArticleService.addArticle(this.articles as any).subscribe(article=>{
      this.articles=article;
      this.router.navigateByUrl('/articles');
    });
    console.log(this.articles);
  }

}
