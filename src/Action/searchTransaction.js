const fetch = require("node-fetch")
const authHeaders = require("../Action/authHeaders")

const searchTransaction = async (bkashConfig, trxID) => {
  const searchResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/general/search/searchTransaction", {
    method: "POST",
    headers: await authHeaders(bkashConfig),
    body: JSON.stringify({
      trxID,
    }),
  })

  const searchResult = await searchResponse.json()
  return searchResult
}

module.exports = searchTransaction
