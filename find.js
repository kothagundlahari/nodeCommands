import { which, echo, exit, find } from 'shelljs';

if (which('git')) {
} else {
    echo('Sorry, this script requires git');
    exit(1);
}

find('files/text.js').filter(function(file) { console.log(file); });