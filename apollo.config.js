const { parsed } = require("dotenv").config({
  path: ".env.development"
});
if (!parsed) {
  console.error("Unable to parse .env file");
} else {
  const { REACT_APP_GITHUB_AUTH_TOKEN } = parsed;
  module.exports = {
    client: {
      service: {
        name: "github",
        // or from local file
        // localSchemaFile: "./schema.graphql",
        url: "https://api.github.com/graphql",
        // optional headers
        headers: {
          authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`
        },
        // optional disable SSL validation check
        skipSSLValidation: true
      }
    }
  };
}
