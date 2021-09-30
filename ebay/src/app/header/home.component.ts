import { Component, OnInit} from '@angular/core';
import { Item } from './items.model';
import { mock_items } from './mock-items';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent  implements OnInit{
  items: Item [] = [];
  ngOnInit(): void {
    for(var item of mock_items){
      this.items.push(new Item(item))
    }
  }

  

}
