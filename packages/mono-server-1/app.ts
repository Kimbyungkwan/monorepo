import express, { Request, Response, NextFunction } from 'express';
import { uuidV4 } from '@mono/utils/src';
const PORT = 8080;
const app = express();

app.use(express.json());
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});
app.get('/uuid', (req: Request, res: Response, next: NextFunction) => {
  res.send(uuidV4());
});

app.listen(PORT, () => {
  console.log(`Server listening on port: 8080`);
});
