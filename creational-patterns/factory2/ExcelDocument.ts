import { IDocument } from ".";


export class ExcelDocument implements IDocument {
    constructor(
        public name: string,
        public type: string = 'Excel',
        public postFix: string = '.xlsx',
        public size: number = 0,
        public content: string = ''
    ) { }

    printContent() {
        console.log(`Printing Excel Document: ${this.content}`);
    }
}
