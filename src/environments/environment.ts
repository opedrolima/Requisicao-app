// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false, 
  firebase: {
apiKey: "AIzaSyCA5AhyrgWiO2rnomb6olYqXSe27n3ShxY",
  authDomain: "requisicoes-app-89c79.firebaseapp.com",
  projectId: "requisicoes-app-89c79",
  storageBucket: "requisicoes-app-89c79.firebasestorage.app",
  messagingSenderId: "1021635128306",
  appId: "1:1021635128306:web:96798a3191a5e404e5196b",
  measurementId: "G-KKWY0DHCPN"
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
