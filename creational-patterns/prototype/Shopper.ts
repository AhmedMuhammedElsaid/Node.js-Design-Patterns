class Shopper {
    private _shoppingList: string[];
    private _name: string;

    constructor(name = 'unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item: string): void {
        this._shoppingList.push(item);
    }

    clone() {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);

        cloned._name = this._name;
        cloned._shoppingList = [...this._shoppingList];

        return cloned;
    }

}

export default Shopper;
