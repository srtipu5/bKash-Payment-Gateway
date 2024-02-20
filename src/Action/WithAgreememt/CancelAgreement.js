const fetch = require("node-fetch")
const authHeaders = require("./AuthHeaders")

const cancelAgreement = async (bkashConfig, agreementID) => {
  const cancelAgreementResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/agreement/cancel", {
    method: "POST",
    headers: await authHeaders(bkashConfig),
    body: JSON.stringify({
        agreementID,
    }),
  })
  
  const cancelAgreementResult = await cancelAgreementResponse.json()
  return cancelAgreementResult
}

module.exports = cancelAgreement
