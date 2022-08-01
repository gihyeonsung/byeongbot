import { readFileJson, writeFileJson } from '../utils/fs';

import { Attandance } from '../domain/model';
import { IAttandenceRepo } from './attandanceRepo';

interface RepoJson {
  Attandances: Attandance[]
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
