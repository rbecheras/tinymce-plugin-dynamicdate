'use strict'

var DateTimeMenuItem = require('./DateTimeMenuItem')

module.exports = DynamicdatePlugin

function DynamicdatePlugin (editor) {
  // var now = new Date()
  editor.addMenuItem('dynamicdate', {
    context: 'insert',
    text: 'Dynamic date',
    type: 'menuitem',
    menu: [
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
  })
}
