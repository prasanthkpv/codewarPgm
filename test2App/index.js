const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 3005;


app.use(bodyParser.json());
app.use(cors());

const logger = function(req, res, next){
    console.log('logger started');
    req.body.logger = "logger sarted";
    next();
}
app.use(logger);

app.get('/', function(req, resp){
    resp.send(' Server is working');
});

app.post('/user', (req, res) =>{
    res.send(req.body);
})

app.listen(PORT, ()=>{
    console.log(`server listening at:http://localhost${PORT}`);
});
