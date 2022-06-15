import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';

export class User {
  name: any;
  email: any;
  id:any;
  rol:any;
  telefono:any;
  direccion:any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  isSignedIn!: boolean;
  UserProfile!: User;
  aux!:boolean;
  esAdmin!:boolean;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
  ) {}
  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
      console.log(this.isSignedIn);
    });
    this.getData();
    this.estaLogeado();
  }
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

  estaLogeado(){
    if(sessionStorage.getItem('rol') == '' ||sessionStorage.getItem('rol')==null ||sessionStorage.getItem('rol')=='undefined'){
      this.aux=false;
      this.signOut();
    }
    else{
      this.aux=true;
    }
  }

  getData(){
    if(sessionStorage.getItem('rol') == 'admin'){
      this.esAdmin=true;
    }
    else{
      this.esAdmin=false;
    }
  }
}
