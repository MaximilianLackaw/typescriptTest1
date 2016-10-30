import * as express from 'express';
import * as cors from 'cors';

import {WorkerFactory} from './workerFactory';

const app = express();
const port = 4500;

app.use(cors());

app.get('/', (req, res) => {
  let worker = new WorkerFactory().getWorker(1);

  let bla = worker.calculateTest()

  res.send('Hello World! ' + bla);
});

app.listen(port,() => {
  console.log(`App listening on ${port}`);
})
