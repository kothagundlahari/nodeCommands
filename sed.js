// This is your Editor pane. Write your JavaScript here and 
// use the command line to execute commands
var shell = require('shelljs');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}


// Replace macros in each .js file
shell.cd('./files');
shell.ls('*.js').forEach(function (file) {
    shell.sed('-i', /^.*node.*$/, '', file);
    shell.sed('-i', /.*express.*\n/, shell.cat('text.js'), file);
});