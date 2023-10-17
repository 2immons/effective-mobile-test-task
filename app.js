const express = require('express')
const userRouter = require('./routes/user.routes')
const historyRouter = require('./routes/history.routes')

const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.json())
app.use('/', userRouter)
app.use('/', historyRouter)

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

server.on('error', (error) => {
    console.error('Server failed to start:', error);
});