var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one': {
        title: 'Article one ! Seshan',
        heading: 'Article one',
        date: 'Date november 20',
        content: ` <p> OMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG
                hey mera India      </p>
                <p> OMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera India </p>`
        
    },
    
    'article-two': {
        title: 'Article two ! Seshan',
        heading: 'Article two',
        date: 'Date november 21',
        content: `<p> OMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera       IndiaOMGhey mera India </p> <p> OMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera India </p>`
    },
    
    'article-three': {
        title:'Article three ! Seshan',
        heading:'Article three',
        date:'Date november 22',
        content:`<p> OMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera India </p>
              <p> OMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera IndiaOMG hey mera India </p>`
    }

};

function createTemplate(data){
    var title =data.title;
    var heading =data.heading;
    var date =data.date;
    var content =data.content;
    var htmlTemplate = `
    <html> 
    
        <head>
            <title>${title}</title>    
            <link href="/ui/style.css" rel="stylesheet" />
            <meta name="viewport" content="width-device-width,intial-scale=1"/>
        </head>

        <body>
            <div class="container" >

                <div>   <a href='/'> Home </a> </div>

                <div>
                    <h1>${heading}</h1>
                </div>

                <div>
                    <h1>${date}</h1>
                </div>

                <div>
                    ${content} 
                </div>
            </div> 
        </body>

    </html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function(req, res){
    //articlename will be the article-one
    //[articleName] will be content object
   var articleName = req.params.articleName;     
   res.send(createTemplate(articles[articleName]));
});

app.get('/counter')
app.get('/article-two', function(req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
