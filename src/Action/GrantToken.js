const axios = require("axios")
const tokenHeaders = require("./TokenHeaders")
const tokenParameters = require("./TokenParameters")

const grantToken = async (bkashConfig) => {
  try {

    const response = await axios.post(
      `${bkashConfig?.base_url}/tokenized/checkout/token/grant`,
      tokenParameters(bkashConfig),
      {
        headers: tokenHeaders(bkashConfig),
      }
    )
    
    return response?.data?.id_token
    
  } catch (e) {
    console.log(e)
  }
}

module.exports = grantToken
