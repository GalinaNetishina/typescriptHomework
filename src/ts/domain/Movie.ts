import Buyable from './Buyable'
export default class Movie implements Buyable {
    
    constructor(
        readonly id: number, 
        readonly name: string,
        readonly price_: number, 
        readonly originalName: string,  
        readonly country: string,       
        readonly year: number,
        readonly slogan: string, 
        readonly genres: string[],
        readonly duration: number) {    
    }
    public get price() : number {
        return this.price_
    }
}