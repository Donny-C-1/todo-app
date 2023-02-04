const fs = require('fs');

fs.readdir('./src', (err, files) => {
    if (err) throw(err);

    // *Retrieve all paths
    const folders = files.filter(fileName => !(/.*\.(mj|j)s/.test(fileName)));
    console.log(folders);

    fs.copyFile('./src/images', './dist/images', err => {
        if (err) throw(err);
        console.log('File has been copied');
    })


    // *Remove all .js and .mjs files
    // const nonCompileFiles = files.filter(file => /.*/.test(file));


    console.log(files);
})

async function moveFilesInPath(path, cb) {
    // todo Run some code to seperate all the folders, javascript files and normal files
    // todo call this function with all the folders path
    // todo Move all non javascript files

    fs.readder(path, (err, files) => {
        if (err) throw(err);

        const folders = files.filter(fileName => /.*/.test(fileName));
    })
}