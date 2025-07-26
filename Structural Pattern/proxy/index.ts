import path from 'path';
import { fileURLToPath } from 'url';
import FS_Proxy from './FS_Proxy';
import fsModule from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fs = new FS_Proxy(fsModule);

// const txtFile = path.join(__dirname, 'Readme.txt');
const mdFile = path.join(__dirname, 'Readme.md');

var result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}

// fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
