const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./database.db');

// Código dos exercícios de aula

// 14/09/2020

app.use(bodyParser.json());

app.get('/', (req, resp) => {
  resp.send('Hello World!');
});

app.get('/tarefas', (req, resp) => {
  db.all('SELECT * FROM TAREFAS', (err, rows) =>
    resp.status(200).send(JSON.stringify({
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
      req.body.status
    ], err => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    });

  console.log(req.body);
  resp.status(200).send('Requisição enviada!');
});

// 15/09/2020

app.delete('/tarefas/:taskId', (req, resp) => {
  db.run(
    `DELETE FROM TAREFAS
      WHERE id = ?`,
    [req.params.taskId],
    err => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    });

  resp.status(200).send('task Deleted');
});

app.put('/tarefas/:taskId', (req, resp) => {
  db.run(
    `UPDATE TAREFAS
      SET titulo = ?
      WHERE id = ?`,
    [req.body.titulo,
      req.params.taskId
    ],
    err => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    }
  );

  resp.status(200).send('task Updated');
})

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