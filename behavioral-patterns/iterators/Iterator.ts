class Iterator<T> {
    index: number;
    items: { name: string, price: number }[];

    constructor(items = []) {
        this.index = 0;
        this.items = items;
    }

    first() {
        const [first] = this.items;
        return first;
    }

    last() {
        const [last] = [...this.items].reverse();
        return last;
    }

    hasNext() {
        return this.index < this.items.length - 1;
    }

    current() {
        return this.items[this.index];
    }

    next() {
        if (this.hasNext()) {
            this.index += 1;
        }
        return this.current();
    }

    prev() {
        if (this.index !== 0) {
            this.index -= 1;
        }
        return this.current();
    }

}

export default Iterator;
