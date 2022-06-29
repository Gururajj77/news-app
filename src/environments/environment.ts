// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  newsApiUrl: "https://newsapi.org/v2/top-headlines?country=in&apiKey=05b10b5d6e73426490d6151df9b99bbd",

  techApiUrl: "https://newsapi.org/v2/top-headlines?category=technology&apiKey=05b10b5d6e73426490d6151df9b99bbd",

  sportsApiUrl: "https://newsapi.org/v2/top-headlines?category=sports&apiKey=05b10b5d6e73426490d6151df9b99bbd"
 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
