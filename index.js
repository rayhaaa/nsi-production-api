const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const port = 3004;

const lineRoutes = require('./routes')

const response = require('./utils/response');

const emitData = require('./controller/web-socket/lineControllerSocket')

const app = express();
app.use(cors());

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

app.get('/', (req, res) => {
    response(200, '', 'production api', 'home', res);
});

// get data production
app.use('/api', lineRoutes)


// emit data ke client
io.on('connection', (socket) => {
    console.log('frontend connected');

    const emitDataInterval = setInterval(() => {
        emitData(socket)
    }, 10000)

    socket.on('disconnect', () => {
        console.log('frontend disconnected')
        clearInterval(emitDataInterval)
    })
})

server.listen(port, () => {
    console.log(`server listen on ${port}`);
});
