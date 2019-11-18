'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Patient extends Model {

    static get hidden() {
        return ['created_at', 'updated_at', 'specialty_id', 'unity_id']
    }

    Specialty() {
        return this.belongsTo('App/Models/Specialty');
    }

    Unity() {
        return this.belongsTo('App/Models/Unity');
    }
}

module.exports = Patient
