const fetch = require("node-fetch")
const authHeaders = require("../AuthHeaders")

const queryAgreement = async (bkashConfig, agreementID) => {
  const queryAgreementResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/agreement/status", {
    method: "POST",
    headers: await authHeaders(bkashConfig),
    body: JSON.stringify({
        agreementID,
    }),
  })
  
  const queryAgreementResult = await queryAgreementResponse.json()
  return queryAgreementResult
}

module.exports = queryAgreement
