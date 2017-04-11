const express = require('express');

///creer app

let app = express();
app.use(express.static('src'));

app.listen(3000, function (){
 console.log('ca roule...')
});
