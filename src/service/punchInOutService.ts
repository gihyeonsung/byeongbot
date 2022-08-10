import { IAttandenceRepo } from '../repo/attandanceRepo';

interface IPunchInOutService {
  PunchIn(date: Date): Promise<void>
  PunchOut(date: Date): Promise<void>
}

export class PunchInOutService implements IPunchInOutService {
  constructor(private attandanceRepo: IAttandenceRepo) {
  }

  async PunchIn(date: Date): Promise<void> {
    const attandances = await this.attandanceRepo.GetAll();

    const last = attandances.sort((a, b) => a.date.getTime() - b.date.getTime()).pop();

    if (last && last.type != 'out') {
      throw Error('you already punched in punch out first: ' + JSON.stringify(last));
    }

    return this.attandanceRepo.Add({ type: 'in', date: date });
  }

  async PunchOut(date: Date): Promise<void> {
    return this.attandanceRepo.Add({ type: 'out', date: date });
  }
}
