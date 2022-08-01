interface RepoJson {
  Attandances: Attandance[]
}

class JsonFileAttandanceRepo implements IAttandenceRepo {
  private json: RepoJson;

  constructor() {
    this.json = { Attandances: [] };
  }

  async GetAll(): Promise<Attandance[]> {
    return this.json.Attandances;
  }

  async Add(a: Attandance): Promise<void> {
    this.json.Attandances.push(a);
  }
}
