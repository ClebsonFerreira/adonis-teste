'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Patient', (faker) => {
  return {
    name: faker.username(),
    socialName:faker.username(),
    motherName:faker.username(),
    susCardNumber:Math.floor(Math.random() * 999999999 + 1),
    specialty_id:Math.floor(Math.random() * 10 + 1),
    unity_id:Math.floor(Math.random() * 10 + 1)
  }
})
