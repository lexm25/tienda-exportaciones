import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articleId: any;
  article: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
    /* this.articleId = route.snapshot.params['articleId']; */
  }

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

}
