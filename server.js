const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('layout', '../layouts/layout');
app.use(expressEjsLayouts);
app.use(express.static('public'));
app.use('/', indexRouter);

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'))

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})