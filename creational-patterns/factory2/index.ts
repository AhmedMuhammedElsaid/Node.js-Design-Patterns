import { ExcelDocument } from "./ExcelDocument";
import { PdfDocument } from "./PdfDocument";
import { WordDocument } from "./WordDocument";

export interface IDocument {
    name: string;
    type: string;
    postFix: string;
    size: number;
    content: string;
    printContent: () => void;
}

export class DocumentFactory {
    createDocument(name: string, type: string): IDocument {
        switch (type) {
            case 'excel':
                return new ExcelDocument(name);
            case 'pdf':
                return new PdfDocument(name);
            case 'word':
                return new WordDocument();
            default:
                throw new Error(`Document type ${type} is not supported.`);
        }
    }
}


function sortArr<T, K extends keyof T>(arr: T[], key: K): T[] {
    return arr.sort((a, b) => {
        return a[key] > b[key] ? 1 : -1;
    });
}

const tasks = [{ id: 3, title: "Write code.." }, { id: 1, title: "Make coffee.." }, { id: 2, title: "Read book.." }];
const sortedTasks = sortArr(tasks, 'id');
console.log(sortedTasks);
