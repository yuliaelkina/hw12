import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    total(): number {
        let total = 0;
        this._items.forEach((item) => {total += item.price});
        return total;
    }

    discountedTotal(discount: number): number {
      return this.total() * (1 - discount/100);
    }

    remove(id: number): void {
        const index = this._items.findIndex((el) => el.id == id);
        this._items.splice(index, 1);
    }
}
