const scanner = require('sonarqube-scanner');

// sqp_c653212be98892b1e551ca6f080d4e85af1e5ef1

scanner(
  {
    serverUrl: "http://localhost:9000",
    login: "admin",
    password: "1q2w3e4r5t6y",
    token: "sqp_c653212be98892b1e551ca6f080d4e85af1e5ef1",
    options: {
      "sonar.projectKey": "nyoba-lagi", // Change to the desired project key
      "sonar.projectName": "nyoba lagi", // Change to the desired project name
      "sonar.sources": "./src",
      // Add other analysis options as needed
    },
  },
  () => process.exit()
);
