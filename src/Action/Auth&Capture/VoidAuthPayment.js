const fetch = require("node-fetch")
const authHeaders = require("../AuthHeaders")

const voidAuthPayment = async (bkashConfig, paymentID) => {
  const voidResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/payment/confirm/void", {
    method: "POST",
    headers: await authHeaders(bkashConfig),
    body: JSON.stringify({
      paymentID,
    }),
  })
  
  const voidResult = await voidResponse.json()
  return voidResult
}

module.exports = voidAuthPayment
