const fetch = require("node-fetch")
const authHeaders = require("./authHeaders")

const refundTransaction = async (bkashConfig, body_data) => {
  const refundResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/payment/refund", {
    method: "POST",
    headers: await authHeaders(bkashConfig),
    body: JSON.stringify(body_data),
  })
  
  const refundResult = await refundResponse.json()
  return refundResult
}

module.exports = refundTransaction
