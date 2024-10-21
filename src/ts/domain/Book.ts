import Buyable from './Buyable'
export default class Book implements Buyable {
    
    constructor(
        readonly id: number, 
        readonly name: string,
        readonly author: string, 
        readonly price_: number, 
        readonly pages: number) {    
    }
    public get price() : number {
        return this.price_
    }
}