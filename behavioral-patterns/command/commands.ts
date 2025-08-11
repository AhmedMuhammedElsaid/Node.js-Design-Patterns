import { writeFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ExitCommand {

    get name() {
        return 'exit... bye!';
    }

    execute() {
        process.exit(0);
    }

}

class CreateCommand {
    fileName: string;
    body: any;
    fullPath: string;

    constructor(fileName, text) {
        this.fileName = fileName;
        this.body = text;
        this.fullPath = path.join(__dirname, fileName);
    }

    get name() {
        return `create ${this.fileName}`;
    }

    execute() {
        writeFile(this.fullPath, this.body, f => f);
    }

}

export { ExitCommand, CreateCommand };
