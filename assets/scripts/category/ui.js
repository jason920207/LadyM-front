/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-30T15:55:47-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-03T12:45:29-05:00
 */
const showCategoriesTemplate = require('../templates/category/showcategories.handlebars')
const showCategoryTemplate = require('../templates/category/showcategory.handlebars')
const showwarntemp = require('../templates/tooltip/warning.handlebars')
const store = require('../store')


const onGetCategoriesSuccess = response => {
  const showCategoriesHtml = showCategoriesTemplate({ categories: response.categories })
  $('#content').html(showCategoriesHtml)
  store.categories = response.categories
}

const onGetCategorySuccess = response => {
  const showCategoryHtml = showCategoryTemplate({ category: response.category })
  $('#content').html(showCategoryHtml)
}

const failure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'error'})).fadeOut(3000)
}
module.exports = {
  onGetCategoriesSuccess,
  onGetCategorySuccess,
  failure
}
