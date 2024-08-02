import Buyable from "./domain/Buyable";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    del(id: number): void {
        const index: number = this._items.findIndex((item)=>item.id == id)
        if (index < 0) {
            throw "element not found"
        }
       this._items.splice(index, 1);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sumFull(): number {
        const sum: number = this._items.reduce((a, b)=> a + b.price, 0);
        return sum;
    }

    sumWithDiscount(discount: number): number {
        const sumWithDiscount: number = this.sumFull() * (100 - discount) / 100;
        return sumWithDiscount;
    }

    clear():void {
        this._items = [];
    }
}