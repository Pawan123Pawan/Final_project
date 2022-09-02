const express=require('express')
const bodyParser = require('body-parser');
const app= express();

const promoRouter = require('./express');

app.use('/promtions', promoRouter);

app.use(bodyParser.json());

app.all('/promtions', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/promtions', (req,res,next) => {
    res.end('Will send all the promtions to you!');
});

app.post('/promtions', (req, res, next) => {
 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/promtions', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promtions');
});
 
app.delete('/promtions', (req, res, next) => {
    res.end('Deleting all promtions');
});

app.get('/promtions/:promoID', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.promoID +' to you!');
});

app.post('/promtions/:promoID', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promtions/'+ req.params.promoID);
});

app.put('/promtions/:promoID', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.promoID + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/promtions/:promoID', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.promoID);
});
app.listen(4000,()=>{
    console.log(`server running at 4000..........`)
})