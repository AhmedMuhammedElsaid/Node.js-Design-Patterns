import Storage from './Storage';

class Store {
    name: string;
    storage: Storage;

    constructor(name: string, inventory: any = {}) {
        this.name = name;

        const floor = new Storage('store floor', inventory.floor);
        const backroom = new Storage('store backroom', inventory.backroom);
        const localStore = new Storage('nearby store', inventory.localStore, 1);
        const warehouse = new Storage('warehouse', inventory.warehouse, 5);

        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);

        this.storage = floor;

    }

    find(itemName: string) {
        return this.storage.find(itemName);
    }

}

export default Store;
