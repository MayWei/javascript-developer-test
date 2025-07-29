const { httpGet } = require("./mock-http-interface");
const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  const result = await Promise.all(
    urls.map(async (url) => {
      const data = await httpGet(url);
      const body = JSON.parse(data.body);
      return data.status === 200
        ? { "Arnie Quote": body.message }
        : { FAILURE: body.message };
    })
  );
  console.log(result);
  return result;
};

module.exports = {
  getArnieQuotes,
};
