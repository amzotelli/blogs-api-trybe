require('dotenv').config();
const express = require('express');

const app = express();

const usersRouter = require('./routers/usersRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(errorMiddleware);
app.use('/users', usersRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
