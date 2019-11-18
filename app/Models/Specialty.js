'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Specialty extends Model {

    static get hidden() {
        return ['created_at', 'updated_at']
    }

    Patient(){
        return this.hasMany('App/Models/Patient');
    }
    
}

module.exports = Specialty
