

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