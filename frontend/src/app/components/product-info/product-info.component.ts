import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  articleId: any;
  article: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
    /* this.articleId = route.snapshot.params['articleId']; */
  }
  articles: any = [];
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.articleId = (routeParams.get('articleId'));
    console.log(this.articleId);
    this.articleService.find(this.articleId).subscribe((data:any)=>{
      this.article = data;
      console.log(this.article);
    });
  }

  update(){
    this.articleService.update(this.articleId, this.article).subscribe((res)=>{
      this.router.navigateByUrl('/articles');
    });
  }

  deleteArticle(id:any){
    this.articleService.deleteArticle(id).subscribe(res=>{
      this.articles = this.articles.filter((a: any)=> a.id == id);
      this.refresh();
    });
  }

  refresh(): void { window.location.reload(); }

}
