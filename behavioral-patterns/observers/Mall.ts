type TSales = {
    storeName: string;
    discount: number;
}
class Mall {
    sales: TSales[];
    constructor() {
        this.sales = [];
    }

    notify(storeName: string, discount: number) {
        this.sales.push({ storeName, discount });
    }

}

export default Mall;
