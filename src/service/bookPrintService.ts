interface IBookPrintService {
  Render(from: Date, to: Date): Promise<void>
}

class BookPrintService implements IBookPrintService {
  constructor(private attandanceRepo: IAttandenceRepo) {
  }

  async Render(from: Date, to: Date): Promise<void> {
    throw new Error("Method not implemented.");
  }
}