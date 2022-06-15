import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NewArticleComponent,
    EditArticleComponent,
    ShopComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    ShoppingCartComponent,
    ProductInfoComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
