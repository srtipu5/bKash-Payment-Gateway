const authHeaders = require("./authHeaders")
const fetch = require("node-fetch")

const executePayment = async (bkashConfig, paymentID) => {
  const executeResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/execute", {
    method: "POST",
    headers: await authHeaders(bkashConfig),
    body: JSON.stringify({
      paymentID,
    }),
  })

  const executeResult = await executeResponse.json()
  return executeResult
}

module.exports = executePayment
