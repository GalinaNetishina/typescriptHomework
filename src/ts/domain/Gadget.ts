import Countable from './Countable'

export default class Gadget implements Countable {
    
    constructor(
        readonly id: number, 
        readonly name: string,
        readonly brand: string, 
        readonly price_: number, 
        public count: number = 0) {    
    }
    public get price() : number {
        return this.price_ * this.count
    }
}