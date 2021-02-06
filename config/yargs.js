const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'This is the base of the multiplication table',
    })
    .option('c', {
        alias: 'console-log',
        type: 'boolean',
        default: false,
        describe: 'Show table in console',
    })
    .option('l', {
        alias: 'lenght',
        type: 'number',
        default: 10,
        describe: 'This is the limit of the multiplication table',
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'The base has to be a number';
        }
        if (isNaN(argv.lenght)) {
            throw 'The limit has to be a number';
        }
        return true;
    })
    .argv;

module.exports = argv;