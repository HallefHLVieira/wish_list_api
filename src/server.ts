import express, {Request, Response} from "express";

const server = express();

server.get('/hello', (req: Request, res: Response) => {
  console.log('Hello World');
  res.status(200).send("Hello World!");
})

server.listen(3333, () => {
  console.log('Server is running... 🤖️');
  
})