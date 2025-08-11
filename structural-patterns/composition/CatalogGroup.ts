class CatalogGroup {
    name: string;
    composites: { print: () => void, total: number }[];

    constructor(name: string, composites: { print: () => void, total: number }[] = []) {
        this.name = name;
        this.composites = composites;
    }

    get total() {
        return this.composites.reduce((total, nextItem) => total + nextItem.total, 0);
    }

    print() {
        console.log(`\n${this.name.toUpperCase()}`);
        this.composites.forEach(item => item.print());
    }

}

export default CatalogGroup;
