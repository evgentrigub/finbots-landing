//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/public'));

console.log("dirname:" + __dirname);
const testFolder = __dirname + '/public';
const fs = require('fs');

console.log("FILES:");
fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
});


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);