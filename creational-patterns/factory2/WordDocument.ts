import { IDocument } from ".";

export class WordDocument implements IDocument {
    name: string;
    type: string;
    postFix: string;
    size: number;
    content: string;
    printContent: () => void;
    constructor() {
        this.name = 'Word Document';
        this.type = 'Word';
        this.postFix = '.docx';
        this.size = 0;
        this.content = '';
        this.printContent = () => {
            console.log(`Printing Word Document: ${this.content}`);
        };
    }
}
