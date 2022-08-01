import { readFileJson, writeFileJson } from '../utils/fs';

import { Attandance } from '../domain/model';
import { Attandance as AttandanceDto } from '../domain/dto';

interface RepoJson {
  Attandances: AttandanceDto[]
}

const repoJsonEmpty = { Attandances: [] };

export class JsonFileAttandanceRepo implements IAttandenceRepo {
  constructor(private filePath: string) {
  }

  async GetAll(): Promise<Attandance[]> {
    const json = await readFileJson<RepoJson>(this.filePath, repoJsonEmpty);
    return json.Attandances;
  }

  async Add(a: Attandance): Promise<void> {
    const json = await readFileJson<RepoJson>(this.filePath, repoJsonEmpty);
    json.Attandances.push(a);
    return writeFileJson(this.filePath, json);
  }
}
