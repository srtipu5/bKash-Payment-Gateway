const fetch = require("node-fetch")
const authHeaders = require("../AuthHeaders")

const captureAuthPayment = async (bkashConfig, paymentID) => {
  const captureResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/payment/confirm/capture", {
    method: "POST",
    headers: await authHeaders(bkashConfig),
    body: JSON.stringify({
      paymentID,
    }),
  })
  
  const captureResult = await captureResponse.json()
  return captureResult
}

module.exports = captureAuthPayment
