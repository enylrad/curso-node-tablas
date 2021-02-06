const { options } = require('yargs');
const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

createFile(argv.b, argv.c, argv.l)
    .then((fileName) => console.log(`${fileName} creado.`))
    .catch((err) => `Error al crear el fichero. Causa: ${err}`);
