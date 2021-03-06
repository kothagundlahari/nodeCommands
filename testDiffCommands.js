const LargeFileDiff = require('./app.js');

const argv = process.argv;

if (argv.length < 4) {
    console.log('-: require two files as arguments');
    console.log('usage: text-file-diff file1 file2\n');
    process.exit(1);
}

const file1 = argv[2];
const file2 = argv[3];

const lfd = new LargeFileDiff({
    skipHeader: argv.skipHeader
});

lfd.on('+', line => {
    console.log('+|' + line);
});

lfd.on('-', line => {
    //console.log('-|' + line);
});
lfd.diff(file1, file2);

