// const path = require('path');
// const express = require('express');
// const app = express();

// let env = process.env.NODE_ENV || 'development';

// let forceSSL = (req, res, next) => {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//         return res.redirect(['https://', req.get('Host'), req.url].join(''));
//     }
//     return next();
// };

// if (env === 'production') {
//     app.use(forceSSL);
// }

// // Serve static files
// app.use(express.static(__dirname + '/dist/the_story_teller'));

// // Send all requests to index.html
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/the_story_teller/index.html'));
// });

// // default Heroku port
// app.listen(process.env.PORT || 5000);





//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/the_story_teller'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/the_story_teller/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);