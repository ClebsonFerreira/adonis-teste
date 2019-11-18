'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up() {
    this.create('patients', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('socialName', 80)
      table.string('sexo', 1)
      table.string('motherName', 80).notNullable()
      table.date('birthDate')
      table.string('susCardNumber', 20).notNullable()
      table.string('phoneNumberOne', 20)
      table.string('phoneNumberTwo', 20)
      table.string('zipCode', 30)
      table.string('street', 255)
      table.string('number', 20)
      table.string('complement', 255)
      table.string('neighborhood', 255)
      table.string('city', 50)
      table.string('state', 2)
      table
        .integer('specialty_id')
        .unsigned()
        .references('id')
        .inTable('specialties')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('unity_id')
        .unsigned()
        .references('id')
        .inTable('unities')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()

    })
  }

  down() {
    this.drop('patients')
  }
}

module.exports = PatientSchema
