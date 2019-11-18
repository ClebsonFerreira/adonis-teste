'use strict'
const Specialty = use('App/Models/Specialty')
class SpecialtyController {

    async index() {
        const specialty = Specialty.all();
        return specialty
    }

    async show({ params }) {
        const specialty = await Specialty.findOrFail(params.id)
        return specialty
    }

    async store({ request, response }) {
        try {

            const eventParams = request.all();

            const SpecialtyNameExists = await Specialty
                .query()
                .where('name', eventParams.name)
                .where('specialtyCode', eventParams.specialtyCode)
                .first();

            if (SpecialtyNameExists) {
                return response
                    .status(400)
                    .send({ message: { error: 'Patient already registered' } })
            }

            const specialty = await Specialty.create({ ...eventParams })
            return specialty;

        } catch (error) {
            return response
                .status(500)
                .send({ message: { error: error } })
        }

    }

    async update() {

    }

    async destroy({ params, response }) {
        const specialty = await Specialty.find(params.id)
        if (!specialty) {
            return response.status(404).send({ message: { error: 'Resource not found' } })
        }

        await specialty.delete()

        return response.status(204).send({ message: { ok: 'deletado com sucesso' } });
    }
}

module.exports = SpecialtyController
