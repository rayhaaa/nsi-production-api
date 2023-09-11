const express = require('express');
const cors = require('cors');
const port = 3004;

const lineRoutes = require('./routes')

const response = require('./response');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    response(200, '', 'production api', 'home', res);
});

// get data production
app.use('/api', lineRoutes)

app.listen(port, () => {
    console.log(`server listen on ${port}`);
});
