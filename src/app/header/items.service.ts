import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { UserInfo } from "./user-info.model";
import { Item } from "./items.model";

@Injectable({providedIn: 'root'})
export class ItemsService {
    private baseUrl : string = 'https://ebay-app-004-default-rtdb.firebaseio.com/';
    private endpoint:string = 'itemsList.json';
    constructor(private http: HttpClient){

    }
    getItems() {
        console.log(this.baseUrl+this.endpoint);
        return this.http.get<Item[]>(this.baseUrl + this.endpoint);
    }
}