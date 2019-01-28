var shell = require('shelljs');
shell.ls('*.js').forEach(function (file) {
    console.log(file);
});