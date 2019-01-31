/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T13:32:11-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T16:14:39-05:00
 */

const showCustomersTemplate = require('../templates/customer/getcustomersinform.handlebars')
const showCustomerTemplate = require('../templates/customer/showcustomerTemplate.handlebars')
const store = require('../store')
const onGetCustomersSuccess = response => {
  console.log(response.customers)
  store.customers = response.customers
  console.log()
  const showCustomersHtml = showCustomersTemplate({ customers: response.customers })
  $('#content').html(showCustomersHtml)
}

const onGetCustomerSuccess = response => {
  console.log(response)
  const showCustomersHtml = showCustomerTemplate({ customer: response.customer })
  $('#content').html(showCustomersHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onGetCustomersSuccess,
  onGetCustomerSuccess,
  failure
}
