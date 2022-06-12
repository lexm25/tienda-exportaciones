import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
// User interface
export class User {
  name: any;
  email: any;
  id:any;
  rol:any;
  telefono:any;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  UserProfile!: User;
  aux!: any;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
      sessionStorage.setItem('rol', this.UserProfile.rol);
    });
  }
  ngOnInit() {
    if(!this.estaLogeado){
      this.router.navigate(['/home']);
    }
  }

  estaLogeado(){
    if(sessionStorage.getItem('rol') == ''){
      this.aux=false;
    }
    else{
      this.aux=true;
    }
  }
}
