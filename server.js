var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));

app.get('', function(req, res){
	var lang = req.query.lang;
    if (lang === 'en')
        res.sendFile(path.join(__dirname + '/index.en.html'));
    else
        res.sendFile(path.join(__dirname + '/index.html'));
	// res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index', function(req, res) {
	var lang = req.query.lang;
	if (lang === 'en')
		res.sendFile(path.join(__dirname + '/app/index.en.html'));
	else
		res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.get('/faq', function(req, res){
    var lang = req.query.lang;
    if (lang === 'en')
        res.sendFile(path.join(__dirname + '/app/views/faq.en.html'));
    else
        res.sendFile(path.join(__dirname + '/app/views/faq.html'));
});

app.get('/strona', function(req, res){
    var lang = req.query.lang;
    if (lang === 'en')
        res.sendFile(path.join(__dirname + '/app/views/strona.en.html'));
    else
        res.sendFile(path.join(__dirname + '/app/views/strona.html'));
});

app.get('/calc', function(req, res) {
    var lang = req.query.lang;
    if (lang === 'en')
        res.sendFile(path.join(__dirname + '/app/views/calc.en.html'));
    else
        res.sendFile(path.join(__dirname + '/app/views/calc.html'));
});

app.listen(8080);
console.log('blog server listening on port 8080');
