// Environment variables check
const { HOST, PORT, MONGODB_URL } = process.env;
if (!HOST || !PORT || !MONGODB_URL) {
  console.log('ERROR: Environment variables not set. Please refer to the .env-example file.');
  console.log(`HOST: ${HOST}, PORT: ${PORT}, MONGODB_URL: ${MONGODB_URL}`);
  console.log('Exiting node process.');
  process.exit();
}

// Launch server app
require('./app');
