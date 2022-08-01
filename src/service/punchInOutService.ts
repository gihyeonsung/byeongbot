interface IPunchInOutService {
  PunchIn(date: Date): Promise<void>
  PunchOut(date: Date): Promise<void>
}

export class PunchInOutService implements IPunchInOutService {
  constructor(private attandanceRepo: IAttandenceRepo) {
  }

  async PunchIn(date: Date): Promise<void> {
    return this.attandanceRepo.Add({ type: 'in', date: date });
  }

  async PunchOut(date: Date): Promise<void> {
    return this.attandanceRepo.Add({ type: 'out', date: date });
  }
}
