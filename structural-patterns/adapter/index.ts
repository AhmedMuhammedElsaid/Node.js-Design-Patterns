

import { readFileSync, writeFileSync, existsSync } from "fs";


class LocaleStorage {
    private storage: { [key: string]: string } = {};

    constructor(private filePath: string) {
        if (existsSync(filePath)) {
            const data = readFileSync(filePath, "utf-8");
            this.storage = JSON.parse(data);
        } else {
            this.storage = {}
        }
    }
    private save() {
        writeFileSync(this.filePath, JSON.stringify(this.storage));
    }
    getItem(key: string) { return this.storage[key]; }
    setItem(key: string, value: string) {
        this.storage[key] = value;
        this.save();
    }
    removeItem(key: string) {
        delete this.storage[key];
        this.save();
    }
    getLength() {
        return Object.keys(this.storage).length;
    }
    clear() {
        this.storage = {};
        this.save();
    }
}

