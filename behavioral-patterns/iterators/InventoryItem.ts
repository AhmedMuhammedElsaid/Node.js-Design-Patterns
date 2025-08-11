class InventoryItem {
    name: string;
    price: number;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    writeLn() {
        process.stdout.write(`${this.name}: $${this.price}`);
    }

}

export default InventoryItem;
