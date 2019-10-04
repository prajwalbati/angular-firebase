// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import data from '../../env.json';

export const environment = {
    production: false,
    firebaseConfig: {
      "apiKey": "AIzaSyAS3hqBrhg9kI1q9gS-pfRemQ96FmeBg44",
      "authDomain": "angular-firebase-c2853.firebaseapp.com",
      "databaseURL": "https://angular-firebase-c2853.firebaseio.com",
      "projectId": "angular-firebase-c2853",
      "storageBucket": "angular-firebase-c2853.appspot.com",
      "messagingSenderId": "823605048475",
      "appId": "1:823605048475:web:5533d3916308f00930823e"
    }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
