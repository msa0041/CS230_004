import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { UserInfo } from "./user-info.model";
import { Item, Register, searchBar } from "./items.model";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class ItemsService {
    private baseUrl : string = 'https://ebay-app-004-default-rtdb.firebaseio.com/';
    private endpoint:string = 'itemsList.json';
    private registerPoint:string = 'register.json';
    private searchPoint:string = 'searchBar.json';
    constructor(private http: HttpClient){

    }
    getItems() {
        console.log(this.baseUrl+this.endpoint);
        return this.http.get<Item[]>(this.baseUrl + this.endpoint);
    }

    // modifyItems(){
    //     var temp: Item = {
    //         price: '10',
    //         discount: '40%',
    //         imagePath: 'oo',
            
    //     }
    //     return this.http.put(this.baseUrl + this.endpoint,temp);
    // }
    addAccount(data:Register){
        return this.http.post(this.baseUrl+this.registerPoint,data);
    }
    searchBar(data: searchBar){
        return this.http.put(this.baseUrl+this.searchPoint,data);
    }

}