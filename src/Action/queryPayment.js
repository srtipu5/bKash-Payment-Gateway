const fetch = require("node-fetch")
const authHeaders = require("./authHeaders")

const queryPayment = async (bkashConfig, paymentID) => {
  const queryResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/payment/status", {
    method: "POST",
    headers: await authHeaders(bkashConfig),
    body: JSON.stringify({
      paymentID,
    }),
  })
  
  const queryResult = await queryResponse.json()
  return queryResult
}

module.exports = queryPayment
