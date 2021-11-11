import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from './authResponse';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
})
export class SigninComponent  {
  public buttonClicked:string = "";
  private response!:Observable<AuthResponse>;

  constructor(private registerService: ItemsService) { 
   
  }

  
  public onSubmit(form:NgForm){
    console.log("bottom clicked: " + this.buttonClicked);
    console.log(form.value);

    const email=form.value.email;
    const password = form.value.password;

    if(this.buttonClicked == 'Login') {
      this.response = this.registerService.login(email, password);
    }
    if(this.buttonClicked == 'SignUp'){
      this.response = this.registerService.signup(email, password);
    }

    this.response.subscribe(
      (data:AuthResponse )=> {
        console.log(data);
      },
      error =>{
        console.log(error.error.error);
      }
    )

    form.resetForm();
  }
}
