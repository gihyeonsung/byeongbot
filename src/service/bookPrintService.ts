import { IAttandenceRepo } from '../repo/attandanceRepo';

interface IBookPrintService {
  Render(from: Date, to: Date): Promise<void>
}

export class BookPrintService implements IBookPrintService {
  constructor(private attandanceRepo: IAttandenceRepo) {
  }

  async Render(from: Date, to: Date): Promise<void> {
    const attandances = await this.attandanceRepo.GetAll();;

    attandances
      .sort((a0, a1) => a0.date.getTime() - a1.date.getTime())
      .filter(a => a.date.getTime() >= from.getTime())
      .filter(a => a.date.getTime() <= to.getTime());

    console.log(attandances);

    throw new Error("Method not implemented.");
  }
}
