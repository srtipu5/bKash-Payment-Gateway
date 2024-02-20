const authHeaders = require("../AuthHeaders")
const fetch = require("node-fetch")

const executeAgreement = async (bkashConfig, paymentID) => {
  const executeAgreementResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/execute", {
    method: "POST",
    headers: await authHeaders(bkashConfig),
    body: JSON.stringify({
      paymentID,
    }),
  })

  const executeAgreementResult = await executeAgreementResponse.json()
  return executeAgreementResult
}

module.exports = executeAgreement
