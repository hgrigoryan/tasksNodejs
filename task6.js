const Stream = require("stream");
const moment = require("moment");
const fs = require('fs');

const readbleSream = new Stream.Readable( {
    read() {
        this.timeoutId = setTimeout(() => {
            const timestamp = (new Date()).getTime();
            this.push(timestamp.toString());
    }, 1000);
    },
    destroy() {
        clearTimeout(this.timeoutId);
    }
});

const transformStream = new Stream.Transform(
    {
        transform(chunk, encoding, callback) {
            let result = moment(+chunk).format('MMMM/D/YYYY HH:mm:ss');
            result += "\n";
            callback(null, result);
          },
    }
);

const writableStream = fs.createWriteStream('./output');

readbleSream.pipe(transformStream).pipe(writableStream);