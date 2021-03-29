import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumWithoutSale(): number {
        let sum: number = 0;
        for(let card of this._items){
            sum += card.price;
        }
        return sum;
    }

    sumWithSale(sale: number): number {
        let sum = this.sumWithoutSale();
        return sum - ( (sum / 100) * sale );
    }

    cartDelete(cartId: number): void {
        const index = this._items.findIndex(cart => cartId == cart.id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }       
    }
}