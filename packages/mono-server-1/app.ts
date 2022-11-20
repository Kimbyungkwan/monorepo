import express, { Request, Response, NextFunction } from 'express';

const PORT = 8080;
const app = express();

app.use(express.json());
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: 8080`);
});
