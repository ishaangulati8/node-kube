const os = require("os");
const express = require('express');
const bodyParser = require('body-parser');

const hostname = os.hostname();

const PORT = 3001
const app = express();
app.use(bodyParser.json())

app.use('/', (req, res) => {
    const resp = `Hello from host: ${hostname}`;
    res.status(200).json({
        success: true,
        message: resp,
    })
})
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Listening on port number: ", PORT);
    }
});
