import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname + "/" + filePath), 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    })
    .catch((err) => {
       console.log(`No file ${filePath} found`);
       return "";
    });
}

export default async function Reader(filePathOrContent, variables) {

    if( ! filePathOrContent)
        return "";

    // Get data from the source
    let data = await readFile(filePathOrContent);

    for(let i in variables) {
        data = data.replace(`{{${i}}}`, variables[i]);
    }

    return data;
}