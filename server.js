const express = require('express');

///creer app

let app = express();
const PORT = process.env.PORT || 3000;

///verifier que la personne a pas ete sur https, on sert sur http seulement.
app.use(function (req, res, next){
 if(req.headers['x-forwarded-proto'] === 'http'){
   next();  //next est comme return ... tout est beau
 } else {
   res.redirect('http://' + req.hostname + req.url )  //si sur https, remet sur http
 }
});


app.use(express.static('build'));

app.listen(PORT, function (){
 console.log('ca roule... sur le port: ' + PORT )
});
