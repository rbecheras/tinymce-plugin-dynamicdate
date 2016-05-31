'use strict'

// var $ = window.jQuery
var DateTimeMenuItem = require('./DateTimeMenuItem')

module.exports = DynamicdatePlugin

function DynamicdatePlugin (editor) {
  var dateTimeMenuItemList = [
    new DateTimeMenuItem('dd/mm/yyyy, HH\'h\'MM\'\'\'ss'),
    new DateTimeMenuItem('dd/mm/yyyy, HH\'h\'MM'),
    new DateTimeMenuItem('dd/mm/yyyy'),
    new DateTimeMenuItem('HH\'h\'MM\'\'\'ss'),
    new DateTimeMenuItem('HH\'h\'MM'),
    new DateTimeMenuItem('dddd'),
    new DateTimeMenuItem('dd'),
    new DateTimeMenuItem('mm'),
    new DateTimeMenuItem('mmmm'),
    new DateTimeMenuItem('yy'),
    new DateTimeMenuItem('yyyy')
  ]

  editor.addMenuItem('dynamicdate', {
    context: 'insert',
    text: 'Dynamic date',
    type: 'menuitem',
    id: 'menu-dynamicdate',
    menu: dateTimeMenuItemList
  })

  // $('body').on('menusController:mceMenuItemRendered', function (evt, menuId) {
  //   console.log('menusController:mceMenuItemRendered', $('#' + menuId))
  // })
}
