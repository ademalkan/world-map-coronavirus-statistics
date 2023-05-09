// jest.config.js

const { defaults } = require("jest-config");

module.exports = {
  // ... other config options ...
  transform: {
    ...defaults.transform,
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { presets: ["next/babel"] }, // add this line to handle Next.js-specific syntax
    ],
    "^.+\\.css$": "<rootDir>/test/style-transformer.js", // add this line to handle CSS files
    "^.+\\.leaflet$": "<rootDir>/test/file-transformer.js", // add this line to handle leaflet files
  },
};
