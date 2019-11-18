'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitySchema extends Schema {
  up () {
    this.create('unities', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('unityCode', 80).notNullable()
      table.string('phoneNumber', 80)
      table.string('zipCode',30)
      table.string('street',255)
      table.string('number',20)
      table.string('complement',255)
      table.string('neighborhood',255)
      table.string('city',50)
      table.string('state',2)
      table.timestamps()
    })
  }

  down () {
    this.drop('unities')
  }
}

module.exports = UnitySchema
