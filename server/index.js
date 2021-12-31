const db = require('./db/index')
const bodyParser = require('body-parser')
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import storyRoutes from './routes/story.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/stories', storyRoutes);

app.listen(8080, ()=> {

    console.log(' app is wokring on port 8080')
})

  