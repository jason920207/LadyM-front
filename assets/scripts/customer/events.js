/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T13:32:16-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-03T09:15:00-05:00
 */

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')


const onGetCustomers = event => {
  api.GetCustomers()
    .then(ui.onGetCustomersSuccess)
    .catch(ui.failure)
}

const onGetCustomer = event => {
  event.preventDefault()
  const id = getFormFields(event.target).id
  api.GetCustomer(id)
    .then(ui.onGetCustomerSuccess)
    .catch(ui.failure)
}

const onCreateCustomer = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.CreateCustomer(data)
    .then(() => onGetCustomers())
    .catch(ui.failure)
}

const onDeleteCustomer = event => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.DeleteCustomer(id)
    .then(() => onGetCustomers())
    .catch(ui.failure)
}

const onUpdateCustomer = evenet => {
  event.preventDefault()
  // $('#UpdateModal').modal('hide')
  const data = getFormFields(event.target)
  const id = $('.customer-id').text()
  api.UpdateCustomer(data, id)
    .then(() => {
      api.GetCustomer(id)
        .then(ui.onGetCustomerSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure())
}


module.exports = {
  onGetCustomers,
  onGetCustomer,
  onCreateCustomer,
  onDeleteCustomer,
  onUpdateCustomer
}
