/*this is the question1 of exo4
const fs = require('fs');

const text = process.argv[2];

// Check if text is provided
if (!text) {
    console.log("Please provide text as a parameter.");
    process.exit(1);
}

fs.writeFile('f.txt', text, (err) => {
    if (err) {
        console.error("Error writing to file:", err.message);
        return;
    }
    console.log("The file has been saved!");
});
*/





const fs = require('fs');

// Get the file name and text from command line arguments
const fileName = process.argv[2];
const text = process.argv[3];

// Check if both parameters are provided
if (!fileName || !text) {
    console.log("Usage: node exo4.js <fileName> <text>");
    process.exit(1);
}

// Write the text to the specified file
fs.writeFile(fileName, text, (err) => {
    if (err) {
        console.error("Error writing to file:", err.message);
        return;
    }
    console.log("The file has been saved!");
});
