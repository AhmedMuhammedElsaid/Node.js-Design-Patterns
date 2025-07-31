class InventoryItem {
    name: string;
    price: number;

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${this.name} costs ${this.price}`)
    }

}

class GoldenInventoryItem {
    name: string;
    price: any;

    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }

}

class DiamondInventoryItem {
    name: string;
    price: any;
    cutsGlass: boolean;

    constructor(baseItem) {
        this.name = `Diamond ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
        this.cutsGlass = true;
    }

    print() {
        console.log(`${this.name} costs a lot of money...`);
    }

}

export { InventoryItem, GoldenInventoryItem, DiamondInventoryItem };
