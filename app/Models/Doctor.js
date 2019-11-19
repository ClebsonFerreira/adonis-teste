'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Doctor extends Model {
    Specialty() {
        return this.belongsTo('App/Models/Specialty');
    }

    Unity() {
        return this.belongsTo('App/Models/Unity');
    }
}

module.exports = Doctor
