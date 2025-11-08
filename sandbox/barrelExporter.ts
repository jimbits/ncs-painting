// cli.js
const path = require("path");
const fs = require("fs");

// Get folder path from command line arguments
const folderPath = process.argv[2];

if (!folderPath) {
  console.error("Please provide a folder path");
  console.log("Usage: node cli.js /path/to/folder");
  process.exit(1);
}

// Validate the path exists
if (!fs.existsSync(folderPath)) {
  console.error(`Folder does not exist: ${folderPath}`);
  process.exit(1);
}

console.log(`Processing folder: ${path.resolve(folderPath)}`);
