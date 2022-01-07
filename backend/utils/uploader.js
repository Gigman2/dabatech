const fs = require('fs');

const storeFS = ({ stream, filename }) => {
    const uploadDir = './photos';
    const path = `${uploadDir}/${filename}`;
    return new Promise((resolve, reject) =>
        stream
        .on('error', error => {
            if (stream.truncated)
                fs.unlinkSync(path);
            reject(error);
        })
        .pipe(fs.createWriteStream(path))
        .on('error', error => reject(error))
        .on('finish', () => resolve({ path }))
    );
}

module.exports = storeFS