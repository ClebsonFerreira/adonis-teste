'use strict'
const Unity = use('App/Models/Unity')

class UnityController {
    async index() {
        const Unitys = Unity.all()
        return Unitys
    }

    async show({ params }) {
        const Unitys = await Unity.findOrFail(params.id)
        return Unitys
    }

    async store({ request, response }) {
        try {

            const eventParams = request.all();

            const UnityNameExists = await Unity
                .query()
                .where('name', eventParams.name)
                .where('unityCode', eventParams.unityCode)
                .first();

            if (UnityNameExists) {
                return response
                    .status(400)
                    .send({ message: { error: 'Unity already registered' } })
            }

            const unity = await Unity.create({ ...eventParams })

            return unity;

        } catch (error) {
            return response
                .status(500)
                .send({ message: { error: error } })
        }

    }

    async update() {

    }

    async destroy({ params, response }) {
        const Unity = await Unity.find(params.id)
        if (!Unity) {
            return response.status(404).send({ message: { error: 'Resource not found' } })
        }

        await Unity.delete()

        return response.status(204).send({ message: { ok: 'deletado com sucesso' } });
    }
}

module.exports = UnityController
