const axios = require('axios');

const url = 'https://gitlab.falabella.tech/api/v4/groups/7828/projects';
const headers = {
  'Authorization': 'Bearer <>',
  'Cookie': '__cf_bm=aSF5PwxYWKdvJT6PqUJw4.2RqwdU_vRvKKRnmrm78JQ-1747146008-1.0.1.1-VLbBQ9c21_NAjV0D5YVjzLepfbFThgu491dnZQ6HGlzS1mgMjlIL8KK5jTXmeoTNik8lTLuU6D8YRmqieFziTWd3z69cNSa29To8IfCwsB8; _cfuvid=P7fyW8.TI6SubTLUIsGKw5TDli6jp2PAW0Jh3WOAsTo-1747146008072-0.0.1.1-604800000'
};

async function getListOfRepositories(per_page, page) {
  try {
    const response = await axios.get(`${url}?&per_page=${per_page}&page=${page}&include_subgroups=true`, { headers, timeout: 50000 });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { getListOfRepositories };