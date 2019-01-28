import { ls } from 'shelljs';
ls('*.js').forEach(function (file) {
    console.log(file);
});