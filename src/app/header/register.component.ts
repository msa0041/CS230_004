import { Component} from '@angular/core';
import { Item, Register } from './items.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent  {

  constructor(private registerService: ItemsService) { }

  onAddRegister(data:Register){
    
    console.log("you pressed a buttun");
    this.registerService.addAccount(data).subscribe(data =>{
      console.log("Create an account");
    })
  }
}

