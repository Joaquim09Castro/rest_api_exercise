const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./database.db');

// Código dos exercícios de aula

app.use(bodyParser.json());

app.get('/', (req, resp) => {
  resp.send('Hello World!');
});

app.get('/tarefas', (req, resp) => {
  db.all('SELECT * FROM TAREFAS', (err, rows) =>
    resp.send(JSON.stringify({
      Results: rows
    }))
  );
});

app.post('/tarefas', (req, resp) => {
  db.run(
    `INSERT INTO TAREFAS (titulo,descricao,status)
      VALUES (?,?,?)`,
        [req.body.titulo,
        req.body.descricao,
        req.body.status]
       , err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  console.log(req.body);
  resp.status(200).send('Requisição enviada!');
});

app.listen(port, () => console.log('FOI'));
// ---

process.on('SIGINT', () => {
  db.close(err => {
    if (err)
      console.log(err);

    console.log('DB shutdown.');
    process.exit(0);
  });
})