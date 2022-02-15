require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const errorMiddleware = require('./middlewares/errorMiddleware');
const usersRouter = require('./routers/usersRouter');
const loginRouter = require('./routers/loginRouter');

app.use(errorMiddleware);
app.use('/user', usersRouter);
app.use('/login', loginRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
