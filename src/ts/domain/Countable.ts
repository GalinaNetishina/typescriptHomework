import Buyable from "./Buyable";

export default interface Countable extends Buyable {
    brand: string;
    count: number;
}

