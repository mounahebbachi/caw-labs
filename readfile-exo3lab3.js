// Import the file system module
const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Check if a file path is provided
if (!filePath) {
    console.log("Please provide a file name as a parameter.");
    process.exit(1);
}

// Read the file and display its contents
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err.message);
        return;
    }
    console.log(data);
});
