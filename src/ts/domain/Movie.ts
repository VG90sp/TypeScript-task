import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly year: number,
        readonly countries: string,
        readonly tagline: string,
        readonly genre: Array<string>,
        readonly time: number
    ) { }
}