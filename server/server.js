import express from 'express';
import bodyParser from 'body-parser';
import SourceMapSupport from 'source-map-support'
SourceMapSupport.install()
const path= require('path')


const app = express();
app.use(express.static('static'));


app.get('*', (req, res)=>{
    res.sendFile(path.resolve('../static/'))
}
)

app.listen(3000, ()=>console.log('App started at port 3000'));
