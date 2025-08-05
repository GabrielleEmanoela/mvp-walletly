const path = require('path');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post('/user', (req, res) => {
  const user = router.db.get('user').value();
  if (user) {
    res.status(200).json({ ...user });
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

server.get('/transactions-history', (req, res) => {
  const user = router.db.get('user').value();
  if (!user) {
    return res.status(401).json({ error: 'Usuário não encontrado' });
  }
  const transactions = router.db.get('transactions-history').value();
  if (transactions) {
    res.status(200).json(transactions);
  } else {
    res.status(404).json({ error: 'Transações não encontradas' });
  }
});

server.get('/balance', (req, res) => {
  const user = router.db.get('user').value();
  if (!user) {
    return res.status(401).json({ error: 'Usuário não encontrado' });
  }
  const balance = router.db.get('balance').value();
  if (balance) {
    res.status(200).json(balance);
  } else {
    res.status(404).json({ error: 'Saldo não encontrado' });
  }
});

server.get('/transactions/:id', (req, res) => {
  const { id } = req.params;
  const transaction = router.db
    .get('transactions')
    .find({ id: String(id) })
    .value();
  if (transaction) {
    res.status(200).json(transaction);
  } else {
    res.status(404).json({ error: 'Transação não encontrada' });
  }
});

//All routes using the router
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server rodando na porta 3000');
});
