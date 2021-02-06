const fs = require('fs');
const colors = require('colors');

const createFile = async (base, log, lenght) => {

    try {

        let exit ='';
        let consola = '';

        for (let i = 1; i <= lenght; i++) {
            let total = base * i;
            exit += `${base} x ${i} = ${total}\n`;
            consola += `${colors.yellow(base)} x ${colors.yellow(i)} = ${colors.yellow(total)}\n`;
        }

        if (log) {
            console.log(colors.green('==================='));
            console.log(colors.green('   Tabla del'), base);
            console.log(colors.green('==================='));
            console.log(consola);
        }
        
        const fileName = `tabla-${base}.txt`;
        const folder = './outputs'

        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }

        fs.writeFileSync(`${folder}/${fileName}`, exit);
        return fileName;

    } catch (err) {
        throw err;
    }
};

module.exports = {
    createFile
}