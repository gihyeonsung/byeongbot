import { readFileJson, writeFileJson } from '../utils/fs';

import * as model from '../domain/model';
import * as dto from '../domain/dto';
import { AttandacneConverter } from '../domain/converter';
import { IAttandenceRepo } from './attandanceRepo';

interface RepoJson {
  Attandances: dto.Attandance[]
}

const repoJsonEmpty = { Attandances: [] };

export class JsonFileAttandanceRepo implements IAttandenceRepo {
  constructor(private filePath: string) {
  }

  async GetAll(): Promise<model.Attandance[]> {
    const json = await readFileJson<RepoJson>(this.filePath, repoJsonEmpty);
    const attandances = json.Attandances.map(AttandacneConverter.impl.toModel);
    return attandances;
  }

  async Add(a: model.Attandance): Promise<void> {
    const json = await readFileJson<RepoJson>(this.filePath, repoJsonEmpty);
    const attandances = json.Attandances.map(AttandacneConverter.impl.toModel);
    attandances.push(a);
    const jsonOut = { Attandances: attandances.map(AttandacneConverter.impl.toDto) } ;
    return writeFileJson(this.filePath, jsonOut);
  }
}
