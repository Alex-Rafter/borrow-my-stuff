var cron = require('node-cron');
const shell = require('shelljs')

cron.schedule('* * * * *', () => {
    shell.exec('bash cv.sh')
});
