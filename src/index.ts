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
    res.send('punchin');
  } catch (e) {
    next(e);
  }
})

app.get('/punchout', async (req, res, next) => {
  try {
    await punchInOutService.PunchOut(new Date());
    res.send('punchout');
  } catch (e) {
    next(e);
  }
})

app.get('/book', async (req, res, next) => {
  try {
    const now = new Date();
    const from = new Date(now.getFullYear(), now.getMonth())
    const to = new Date(now.getFullYear(), (now.getMonth() + 1) % 12)
    await bookPrintService.Render(from, to);
    res.send('book');
  } catch (e) {
    next(e);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
