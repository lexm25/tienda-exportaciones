import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './components/product-info/product-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: NewArticleComponent,
  },
  {
    path: 'edit/:articleId',
    component: EditArticleComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'info/:articleId',
    component: ProductInfoComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
