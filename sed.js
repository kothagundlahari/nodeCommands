// This is your Editor pane. Write your JavaScript here and 
// use the command line to execute commands
import { which, echo, exit, cd, ls, sed, cat } from 'shelljs';

if (!which('git')) {
    echo('Sorry, this script requires git');
    exit(1);
}


// Replace macros in each .js file
cd('./files');
ls('*.js').forEach(function (file) {
    sed('-i', /^.*node.*$/, '', file);
    sed('-i', /.*express.*\n/, cat('text.js'), file);
});
