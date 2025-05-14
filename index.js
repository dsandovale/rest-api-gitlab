const axios = require('axios');
const { getListOfRepositories } = require('./services/apirest');
const { filterAndExtractProjects } = require('./services/parsedata');
const { appendToCSV } = require('./services/writecsv');
const path = require('path');
const args = process.argv.slice(2);
const maxResults = parseInt(args[0], 10) || 100;
const page = parseInt(args[1], 10) || 1;

async function main(per_page, page) {
  try {
    const filePath = path.join(__dirname, './data', 'ListOfRepositoriesGGSS.csv');
    const data = await getListOfRepositories(per_page, page);
    const rows = filterAndExtractProjects(data);
    rows.forEach(row => {
      appendToCSV(filePath, ['id','name', 'web_url', 'http_url_to_repo', 'archived'], [row.id, row.name, row.web_url, row.http_url_to_repo, row.archived]);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

main(args[0], args[1]);

// node index.js 100 1