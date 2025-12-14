import fs from 'fs';
import path from 'path';

export function parseFile(filepath) {
    const readFile = fs.readFileSync(filepath, 'utf-8')
    const fileExtension = path.extname(filepath)

    if (fileExtension === '.json') {
        const textToObj = JSON.parse(readFile)
        return textToObj
    }
}