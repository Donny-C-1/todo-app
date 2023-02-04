const fs = require('fs');

const cb = (err) => {
    if (err) throw(err);
    console.log('File copied to dist');
}

fs.copyFile('./src/index.html', './dist/index.html', cb)

fs.copyFile('./src/style.css', './dist/style.css', cb)
