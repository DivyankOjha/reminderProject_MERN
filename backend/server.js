const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
// const socketIO = require('socket.io');
const http = require('http');
// const socketio = require('socket.io');
// const io = socketio(http);
const server = http.createServer(app);
// const http = require('http').createServer(app);
// const socketio = require('socket.io');
// const io = socketio(http);
// const io = require('socket.io')(server);

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.PASSWORD
);
console.log(DB)
mongoose
    .connect(
         DB,
        {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    
    }
    )
    .then(() => {
        console.log('DB connection successfull');
    }).catch((e)=>{
        console.log(e)
    })

// const io = socketIO(server);
// app.set('io', io);

const port = process.env.PORT || 4000;

// io.on('connection', socketManager);

// const io = (module.exports.io = require('socket.io')(server));
// const socketManager = require('./socketManager/socketManager');

// io.on('connection', socketManager);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
