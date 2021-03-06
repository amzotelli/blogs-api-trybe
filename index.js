require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const errorMiddleware = require('./middlewares/errorMiddleware');
const usersRouter = require('./routers/usersRouter');
const loginRouter = require('./routers/loginRouter');
const categoriesRouter = require('./routers/categoriesRouter');
const postsRouter = require('./routers/postsRouter');

app.use('/user', usersRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postsRouter);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
