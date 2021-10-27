import { Component, OnInit} from '@angular/core';
import { Item } from './items.model';
import { ItemsService } from './items.service';
//import { mock_items } from './mock-items';



@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent  implements OnInit{
  items: Item [] = [];

  constructor(private itemsService :ItemsService){

  }


  ngOnInit(): void {
    this.itemsService.getItems().subscribe(data=> {
      console.log(data);
      for(var item in data){
        console.log(data[item]);
       this.items.push(new Item(data[item]));
        
      }
      //this.itemsService.modifyItems().subscribe(data=>{
      //  console.log(data);
      //})
    })




   // send get request from server and get response 
    // for(var item of mock_items){
    //   this.items.push(new Item(item))
    // }
  }

  

}
