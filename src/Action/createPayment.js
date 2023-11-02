const fetch = require("node-fetch")
const { v4: uuidv4 } = require("uuid")
const authHeaders = require("./authHeaders")

const createPayment = async (bkashConfig, paymentDetails) => {
  try {
    const { amount, callbackURL, orderID, reference } = paymentDetails
    if(!amount){
      return {
        statusCode : 2065,
        statusMessage : 'amount required'
      }
    }else{
      if(amount < 1){
        return {
          statusCode : 2065,
          statusMessage : 'minimum amount 1'
        }
      }
    }

    if(!callbackURL){
      return {
        statusCode : 2065,
        statusMessage : 'callbackURL required'
      }
    }

    const createResopnse = await fetch(bkashConfig?.base_url + "/tokenized/checkout/create", {
      method: "POST",
      headers: await authHeaders(bkashConfig),
      body: JSON.stringify({
        mode: "0011",
        currency: "BDT",
        intent: "sale",
        amount: amount, 
        callbackURL: callbackURL,
        payerReference: reference || "1",
        merchantInvoiceNumber: orderID || "Inv_" + uuidv4().substring(0, 5)
      }),
    })

    const createResult = await createResopnse.json()
    return createResult
  } catch (e) {
    return e
  }
}

module.exports = createPayment
