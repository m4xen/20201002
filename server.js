var express = require('express');

var app = express();
app.get('/', function(req, res){
    res.send('Hello from Express');
})

app.get('/notes', function(req, res){
    res.send('Notes coming sone');
})

app.get('/notes/:id', function(req, res){
    res.send('Content of note: ' + req.params.id);
})

app.use(function(req, res){
    res.status(404).send('Not allowed');
})

app.listen(8088, function(){
    consloe.log('Server is upp and runnign on port 8088');
})