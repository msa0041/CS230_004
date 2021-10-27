import { Component} from '@angular/core';
import { searchBar } from './items.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-top-middle-bar',
  templateUrl: 'top-middle-bar.component.html',
})
export class TopMiddleBarComponent {

  constructor(private searchService: ItemsService) { }

  search(data:searchBar){
    console.log("you clicked to search buttun");
    this.searchService.searchBar(data).subscribe(data => {
      console.log("searched for a thing")
    })
  }

}
