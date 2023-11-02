const createPaymentAPI = require("./Action/createPayment")
const executePaymentAPI = require("./Action/executePayment")
const queryPaymentAPI = require("./Action/queryPayment")
const searchTransactionAPI = require("./Action/searchTransaction")
const refundTransactionAPI = require("./Action/refundTransaction")

async function createPayment(bkashConfig, paymentDetails) {
  return await createPaymentAPI(bkashConfig, paymentDetails)
}

async function executePayment(bkashConfig, paymentID) {
  return await executePaymentAPI(bkashConfig, paymentID)
}

async function queryPayment(bkashConfig, paymentID) {
  return await queryPaymentAPI(bkashConfig, paymentID)
}

async function searchTransaction(bkashConfig, trxID) {
  return await searchTransactionAPI(bkashConfig, trxID)
}

async function refundTransaction(bkashConfig, refundInfo) {
  const { paymentID, trxID, amount, sku, reason } = refundInfo
  const response = await refundTransactionAPI(bkashConfig, {
    paymentID,
    trxID
  })

  if (response?.refundTrxID) {
    return response
  } else {
    return await refundTransactionAPI(bkashConfig, {
      paymentID,
      trxID,
      amount,
      sku: sku || "Test",
      reason: reason || "Test",
    })
  }
}

module.exports = {
    createPayment,
    executePayment,
    queryPayment,
    searchTransaction,
    refundTransaction

}
