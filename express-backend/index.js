const express = require('express');
const compression = require('compression');
const app = express();
const port = 3000;
const app_folder = 'dist/'

app.use(compression());

app.get('*.*', express.static(app_folder, {maxAge: '1y'}));

app.all('*', function(req, res) {
    res.status(200).sendFile('/', {root: app_folder});
});

app.listen(port, function () {
    console.log(`Server running on Port:${port}`);
});