import Logger from './Logger';

const logger = new Logger().getInstance();

export interface InventoryItem {
    item: string;
    qty: number;
    price: number;
}

class Store {
    public name: string;
    public inventory: InventoryItem[];

    constructor(name = "", inventory, address = "") {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }

}

export default Store;
