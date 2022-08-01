import express from 'express';

import { JsonFileAttandanceRepo } from './repo/jsonFileAttandanceRepo';
import { PunchInOutService } from './service/punchInOutService';
import { BookPrintService } from './service/bookPrintService';
import { now } from './utils/date';

const app = express()
const port = 3000

const attandanceRepo = new JsonFileAttandanceRepo('attandances.json')
const punchInOutService = new PunchInOutService(attandanceRepo)
const bookPrintService = new BookPrintService(attandanceRepo)

app.get('/punchin', (req, res) => {
  punchInOutService.PunchIn(now());
  res.send('punchin')
})

app.get('/punchout', (req, res) => {
  punchInOutService.PunchOut(now());
  res.send('punchout')
})

app.get('/book', (req, res) => {
  bookPrintService.Render(now(), now())
  res.send('book')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
