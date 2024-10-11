import inquirer from 'inquirer';
import fs from 'fs';
import markdown from './utils/generateMarkdown.js';


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.info("Written to file.")
    });
}