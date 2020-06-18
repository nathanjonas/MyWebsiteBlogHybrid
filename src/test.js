const axios = require("axios");

const limitPerPage = 100;
const apiUrl = "https://www.balldontlie.io/api/v1/players";

const getUsers = async function (pageNo = 0) {
  let actualUrl = apiUrl + `?page=${pageNo}&per_page=${limitPerPage}`;
  var apiResults = await axios.get(actualUrl).then((resp) => {
    return resp.data.data;
  });

  return apiResults;
};

const getEntireUserList = async function (pageNo = 0) {
  const results = await getUsers(pageNo);
  console.log("Retreiving data from API for page : " + pageNo);
  if (results.length > 0) {
    return results.concat(await getEntireUserList(pageNo + 1));
  } else {
    console.log(results);
    return results;
  }
};

(async () => {
  const entireList = await getEntireUserList();
  console.log(entireList);
})();
