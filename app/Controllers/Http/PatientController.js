'use strict'
const Patient = use('App/Models/Patient')

class PatientController {

    async index() {
        const patients = Patient.query().with('Specialty').with('Unity').fetch();
        return patients
    }

    async show({ params }) {
        const patients = await Patient.findOrFail(params.id)
        return patients
    }

    async store({ request, response }) {
        try {

            const eventParams = request.all();

            const PatientNameExists = await Patient
                .query()
                .where('name', eventParams.name)
                .where('motherName', eventParams.motherName)
                .where('susCardNumber', eventParams.susCardNumber)
                .first();

            if (PatientNameExists) {
                return response
                    .status(400)
                    .send({ message: { error: 'Patient already registered' } })
            }

            const patient = await Patient.create({ ...eventParams })
            return patient;

        } catch (error) {
            return response
                .status(500)
                .send({ message: { error: error } })
        }

    }

    async update() {

    }

    async destroy({ params, response }) {
        const patient = await Patient.find(params.id)
        if (!patient) {
            return response.status(404).send({ message: { error: 'Resource not found' } })
        }

        await patient.delete()

        return response.status(204).send({ message: { ok: 'deletado com sucesso' } });
    }
}

module.exports = PatientController
