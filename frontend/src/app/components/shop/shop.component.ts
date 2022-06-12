import { ArticleService } from '../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  esAdmin!: boolean;
  constructor(private articleService: ArticleService, private router: Router) { }

  articles: any = [];
  ngOnInit(): void {
    this.showArticles();
  }

  showArticles(){
    this.articles = this.articleService.listArticles().subscribe(article=>{
      this.articles = article;
      console.log(this.articles);
    });
  }

  deleteArticle(id:any){
    this.articleService.deleteArticle(id).subscribe(res=>{
      this.articles = this.articles.filter((a: any)=> a.id == id);
      this.refresh();
    });
  }

  refresh(): void { window.location.reload(); }

  getData(){
    if(sessionStorage.getItem('rol') == 'admin'){
      this.esAdmin=true;
    }
    else{
      this.esAdmin=false;
    }
  }

}
