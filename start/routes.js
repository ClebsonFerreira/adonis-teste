'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('/', () => {
    return { verson: '1.0.0' }
  })
  Route.post('/users', 'UserController.create')
  Route.post('/sessions', 'SessionController.create')
}).prefix('api/v1');


Route.group(() => {
  Route.resource('patient', 'PatientController')
    .apiOnly();

  Route.resource('unity', 'UnityController')
    .apiOnly();

  Route.resource('specialty', 'SpecialtyController')
    .apiOnly();

  Route.resource('doctor', 'DoctorController')
    .apiOnly();

}).prefix('api/v1').middleware('auth')

