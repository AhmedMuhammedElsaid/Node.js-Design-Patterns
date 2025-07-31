import { IDocument } from ".";

export class PdfDocument implements IDocument {
    constructor(
        public name: string,
        public type: string = 'PDF',
        public postFix: string = '.pdf',
        public size: number = 0,
        public content: string = ''
    ) { }

    printContent() {
        console.log(`Printing PDF Document: ${this.content}`);
    }
}
