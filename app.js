import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8000
app.use(express.static('dist'));
app.get('/', function(req, res){
    // res.send('this is working')
  res.sendFile(path.join(__dirname, './src/index.html'));
}).listen(port, function(){
    console.log('server is up')
})