import { readFileJson, writeFileJson } from '../utils/fs';

import * as model from '../domain/model';
import * as dto from '../domain/dto';
import { AttandacneMapper } from '../domain/mapper';
import { IAttandenceRepo } from './attandanceRepo';

export class JsonFileAttandanceRepo implements IAttandenceRepo {
  constructor(private filePath: string) {
  }

  async GetAll(): Promise<model.Attandance[]> {
    const json = await readFileJson<dto.Attandance[]>(this.filePath, []);
    const attandances = json.map(AttandacneMapper.impl.toModel);
    return attandances;
  }

  async Add(a: model.Attandance): Promise<void> {
    const json = await readFileJson<dto.Attandance[]>(this.filePath, []);
    const attandances = json.map(AttandacneMapper.impl.toModel);
    attandances.push(a);
    const jsonOut = attandances.map(AttandacneMapper.impl.toDto);
    return writeFileJson(this.filePath, jsonOut);
  }
}
