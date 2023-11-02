const fetch = require("node-fetch")
const tokenHeaders = require("./tokenHeaders")
const tokenParameters = require("./tokenParameters")

const grantToken = async (bkashConfig) => {
  try {
    const tokenResponse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/token/grant", {
      method: "POST",
      headers: tokenHeaders(bkashConfig),
      body: JSON.stringify(tokenParameters(bkashConfig)),
    })
    
    const tokenResult = await tokenResponse.json()
    return tokenResult?.id_token
    
  } catch (e) {
    console.log(e)
  }
}

module.exports = grantToken
