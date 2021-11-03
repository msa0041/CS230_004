import { Injectable } from "@angular/core";
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { Item } from "./items.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<Item []>;
    constructor(private db:AngularFireDatabase){
        console.log("Sitting up Firebase communication");
        this.items = this.db.list<Item>('itemsList').valueChanges();
    }
    public showData() {
        this.items.subscribe((data: Item[]) =>{
            console.log("data recieved");
            for(let item of data){
                console.log(data);
            }
            
        })
    }
}