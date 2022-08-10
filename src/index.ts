import express from 'express';
import dotenv from 'dotenv';
import { JsonFileAttandanceRepo } from './repo/jsonFileAttandanceRepo';
import { PunchInOutService } from './service/punchInOutService';
import { BookPrintService } from './service/bookPrintService';

dotenv.config();

const attandanceRepo = new JsonFileAttandanceRepo(process.env.DB_PATH ?? 'db.json')
const punchInOutService = new PunchInOutService(attandanceRepo)
const bookPrintService = new BookPrintService(attandanceRepo)

const app = express()
const port = 3000

app.get('/punchin', async (req, res, next) => {
  try {
    await punchInOutService.PunchIn(new Date());
    res.status(200).send('punchin');
  } catch (e) {
    next(e);
  }
})

app.get('/punchout', (req, res) => {
  punchInOutService.PunchOut(new Date());
  res.send('punchout')
})

app.get('/book', (req, res) => {
  const now = new Date();
  const from = new Date(now.getFullYear(), now.getMonth())
  const to = new Date(now.getFullYear(), (now.getMonth() + 1) % 12)
  bookPrintService.Render(from, to);
  res.send('book')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
