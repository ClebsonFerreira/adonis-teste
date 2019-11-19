'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Doctor = use('App/Models/Doctor')
class DoctorController {

  async index () {
    const doctor = Doctor.query().with('Specialty').with('Unity').fetch()
    return doctor
  }

  async store ({ request, response }) {
    try {

      const eventParams = request.all();

      const DoctorNameExists = await Doctor
          .query()
          .where('name', eventParams.name)
          .where('cpf', eventParams.cpf)
          .where('cns', eventParams.cns)
          .first();

      if (DoctorNameExists) {
          return response
              .status(400)
              .send({ message: { error: 'Doctor already registered' } })
      }

      const doctor = await Doctor.create({ ...eventParams })
      return doctor;

  } catch (error) {
      return response
          .status(500)
          .send({ message: { error: error } })
  }
  }


  async show ({ params}) {
    const doctor = await Doctor.findOrFail(params.id)
    return doctor
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
    const doctor = await Doctor.find(params.id)
        if (!doctor) {
            return response.status(404).send({ message: { error: 'Resource not found' } })
        }

        await doctor.delete()

        return response.status(204).send({ message: { ok: 'deletado com sucesso' } });
  }
}

module.exports = DoctorController
