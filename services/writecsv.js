const fs = require('fs');
const path = require('path');

/**
 * Appends data to a CSV file. If the file doesn't exist, it creates one with headers.
 * @param {string} filePath - The path to the CSV file.
 * @param {Array<string>} headers - The headers for the CSV file.
 * @param {Array<string>} data - The data to append as a new row.
 */
function appendToCSV(filePath, headers, data) {
  const fileExists = fs.existsSync(filePath);

  const writeStream = fs.createWriteStream(filePath, { flags: 'a' });

  if (!fileExists) {
    console.log("fileExists", fileExists)
    writeStream.write(headers.join(',') + '\n');
  }

  writeStream.write(data.join(',') + '\n');
  writeStream.end();
}

module.exports = { appendToCSV };