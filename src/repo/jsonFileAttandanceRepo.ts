import { readFileJson, writeFileJson } from '../utils/fs';

interface RepoJson {
  Attandances: Attandance[]
}

const repoJsonEmpty = { Attandances: [] };

export class JsonFileAttandanceRepo implements IAttandenceRepo {
  constructor(private filePath: string) {
  }

  async GetAll(): Promise<Attandance[]> {
    const json: RepoJson = await readFileJson(this.filePath, repoJsonEmpty);
    return json.Attandances;
  }

  async Add(a: Attandance): Promise<void> {
    const json: RepoJson = await readFileJson(this.filePath, repoJsonEmpty);
    json.Attandances.push(a);
    return writeFileJson(this.filePath, json);
  }
}
