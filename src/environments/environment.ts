// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//ALMACENA LA URL DE LA API
export const environment = {
  firebase: {
    projectId: 'iprepublica-48c2b',
    appId: '1:783384163557:web:42fd0f980275b2a1fad00c',
    storageBucket: 'iprepublica-48c2b.appspot.com',
    apiKey: 'AIzaSyBKEqABqITeXEsVPLm79u8xfl0lbjdHC7w',
    authDomain: 'iprepublica-48c2b.firebaseapp.com',
    messagingSenderId: '783384163557',
  },
  production: false,
  api : 'https://es.wikipedia.org/w/api.php',
  baseUrl:'http://localhost:3000/',
  createUser:'http://localhost:3000/user',
  multas: 'http://localhost:3000/multaxpatente',
  vehiculo:'http://localhost:3000/vehiculo/',
  vehiculos: 'http://localhost:3000/propietario/allcars/',
  token: 'http://localhost:3000/auth/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
