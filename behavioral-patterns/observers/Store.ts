class Store {
    public name: string;
    public subscribers: Array<any>;
    constructor(name: string) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    sale(discount) {
        this.subscribers.forEach(observer => observer.notify(this.name, discount));
    }

}

export default Store;
