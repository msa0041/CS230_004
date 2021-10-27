

export class Item {
    price: string;
    discount: string;
    imagePath: string;

    constructor({price, discount, imagePath} :
        {price:string, discount:string, imagePath:string}) {
            // (property) item.price: string
            this.price = price;
            this.discount = discount;
            this.imagePath = imagePath;
        } 
}
export class Register{
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;

    constructor({FirstName, LastName, Email, Password} :
        {FirstName:string, LastName:string, Email:string, Password:string}) {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Email = Email;
            this.Password = Password;
        } 
}
export class searchBar{
    thing: string;
   

    constructor({thing} :
        {thing:string}) {
            this.thing = thing;
        } 
}