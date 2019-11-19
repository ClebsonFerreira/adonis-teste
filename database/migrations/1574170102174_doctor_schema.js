'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoctorSchema extends Schema {
  up() {
    this.create('doctors', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('cpf', 11).notNullable()
      table.string('cns', 80).notNullable()
      table
        .integer('unity_id')
        .unsigned()
        .references('id')
        .inTable('unities')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('specialty_id')
        .unsigned()
        .references('id')
        .inTable('specialties')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string("advice")
      table.string("adviceNumber")
      table.string("comments")
      table.date('birthDate')
      table.timestamps()
    })
  }

  down() {
    this.drop('doctors')
  }
}

module.exports = DoctorSchema
