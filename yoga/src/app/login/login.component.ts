import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//para el login con redes sociales 
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  model: any = {};
  conta:boolean=false;
  ancho:any;
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService) { }
    

  ngOnInit() {
  
  this.authService.authState.subscribe((user) => {
    this.user = user;
    
    this.loggedIn = (user != null);
  });
  
    
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }



  

}
