import express from 'express'
var app = express();
var port = process.env.PORT || 3000;

var routes = require('./api/routes');
routes(app);
app.listen(port, () => {
   console.log('Server started on port: ' + port);
});
