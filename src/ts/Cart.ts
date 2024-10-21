import Buyable from "./domain/Buyable";
import Countable from "./domain/Countable";
import Gadget from "./domain/Gadget";

export default class Cart {
    private _items: (Buyable | Countable)[] = [];


    add(item: Buyable | Countable): void {        
        if (!(new Set(this._items).has(item))) {this._items.push(item);}
        if (item instanceof Gadget) {
            item.count++;
        }
    }


    del(id: number): void {
        const index: number = this._items.findIndex((item)=>item.id == id)
        if (index < 0) {
            throw new Error("element not found")
        }
        const item = this._items[index]
        if (item instanceof Gadget) {
            item.count--;
            if (item.count == 0) {
                this._items.splice(index, 1);
            }
        } else {
            this._items.splice(index, 1);
        };
    }

    get items(): (Buyable | Countable)[] {
        return [...this._items];
    }

    sumFull(): number {
        return this._items.reduce((a, b) => a + b['price'], 0);         
    }

    sumWithDiscount(discount: number): number {
        return this.sumFull() * (100 - discount) / 100;
    }

    clear():void {
        this._items = [];
    }
}