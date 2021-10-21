import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: 'items.component.html',
  
})
export class ItemsComponent  {

  @Input()
  price! : string;
  @Input()
  discount! : string;
  @Input()
  imagePath! : string;
 

}
