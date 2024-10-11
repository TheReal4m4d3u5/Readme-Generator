// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


    switch(license) {
      case "mit":
        return  '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        break;
      case "apache":
        return  '![License: License Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
        break;
      default:
        return "";
    }
  
  }